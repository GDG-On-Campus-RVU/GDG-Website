import React from 'react';

const EventSidebar = ({ events, selectedEventId, onSelectEvent }) => {
  // Separate and reverse upcoming and done events
  const upcomingEvents = events.filter(event => event.tag === 'upcoming').reverse();
  const doneEvents = events.filter(event => event.tag === 'done').reverse();

  return (
    <div className="bg-[#040404] h-screen p-2 flex flex-col min-w-[180px] max-w-[220px] mr-4 font-['Violet Sans']">
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-700 custom-scrollbar">
        {/* Render upcoming events first */}
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className={`cursor-pointer rounded-lg border transition-all flex flex-col items-center p-2 shadow-md relative ${selectedEventId === event.id ? 'border-[#5483eb] bg-gray-900' : 'border-gray-700 bg-gray-800 hover:border-[#5483eb]'}`}
            onClick={() => onSelectEvent(event.id)}
          >
            <div className="absolute top-2 left-2 bg-[#f1bf42] w-4 h-4 rounded-full"></div>
            <img src={event.eventPic} alt={event.eventName} className="w-20 h-20 object-cover rounded mb-2" />
            <span className="text-white text-center text-sm font-semibold">{event.eventName}</span>
          </div>
        ))}
        {/* Render done events */}
        {doneEvents.map((event) => (
          <div
            key={event.id}
            className={`cursor-pointer rounded-lg border transition-all flex flex-col items-center p-2 shadow-md relative ${selectedEventId === event.id ? 'border-[#5483eb] bg-gray-900' : 'border-gray-700 bg-gray-800 hover:border-[#5483eb]'}`}
            onClick={() => onSelectEvent(event.id)}
          >
            <div className="absolute top-2 left-2 bg-[#489b5f] w-4 h-4 rounded-full"></div>
            <img src={event.eventPic} alt={event.eventName} className="w-20 h-20 object-cover rounded mb-2" />
            <span className="text-white text-center text-sm font-semibold">{event.eventName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSidebar;
