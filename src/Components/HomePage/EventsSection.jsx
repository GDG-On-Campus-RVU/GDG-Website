import GlassCardEvent from "./GlassCardEvent";
import React from "react";
import eventImage from "../../images/2025/Krishna.webp";

export default function EventsSection() {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Explore Section 3</h1>
        <p className="text-lg mb-6 max-w-2xl">
          More text or details about this section go here.
        </p>
        
        <GlassCardEvent
          image={eventImage} 
          title="GDG RVU"
          description="Google Developer Group RVU - Join us for tech events, workshops, and innovation!"
        />
      </div>
    );
}
