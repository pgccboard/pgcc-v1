import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import {
  SPONSORS,
  SPONSORSHEADER,
  SPONSORSSUBHEADER,
} from "../../pgccConstants";

function Sponsors() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(SPONSORS));
  }, []);

  return (
    <>
      <Banner
        title={SPONSORSHEADER}
        subTitle={SPONSORSSUBHEADER}
        content={""}
      />
    </>
  );
}

export default Sponsors;
