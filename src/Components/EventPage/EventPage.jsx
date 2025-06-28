import React, { useState, useEffect } from 'react';
import TemplatePage2 from '../TemplatePage/TemplatePage';
import EventSidebar from './EventSidebar';
import EventDetails from './EventDetails';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    import('../../data/events.json').then((mod) => setEvents(mod.default || mod));
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const firstUpcomingEvent = events.find(event => event.tag === 'upcoming');
      setSelectedEventId(firstUpcomingEvent ? firstUpcomingEvent.id : events[0].id);
    }
  }, [events]);

  return (
    <TemplatePage2>
      <div className="flex flex-row gap-4 min-h-screen w-full font-['Violet_Sans'] p-4">
        {/* Event Details */}
        <div className="flex-1">
          {events.length > 0 && (
            <EventDetails event={events.find(event => event.id === selectedEventId)} />
          )}
        </div>

        {/* Sidebar */}
        <div className="w-[240px] h-[calc(100vh-32px)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#5483eb] scrollbar-track-[#0e0e0e]">
          <EventSidebar
            events={events}
            selectedEventId={selectedEventId}
            onSelectEvent={setSelectedEventId}
          />
        </div>
      </div>
    </TemplatePage2>
  );
};

export default EventPage;