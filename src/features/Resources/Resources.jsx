import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import {
  RESOURCES,
  RESOURCESHEADER,
  RESOURCESSUBHEADER,
} from "../../pgccConstants";

function Resources() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(RESOURCES));
  }, []);

  return (
    <>
      <Banner title={RESOURCESHEADER} subTitle={RESOURCESSUBHEADER} />
    </>
  );
}

export default Resources;
