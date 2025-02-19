import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import FirstSection from "./FirstSection";
import WhyJoinGDGSection from "./WhyJoinGDGSection";
import EventsSection from "./EventsSection";
import BlogsSection from "./BlogsSection";
import TeamSection from "./TeamSection";

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Scroll lock

  // Define sections as an array of objects with properties
  const sections = [
    { component: <FirstSection /> },
    { component: <WhyJoinGDGSection />, color: "bg-blue-500", text: "Why Join GDG" },
    { component: <EventsSection />, color: "bg-green-500", text: "Events" },
    { component: <BlogsSection />, color: "bg-yellow-500", text: "Blogs" },
    { component: <TeamSection />, color: "bg-purple-500", text: "Team" }
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return; // Prevent multiple scrolls

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000); // Lock for 800ms

      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    const handleRightClick = (event) => {
      event.preventDefault(); // Prevent the default right-click menu
      if (isScrolling) return;

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);

      setCurrentSection((prev) =>
        prev < sections.length - 1 ? prev + 1 : prev
      );
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("contextmenu", handleRightClick);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <motion.div
        className="h-full w-full"
        animate={{ translateY: `-${currentSection * 100}vh` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Render each section dynamically */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`h-screen flex items-center justify-center text-white text-4xl font-bold`}
          >
            {section.component}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
