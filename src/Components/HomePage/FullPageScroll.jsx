import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import FirstSection from "./FirstSection";
import WhyJoinGDGSection from "./WhyJoinGDGSection";
import EventsSection from "./EventsSection";
import BlogsSection from "./BlogsSection";
import TeamSection from "./TeamSection";

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);

  // Define sections as an array of objects with properties
  const sections = [
    { component: <FirstSection /> },
    { component: <WhyJoinGDGSection /> },
    { component: <EventsSection isActive={currentSection === 2} />, color: "bg-green-500", text: "Events" },
    { component: <BlogsSection />, color: "bg-yellow-500", text: "Blogs" },
    { component: <TeamSection isActive={currentSection === 4} />, color: "bg-purple-500", text: "Team" }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px", // Triggers when 50% of the section is visible
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          setCurrentSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-full overflow-y-scroll h-screen snap-y snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`h-screen flex items-center justify-center text-white text-4xl font-bold bg-black ${section.color} snap-start`}
          style={{ overflow: 'hidden' }}
        >
          {section.component}
        </div>
      ))}
    </div>
  );
}
