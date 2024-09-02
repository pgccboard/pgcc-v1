import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { HOME } from "../../pgccConstants";
import Landing from "./Landing/Landing";
import MissionCarousel from "./MissionCarousel/MissionCarousel";
import GetInvolved from "./GetInvolved/GetInvolved";
import ClubStats from "./ClubStats/ClubStats";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(HOME));
  }, []);

  return (
    <>
      <Landing />
      <MissionCarousel />
      <GetInvolved />
      <ClubStats />
    </>
  );
}

export default Home;
