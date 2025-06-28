import React from 'react';

const EventSidebar = ({ events, selectedEventId, onSelectEvent }) => {
  const upcomingEvents = events.filter(event => event.tag === 'upcoming').reverse();
  const doneEvents = events.filter(event => event.tag === 'done').reverse();

  return (
    <div className="rounded-xl p-3 flex flex-col gap-4 h-full">
      {[...upcomingEvents, ...doneEvents].map((event) => (
        <div
          key={event.id}
          onClick={() => onSelectEvent(event.id)}
          className={`cursor-pointer rounded-lg border transition-all flex flex-col items-center p-2 shadow-md relative ${
            selectedEventId === event.id
              ? 'border-[#5483eb] bg-gray-900'
              : 'border-gray-700 bg-gray-800 hover:border-[#5483eb]'
          }`}
        >
          <div className={`absolute top-2 left-2 w-4 h-4 rounded-full ${
            event.tag === 'upcoming' ? 'bg-[#f1bf42]' : 'bg-[#489b5f]'
          }`} />
          <img
            src={event.eventPic}
            alt={event.eventName}
            className="w-20 h-20 object-cover rounded mb-2"
          />
          <span className="text-white text-center text-sm font-semibold">{event.eventName}</span>
        </div>
      ))}
    </div>
  );
};

export default EventSidebar;
