import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ScrambleText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [animationDone, setAnimationDone] = useState(false);
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

            iteration += 1 / 4; // Slower effect

            if (iteration >= text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setAnimationDone(true);
                    onComplete();
                }, 1000); // 1s delay before fade out
            }
        }, 80); 

        return () => clearInterval(interval);
    }, [text, onComplete]);

    return (
        <AnimatePresence>
            {!animationDone && (
                <motion.h1 
                    className="text-5xl font-semibold font-bebas text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }} // Fade & Shrink
                    transition={{ duration: 1 }}
                    style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                >
                    {displayedText}
                </motion.h1>
            )}
        </AnimatePresence>
    );
};

function FirstSection() {
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <div className="h-screen w-full relative">
            {/* Centered Scrambling Text */}
            {!animationComplete && (
                <ScrambleText text="WE ARE GDG RVU" onComplete={() => setAnimationComplete(true)} />
            )}

            {/* Main Content Grid (Appears After Text Fades Out) */}
            {animationComplete && (
                <motion.div 
                    className="grid grid-cols-2 grid-rows-2 gap-4 h-screen w-full p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                > 
                    {/* Left Section */}
                    <motion.div 
                        className="text-center mt-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Here we will add an image or a 3D element
                    </motion.div>
                    
                    {/* Right-Side Text */}
                    <motion.div 
                        className="flex flex-col justify-center items-end p-4 text-right"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <h1 className="text-5xl font-semibold font-bebas">WE ARE GDG RVU</h1>
                        <p className="mt-2 text-3xl">
                            Description of GDG RVU blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                        </p>
                    </motion.div>

                    {/* Bottom Center Text */}
                    <motion.div 
                        className="col-span-2 flex justify-center items-end p-4 font-bebas"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <h2 className="text-5xl font-bold berus mb-3">GO CHANGE THE WORLD</h2>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

export default FirstSection;
