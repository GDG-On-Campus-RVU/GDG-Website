import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import FirstSection from "./FirstSection";
import WhyJoinGDGSection from "./WhyJoinGDGSection";
import EventsSection from "./EventsSection";
import BlogsSection from "./BlogsSection";
import TeamSection from "./TeamSection";

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false); // Scroll lock

  // Define sections as an array of objects with properties
  const sections = [
    { component: <FirstSection /> },
    { component: <WhyJoinGDGSection /> },
    { component: <EventsSection isActive={currentSection === 2} />, color: "bg-green-500", text: "Events" },
    { component: <BlogsSection />, color: "bg-yellow-500", text: "Blogs" },
    { component: <TeamSection isActive={currentSection === 4} />, color: "bg-purple-500", text: "Team" }
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      if (isAnimating) return; 

      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        setIsAnimating(true);
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        setIsAnimating(true);
        setCurrentSection((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isAnimating]);

    

  return (
    <div className="h-screen w-full overflow-hidden">
      <motion.div
        className="h-full w-full"
        animate={{ translateY: `-${currentSection * 100}vh` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onAnimationComplete={() => setIsAnimating(false)} // Unlock scrolling after animation
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`h-screen flex items-center justify-center text-white text-4xl font-bold bg-black ${section.color}`}
          >
            {section.component}
          </div>
        ))}
      </motion.div>
    </div>
  );
}