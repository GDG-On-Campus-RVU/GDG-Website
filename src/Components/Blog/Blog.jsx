import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import blogData from '../../api/blogData.json';
import { FaHandPointer } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = () => {
        setCurrentIndex((prev) => (prev + 1) % (blogData.length + 1));
    };

    const slideStyle = {
        width: '600px',
        height: '371px'
    };

    return (
        <div className="blog-container w-full h-screen flex flex-col items-center justify-center py-8 bg-black">
            <h2 className="text-4xl font-bold mb-16 -mt-20 text-white tracking-wide">Blogs</h2>

            <div className="relative w-full flex justify-between items-center px-20">
                <div className="card-stack-container relative h-[400px] flex items-center justify-center ml-20">
                    <AnimatePresence>
                        {[null, ...blogData].map((article, index) => {
                            if ((index - currentIndex + blogData.length + 1) % (blogData.length + 1) > 3) return null;

                            const isTop = index === currentIndex;
                            
                            return (
                                <motion.div
                                    key={index}
                                    className={`card absolute ${isTop ? 'z-20' : 'pointer-events-none'}`}
                                    initial={{ scale: 0.8, y: 100, opacity: 0 }}
                                    animate={{
                                        scale: 1 - ((index - currentIndex + blogData.length + 1) % (blogData.length + 1)) * 0.05,
                                        y: ((index - currentIndex + blogData.length + 1) % (blogData.length + 1)) * -20,
                                        opacity: 1 - ((index - currentIndex + blogData.length + 1) % (blogData.length + 1)) * 0.2,
                                        zIndex: blogData.length + 1 - ((index - currentIndex + blogData.length + 1) % (blogData.length + 1)),
                                        rotate: ((index - currentIndex + blogData.length + 1) % (blogData.length + 1)) * -2,
                                    }}
                                    exit={{ scale: 0.8, y: -100, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={isTop ? handleCardClick : undefined}
                                    style={{ cursor: isTop ? 'pointer' : 'default' }}
                                >
                                    {index === 0 ? (
                                        <div className="card-content overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm" style={slideStyle}>
                                            <img 
                                                src="/images/Common/Bluesymbol.png"
                                                alt="Blog Symbol"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="card-content bg-[#0f4db6] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(15,77,182,0.3)] transition-shadow duration-300" style={slideStyle}>
                                            <div className="h-[60%] overflow-hidden">
                                                <img 
                                                    src={article.image}
                                                    alt={article.title} 
                                                    className="w-full h-full object-cover bg-white"
                                                />
                                            </div>
                                            <div className="h-[40%] p-6 flex flex-col justify-between bg-gradient-to-b from-[#0f4db6] to-[#0a3781]">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                                        {article.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-200 opacity-80">By: {article.author}</p>
                                                </div>
                                                <a
                                                    href={article.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="read-more-btn inline-block text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 text-white"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end text-gray-400">
                        <p className="text-right font-medium">Click the card</p>
                        <p className="text-right">to see next article</p>
                    </div>
                    <FaHandPointer className="text-xl text-gray-400 animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default Blog;
