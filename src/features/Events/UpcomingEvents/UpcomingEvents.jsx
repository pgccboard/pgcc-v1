import { EVENTSUPCOMINGLIST } from "../../../pgccConstants";

function UpcomingEvents() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-cello">
        Upcoming Events
      </h2>
      <div className="flex flex-wrap max-w-screen-2xl items-center mx-auto">
        {EVENTSUPCOMINGLIST.map((EventsUpcomingItem) => {
          return (
            <div className="px-3 w-1/2 xl:w-1/3 items-center">
              <img
                src={EventsUpcomingItem.imgSrc}
                alt={EventsUpcomingItem.imgAlt}
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UpcomingEvents;
