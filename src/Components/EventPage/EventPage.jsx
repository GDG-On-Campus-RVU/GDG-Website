import React, { useState, useEffect } from 'react';
import TemplatePage2 from '../TemplatePage/TemplatePage';
import EventSidebar from './EventSidebar';
import EventDetails from './EventDetails';
import { useSearchParams } from 'react-router-dom';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    import('../../data/events.json').then((mod) => setEvents(mod.default || mod));
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const queryId = searchParams.get("eventId");
      const fallback = events.find((e) => e.tag === 'upcoming') || events[0];
      const validId = events.find((e) => e.id === queryId)?.id;
      setSelectedEventId(validId || fallback.id);
    }
  }, [events, searchParams]);

  return (
    <TemplatePage2>
      <div className="flex flex-row gap-4 min-h-screen w-full font-['Violet_Sans'] p-4">
        <div className="flex-1">
          {events.length > 0 && (
            <EventDetails event={events.find(e => e.id === selectedEventId)} />
          )}
        </div>
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
