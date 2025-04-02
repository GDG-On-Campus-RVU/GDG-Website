import GlassCardEvent from "./GlassCardEvent";
import eventLogo from "../../assets/SVG/events_logo.svg";
import { React, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
  {
    image: "https://via.placeholder.com/400",
    title: "GDG RVU",
    description: "Google Developer Group RVU - Join us for tech events, workshops, and innovation!"
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Hackathon 2025",
    description: "Participate in our annual hackathon and showcase your skills!"
  },
  {
    image: "https://via.placeholder.com/400",
    title: "AI Conference",
    description: "Join top AI researchers and developers in this exclusive event."
  }
];

const EventSlideshow = ({ isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isActive) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, [isActive]);

  // Move to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  // Move to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
        {/* Logo Animation */}
        <motion.img
          src={eventLogo}
          alt="Event Logo"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-40 absolute"
        />
  
        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
          className="text-white text-6xl font-bold px-16 py-8 bg-green-600 rounded-2xl shadow-lg absolute flex items-center justify-center whitespace-nowrap"
        >
          Exciting Events !!!
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-screen w-full flex flex-col justify-center items-center text-center p-6 relative"
    >
      <h1 className="text-5xl font-bold mb-6">Events</h1>

      {/* Left Arrow */}
      <button 
        onClick={goToPrevious} 
        className="absolute left-20 p-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all z-20 text-3xl"
      >
        <FaChevronLeft size={24} />
      </button>

      <div className="relative w-full max-w-xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <GlassCardEvent
              image={events[currentIndex].image}
              title={events[currentIndex].title}
              description={events[currentIndex].description}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button 
        onClick={goToNext} 
        className="absolute right-20 p-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all z-20 text-3xl"
      >
        <FaChevronRight size={30} />
      </button>

      {/* Slide Indicator Dots */}
      <div className="flex mt-6 space-x-3">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500 w-5" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EventSlideshow;
