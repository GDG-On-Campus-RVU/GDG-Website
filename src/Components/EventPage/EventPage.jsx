import { useState } from "react";
import EventHeader from "../EventPage/EventHeader.jsx";
import CountdownTimer from "../EventPage/CountdownTimer.jsx";
import EventDetails from "../EventPage/EventDetails.jsx";
import SpeakersSection from "../EventPage/SpeakersSection.jsx";
import TemplatePage from "../TemplatePage/TemplatePage.jsx";

export default function EventPage() {
  const [selectedImage, setSelectedImage] = useState("/assets/default-event.jpg");
  const eventDate = new Date("2025-03-01T18:00:00").getTime();

  return (
    <TemplatePage>
      <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen p-10 flex flex-col items-center space-y-10">
        <EventHeader selectedImage={selectedImage} />
        <CountdownTimer eventDate={eventDate} />
        <EventDetails />
        <SpeakersSection />
      </div>
    </TemplatePage>
  );
}
