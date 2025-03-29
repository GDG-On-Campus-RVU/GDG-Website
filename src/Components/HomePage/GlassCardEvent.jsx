import React from "react";
import { motion } from "framer-motion";
import eventLogo from "../../assets/SVG/events_logo.svg";


const GlassCardEvent = ({ image, title, description, link }) => {
  const maxLength = 100;
  const truncatedText =
    description.length > maxLength
      ? description.substring(0, maxLength) + "... "
      : description;

  return (
    <motion.div
      className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background Event Logo */}
      <motion.img
        src={eventLogo}
        alt="Event Logo"
        className="absolute inset-0 m-auto w-3/4 opacity-20 blur-sm" // Adjust size & blur effect
      />

      {/* Image with independent scaling */}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg relative z-10"
        />
      )}

      {/* Text Content with independent scaling */}
      <motion.div className="mt-4 relative z-10">
        <h2 className="text-2xl font-semibold text-white break-words">{title}</h2>
        
        <p className="text-gray-300 mt-2 break-words text-[15px]">
          {truncatedText}
          {description.length > maxLength && (
            <a href={link} className="text-blue-400 hover:underline">Read more</a>
          )}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GlassCardEvent;



