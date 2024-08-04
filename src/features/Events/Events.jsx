import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { EVENTS } from "../../pgccConstants";

function Events() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(EVENTS));
  }, []);

  return (
    <>
      <h1>Events Page</h1>
    </>
  );
}

export default Events;
