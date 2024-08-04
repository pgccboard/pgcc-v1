import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { CONTACTUS } from "../../pgccConstants";

function ContactUs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CONTACTUS));
  }, []);

  return (
    <>
      <h1>ContactUs Page</h1>
    </>
  );
}

export default ContactUs;
