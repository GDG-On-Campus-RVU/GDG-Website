import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: 1, color: "bg-red-500", text: "Welcome to Section 1" },
  { id: 2, color: "bg-blue-500", text: "This is Section 2" },
  { id: 3, color: "bg-green-500", text: "Explore Section 3" },
  { id: 4, color: "bg-yellow-500", text: "Final Section 4" },
];

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Scroll lock

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return; // Prevent multiple scrolls

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 800); // Lock for 800ms

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
      setTimeout(() => setIsScrolling(false), 800);

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
        {sections.map((section) => (
          <div
            key={section.id}
            className={`h-screen flex items-center justify-center ${section.color} text-white text-4xl font-bold`}
          >
            {section.text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
