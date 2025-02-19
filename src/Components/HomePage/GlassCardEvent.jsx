import React from "react";
import { motion } from "framer-motion";

const GlassCardEvent = ({ image, title, description }) => {
  return (
    <motion.div 
      className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      {/* Text Content */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white break-words">{title}</h2>
        <p className="text-gray-300 mt-2 break-words">{description}</p>
      </div>
    </motion.div>
  );
};

export default GlassCardEvent;
