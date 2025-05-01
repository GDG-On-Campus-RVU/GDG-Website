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

  // Set the first upcoming event as the default selected event
  useEffect(() => {
    if (events.length > 0) {
      const firstUpcomingEvent = events.find(event => event.tag === 'upcoming');
      setSelectedEventId(firstUpcomingEvent ? firstUpcomingEvent.id : events[0].id);
    }
  }, [events]);

  return (
    <TemplatePage2>
      <div className="flex bg-[#040404] min-h-screen w-full font-['Violet Sans']">
        {/* Main Content */}
        <div className="flex-1 flex items-start py-6 px-6">
          {events.length > 0 && <EventDetails event={events.find(event => event.id === selectedEventId)} />}
        </div>
        {/* Sidebar */}
        <EventSidebar
          events={events}
          selectedEventId={selectedEventId}
          onSelectEvent={setSelectedEventId}
        />
      </div>
    </TemplatePage2>
  );
};

export default EventPage;
