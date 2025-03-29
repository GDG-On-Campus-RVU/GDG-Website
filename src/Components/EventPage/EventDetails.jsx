import { motion } from "framer-motion";

const eventDetails = [
  { title: "📅 Date & Time", text: "March 1, 2025 | 6:00 PM", bg: "bg-red-600" },
  { title: "📍 Location", text: "Click to View", bg: "bg-green-600", link: "https://maps.google.com" },
  { title: "🎟 Register Now", text: "Sign Up", bg: "bg-yellow-500", button: true },
  { title: "📜 Event Agenda", text: "Keynotes, Panels, Networking", bg: "bg-blue-600" },
  { title: "🎁 Exclusive Perks", text: "Networking, Workshops & More!", bg: "bg-purple-700" },
  { title: "❓ FAQs", text: "Answers to your questions", bg: "bg-yellow-600" }
];

export default function EventDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {eventDetails.map((item, index) => (
        <motion.div 
          key={index} 
          className={`p-6 text-white font-bold rounded-xl ${item.bg} shadow-lg`}
          whileHover={{ scale: 1.1 }}>
          
          <p className="text-xl">{item.title}</p>
          {item.link ? (
            <a href={item.link} className="underline">{item.text}</a>
          ) : item.button ? (
            <button className="mt-2 bg-black px-4 py-2 rounded-md">{item.text}</button>
          ) : (
            <p>{item.text}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
