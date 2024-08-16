import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";

import {
  EVENTS,
  EVENTSHEADER,
  EVENTSOVERVIEW,
  EVENTSSUBHEADER,
} from "../../pgccConstants";

function Events() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(EVENTS));
  }, []);

  return (
    <>
      <Banner title={EVENTSHEADER} subTitle={EVENTSSUBHEADER} />
      <Overview content={EVENTSOVERVIEW} />
    </>
  );
}

export default Events;
