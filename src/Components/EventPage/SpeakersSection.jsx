import { motion } from "framer-motion";

const speakers = ["/assets/speaker1.jpg", "/assets/speaker2.jpg", "/assets/speaker3.jpg"];

export default function SpeakersSection() {
  return (
    <div className="w-full max-w-6xl text-center">
      <p className="text-3xl font-bold mb-6">🎤 Key Speakers</p>
      <div className="flex justify-center gap-10">
        {speakers.map((src, index) => (
          <motion.img 
            key={index} 
            src={src} 
            alt={`Speaker ${index + 1}`} 
            className="w-32 h-32 rounded-full border-4 hover:scale-125 transition-all duration-500 shadow-lg" 
            whileHover={{ rotate: 5 }}
          />
        ))}
      </div>
    </div>
  );
}
