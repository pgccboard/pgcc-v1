import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { SPONSORS } from "../../pgccConstants";

function Sponsors() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(SPONSORS));
  }, []);

  return (
    <>
      <h1>Sponsors Page</h1>
    </>
  );
}

export default Sponsors;
