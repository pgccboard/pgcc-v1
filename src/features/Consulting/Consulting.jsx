import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";

import {
  CONSULTING,
  CONSULTINGHEADER,
  CONSULTINGOVERVIEW,
  CONSULTINGSUBHEADER,
} from "../../pgccConstants";

function Consulting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CONSULTING));
  }, []);

  return (
    <>
      <Banner title={CONSULTINGHEADER} subTitle={CONSULTINGSUBHEADER} />
      <Overview content={CONSULTINGOVERVIEW} />
    </>
  );
}

export default Consulting;
