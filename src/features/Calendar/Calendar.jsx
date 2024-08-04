import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { CALENDAR } from "../../pgccConstants";

function Calendar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CALENDAR));
  }, []);

  return (
    <>
      <h1>Calendar Page</h1>
    </>
  );
}

export default Calendar;
