import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhyJoinGDGSection() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center">
      <div className="max-w-[1920px] mx-auto py-32 px-4 md:px-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">
          {/* Left Section */}
          <motion.div 
          className="w-full md:w-2/5 space-y-12"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false }}
           transition={{ duration: 0.8 }}
>
            <h2 className="text-red-500 text-4xl md:text-5xl font-bold">
              WHY JOIN GDG
            </h2>
            <div className="space-y-8">
              <p className="text-gray-200 text-2xl md:text-2xl leading-[2.2] tracking-wider [word-spacing:2px]">
                GDG is a community of developers who are specifically interested in Google products and APIs. 
                <br /><br />
                It is a community where developers can learn, share, and connect with each other. 
                <br /><br />
                GDG provides opportunities to engage in technical discussions, attend events, and enhance development skills.
              </p>
            </div>
          </motion.div>

          {/* Logo in the middle */}
          <div className="w-48 h-48 md:w-[400px] md:h-[400px] flex-shrink-0 flex items-center justify-center">
            <img 
              src="/src/Images/Common/redsymbol.png" 
              alt="GDG Logo" 
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section */}
          <motion.div 
            className="w-full md:w-2/5 space-y-12"
            initial={{ opacity: 0, x: 50 }} // Start from the right
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-red-500 text-4xl md:text-5xl font-bold">
              HOW TO JOIN GDG
            </h2>
            <div className="space-y-12">
              <p className="text-gray-200 text-2xl md:text-2xl leading-[1.8] tracking-wide">
                Click on this WhatsApp link to join GDG as a member and start learning and sharing.
              </p>
              <div className="relative w-full md:w-[90%] group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                <a 
                  href="https://chat.whatsapp.com/GJmw6A7zSUN4AmnBxYGmak" 
                  target="_blank" S
                  rel="noopener noreferrer" 
                  className="relative bg-red-600 text-white w-full py-4 rounded-full transition-all duration-300 text-2xl hover:bg-red-500 shadow-lg font-bold flex items-center justify-center gap-4 cursor-pointer group-hover:scale-[1.02] group-hover:shadow-red-500/30"
                >
                  <FaWhatsapp className="text-4xl text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                  JOIN US NOW 
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
  