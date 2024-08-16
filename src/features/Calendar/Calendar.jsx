import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import {
  CALENDAR,
  CALENDARHEADER,
  CALENDARSUBHEADER,
} from "../../pgccConstants";

function Calendar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CALENDAR));
  }, []);

  return (
    <>
      <Banner title={CALENDARHEADER} subTitle={CALENDARSUBHEADER} />
    </>
  );
}

export default Calendar;
