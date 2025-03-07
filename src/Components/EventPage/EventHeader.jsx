import { motion } from "framer-motion";

export default function EventHeader({ selectedImage }) {
  return (
    <motion.div 
      className="w-full max-w-6xl bg-gray-800 p-8 flex flex-col items-center rounded-3xl shadow-2xl hover:shadow-3xl transition duration-500 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}>
      
      <motion.img 
        src={selectedImage} 
        alt="Event"
        className="w-full h-96 object-cover rounded-2xl transition-transform duration-700 hover:scale-110 shadow-xl" 
        whileHover={{ rotate: 2 }}
      />
      
      <motion.p 
        className="text-2xl font-bold mt-5 text-yellow-400 animate-pulse uppercase tracking-wide" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Upcoming Event
      </motion.p>
    </motion.div>
  );
}
