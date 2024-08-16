import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import { EVENTS, EVENTSHEADER, EVENTSSUBHEADER } from "../../pgccConstants";

function Events() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(EVENTS));
  }, []);

  return (
    <>
      <Banner title={EVENTSHEADER} subTitle={EVENTSSUBHEADER} />
    </>
  );
}

export default Events;
