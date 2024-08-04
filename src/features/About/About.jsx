import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { ABOUT } from "../../pgccConstants";

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(ABOUT));
  }, []);

  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

export default About;
