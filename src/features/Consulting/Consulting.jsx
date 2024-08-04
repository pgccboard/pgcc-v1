import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { CONSULTING } from "../../pgccConstants";

function Consulting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CONSULTING));
  }, []);

  return (
    <>
      <h1>Consulting Page</h1>
    </>
  );
}

export default Consulting;
