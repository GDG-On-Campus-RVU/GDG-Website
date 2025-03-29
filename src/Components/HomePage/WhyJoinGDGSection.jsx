export default function WhyJoinGDGSection() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center">
      <div className="max-w-[1920px] mx-auto py-32 px-4 md:px-16 w-full">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-20">
          {/* Left Section */}
          <div className="w-full md:w-2/5 space-y-12">
            <h2 className="text-red-500 text-4xl md:text-5xl font-bold">
              WHY JOIN GDG
            </h2>
            <div className="space-y-8">
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed">
                GDG is a community of developers who are specifically interested in Google products and APIs. It is a community where developers can learn, share, and connect with each other. GDG provides opportunities to engage in technical discussions, attend events, and enhance development skills.
              </p>
            </div>
          </div>

          {/* Logo in the middle */}
          <div className="w-48 h-48 md:w-[400px] md:h-[400px] flex-shrink-0 self-center">
            <img 
              src="/src/Images/Common/redsymbol.png" 
              alt="GDG Logo" 
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 space-y-12">
            <h2 className="text-red-500 text-4xl md:text-5xl font-bold">
              HOW TO JOIN GDG
            </h2>
            <div className="space-y-12">
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed">
                Click on this WhatsApp link to join GDG as a member and start learning and sharing.
              </p>
              <button className="bg-red-500 text-white w-full md:w-4/5 py-5 rounded-full transition-all duration-300 text-2xl hover:bg-red-600 shadow-lg">
                JOIN US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  