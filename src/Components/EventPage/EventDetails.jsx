import React from 'react';
import Dropdown from './Dropdown';
import calendarIcon from '../../Images/Common/calendar.png';
import locationIcon from '../../Images/Common/location.png';

const EventDetails = ({ event }) => {
  if (!event) return null;

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full font-['Violet Sans']">
      {/* Main Event Card */}
      <div className="flex-1 bg-gray-900 rounded-xl p-6 shadow-lg font-['Violet Sans'] ml-0">
        <div className="w-full bg-gray-800 rounded mb-4 overflow-hidden">
          <img src={event.eventPic} alt={event.eventName} className="w-full h-auto rounded" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{event.eventName}</h2>
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <span className="flex items-center text-gray-300 text-sm">
            <img src={calendarIcon} alt="calendar" className="w-5 h-5 mr-1 inline-block align-middle" />
            {event.eventTime} {event.eventDate}
          </span>
          <span className="flex items-center text-gray-300 text-sm">
            <img src={locationIcon} alt="location" className="w-5 h-5 mr-1 inline-block align-middle" />
            {event.eventVenue}
          </span>
          <span className={`ml-2 font-semibold ${event.tag === 'upcoming' ? 'text-[#f1bf42]' : 'text-[#489b5f]'}`}>
            {event.tag.toUpperCase()}
          </span>
          <a
            href={event.rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-[#5483eb] hover:bg-[#426bb1] text-white px-4 py-1 rounded shadow font-semibold transition"
          >
            RSVP
          </a>
        </div>
        <div className="bg-gray-800 rounded p-4 mb-3 text-gray-200">
          <span className="font-semibold text-white">About Event: </span>
          {event.about}
        </div>
        <div className="text-gray-300 mb-2">
          <span className="font-semibold text-white">Speaker (or) Host:</span> {event.speaker}<br />
          <span className="font-semibold text-white">Contact:</span> {event.contact}<br />
          <span className="font-semibold text-white">Mail ID:</span> {event.mailId}
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-1">
            <Dropdown title="FAQ">
              <ul className="list-disc pl-4">
                {event.faqs.map((faq, i) => (
                  <li key={i} className="mb-2">
                    <span className="font-semibold text-[#5483eb]">Q: {faq.question}</span>
                    <br />
                    <span className="text-gray-200">A: {faq.answer}</span>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </div>
          <div className="flex-1">
            <Dropdown title="Perks">
              <ul className="list-disc pl-4">
                {event.perks.map((perk, i) => (
                  <li key={i} className="mb-1 text-gray-200">{perk}</li>
                ))}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* Spacer for sidebar on large screens */}
      {/* <div className="hidden lg:block w-16" /> */}
    </div>
  );
};

export default EventDetails;
