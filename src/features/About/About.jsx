import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";
import OurFocus from "./OurFocus/OurFocus";
import ExecBoard from "./ExecBoard/ExecBoard";

import {
  ABOUT,
  ABOUTHEADER,
  ABOUTOVERVIEW,
  ABOUTSUBHEADER,
} from "../../pgccConstants";

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(ABOUT));
  }, []);

  return (
    <>
      <Banner title={ABOUTHEADER} subTitle={ABOUTSUBHEADER} />
      <Overview content={ABOUTOVERVIEW} />
      <OurFocus />
      <ExecBoard />
    </>
  );
}

export default About;
