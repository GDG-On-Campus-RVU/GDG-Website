import GlassCardEvent from "./GlassCardEvent";
import eventLogo from "../../assets/SVG/events_logo.svg";
import { React, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EventSlideshow = ({ isActive }) => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    import("../../data/events.json").then((mod) => {
      const allEvents = mod.default || mod;
      const sorted = [...allEvents].reverse(); // prioritize recent/upcoming
      setEvents(sorted);
    });
  }, []);

  useEffect(() => {
    if (isActive) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [isActive]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handleClick = () => {
    const selectedEvent = events[currentIndex];
    if (selectedEvent?.id) {
      navigate(`/event?eventId=${encodeURIComponent(selectedEvent.id)}`);
    }
  };

  if (isLoading || events.length === 0) {
    return (
      <motion.div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
        <motion.img
          src={eventLogo}
          alt="Event Logo"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-40 absolute"
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white text-6xl font-bold px-16 py-8 bg-green-600 rounded-2xl shadow-lg absolute"
        >
          Exciting Events !!!
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="h-screen w-full flex flex-col justify-center items-center text-center p-6 relative"
    >
      <h1 className="text-5xl font-bold mb-6">Events</h1>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-20 p-4 bg-green-600 text-white rounded-full hover:bg-green-500 z-20 text-3xl"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Glass Card */}
      <div className="relative w-full max-w-xl flex items-center justify-center cursor-pointer" onClick={handleClick}>
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
              image={events[currentIndex]?.eventPic}
              title={events[currentIndex]?.eventName}
              description={events[currentIndex]?.about}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-20 p-4 bg-green-600 text-white rounded-full hover:bg-green-500 z-20 text-3xl"
      >
        <FaChevronRight size={30} />
      </button>

      {/* Slide Indicator */}
      <div className="flex mt-6 space-x-3">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full duration-300 ${
              currentIndex === index ? "bg-blue-500 w-5" : "bg-gray-500 w-3"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EventSlideshow;
