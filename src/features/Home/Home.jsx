import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { HOME } from "../../pgccConstants";
import Landing from "./Landing/Landing";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(HOME));
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}

export default Home;
