import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import {
  CONTACTUS,
  CONTACTUSHEADER,
  CONTACTUSSUBHEADER,
} from "../../pgccConstants";

function ContactUs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CONTACTUS));
  }, []);

  return (
    <>
      <Banner title={CONTACTUSHEADER} subTitle={CONTACTUSSUBHEADER} />
    </>
  );
}

export default ContactUs;
