import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { RESOURCES } from "../../pgccConstants";

function Resources() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(RESOURCES));
  }, []);

  return (
    <>
      <h1>Resources Page</h1>
    </>
  );
}

export default Resources;
