import { Link } from "react-router-dom";
import { EVENTSUPCOMINGLIST } from "../../../pgccConstants";
import { useState } from "react";

function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event.title === selectedEvent?.title ? null : event);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-cello">
        Upcoming Events
      </h2>
      <div className="max-w-screen-2xl items-center mx-auto">
        {EVENTSUPCOMINGLIST.map((event) => (
          <div
            key={event?.title}
            className={`bg-gradient-to-r from-cello/50 to-light-pink/80 border border-gray-300 rounded-md shadow-sm p-4 mb-4${
              event?.title === selectedEvent?.title ? "border-cello" : ""
            }`}
            onClick={() => handleEventClick(event)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <span className="w-16">{event?.date}</span>
              <h3 className="text-lg font-bold">{event?.title}</h3>
              <span className="text-cello font-bold">
                {event?.title == selectedEvent?.title ? "-" : "+"}
              </span>
            </div>
            {event?.title === selectedEvent?.title && (
              <div className="my-4">
                <p>{event.description}</p>
                <p className="mt-2">
                  Date: {event?.date} | Time: {event?.time}
                </p>
                <Link to={event?.link} target="_blank">
                  <button className="mt-4 inline-block bg-cello text-white px-4 py-2 rounded-md hover:bg-cello-dark">
                    Click to Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default UpcomingEvents;
