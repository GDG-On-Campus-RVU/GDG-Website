import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Spline from '@splinetool/react-spline';



const ScrambleText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState(text);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayedText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) return text[index]; 
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            iteration += 1 / 2;

            if (iteration >= text.length) {
                clearInterval(interval);
                setTimeout(onComplete, 500);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [text, onComplete]);

    return (
        <motion.h1 
            className="text-5xl font-semibold font-bebas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {displayedText}
        </motion.h1>
    );
};

function FirstSection() {
    const [showMainContent, setShowMainContent] = useState(false);
    const [showGoChangeText, setShowGoChangeText] = useState(false);
    const [showImageText, setShowImageText] = useState(false);
    const [showHeading, setShowHeading] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [headingRendered, setHeadingRendered] = useState(false);


    return (
        <div className="h-screen w-full flex flex-col items-center justify-center relative">
            {/* Initial Text Moving Up */}
            <AnimatePresence>
                {!showMainContent && (
                    <motion.h1 
                        className="text-6xl font-semibold font-bebas absolute"
                        initial={{ opacity: 0, y: 50 }} // Start hidden and lower
                        animate={{ opacity: 1, y: 0 }} // Fade in and move up
                        exit={{ opacity: 0, y: -50 }} // Fade out and move up further
                        transition={{ duration: 1, ease: "easeOut" }}
                        onAnimationComplete={() => setTimeout(() => setShowMainContent(true), 500)} // Delay before showing main content
                    >
                        WELCOME TO GDG RVU
                    </motion.h1>
                )}
            </AnimatePresence>

            {/* Main Content */}
            {showMainContent && (
                <motion.div 
                    className="grid grid-cols-2 grid-rows-2 gap-4 h-screen w-full p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                > 
                    {/* Left Section */}

                    <motion.div 
                        className="absolute inset-0 z-0 flex items-center justify-center z-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        onAnimationComplete={() => setShowHeading(true)}
                        >
                        <div style={{
                            transform: 'scale(1.5) translateX(-20%)',
                            transformOrigin: 'center',
                            width: '100%',
                            height: '100%',
                            }}>
                            <Spline 
                                scene="https://prod.spline.design/bP7bWHRoYrCEc54f/scene.splinecode"
                                style={{ width: '100vw', height: '100vh' }}
                            />
                        </div>

                        </motion.div>
                    
                    {/* Right-Side Text */}
                    {showHeading && (
                        <motion.div 
                            className="col-start-2 row-start-1 flex flex-col justify-end items-end text-right p-4 self-end z-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                             {!headingRendered && (  
                            <ScrambleText  key="heading" text="WE ARE GDG RVU" onComplete={() => {setShowDescription(true); setHeadingRendered(true); }} />
                             )}
                             {headingRendered && <h1 className="text-5xl font-semibold font-bebas">WE ARE GDG RVU</h1>}
                        </motion.div>
                    )}

                    {showDescription && (
                        <motion.div 
                            className="col-start-2 row-start-2 flex flex-col justify-start items-end text-right p-4 z-10"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            onAnimationComplete={() => setShowGoChangeText(true)}
                        >
                            <p className="mt-2 text-2xl top=0 ">
                                Description of GDG RVU blah blah blah blah blah blahlah blah blah blah blah blah blah blah blahlah blah blah blah blah blah blah blah blahlah blah blah blah blah blah blah blah blahlah blah 
                            </p>
                        </motion.div>
                    )}

                    {/* Bottom Center Text */}
                    {showGoChangeText && (
                        <motion.div 
                            className="col-span-2 flex justify-center items-end p-4 font-bebas z-10"
                            // initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <ScrambleText key="cta" text="GO CHANGE THE WORLD" onComplete={() => setShowMainContent(true)} />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </div>
    );
}

export default FirstSection;
