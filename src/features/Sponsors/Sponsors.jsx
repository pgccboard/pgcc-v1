import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";

import BENEFITSPDF from "../../assets/sponsors/sponsor-benefits.pdf";

import {
  CONTACTUS,
  GOLDSPONSORSLIST,
  SILVERSPONSORSLIST,
  SPONSORS,
  SPONSORSCONTENT,
  SPONSORSHEADER,
  SPONSORSSUBHEADER,
} from "../../pgccConstants";

import AGREEMENT from "../../assets/icons/agreement.png";
import { Link } from "react-router-dom";
import ShowSponsors from "./ShowSponsors/SpowSponsors";
import SPONSORFAQ from "./SponsorFAQ/SponsorFAQ";

function Sponsors() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(SPONSORS));
  }, []);

  return (
    <>
      <Banner title={SPONSORSHEADER} subTitle={SPONSORSSUBHEADER} />
      <Overview content={SPONSORSCONTENT}>
        <div className="flex justify-center space-x-4">
          <Link to={`/${CONTACTUS}`}>
            <button className="bg-tamarillo text-white py-2 px-4 rounded-lg shadow hover:bg-burgundy">
              Reach Out
            </button>
          </Link>
          {/* <Link to={`/contact-us`}> */}
          {/* <button className="border border-slate-blue text-block py-2 px-4 rounded-lg shadow hover:bg-cello hover:text-white">
            <a href={BENEFITSPDF} rel="noreferrer" target="_blank">
              View benefits
            </a>
          </button> */}
          {/* </Link> */}
        </div>
        <div className="w-full lg:w-auto">
          <img
            className="w-64 h-auto max-w-4xl mx-auto lg:mx-0 rounded-lg"
            src={AGREEMENT}
            alt="AGREEMENT LOGO"
          ></img>
        </div>
      </Overview>
      <ShowSponsors
        sponsorHeader={"Gold Sponsors"}
        sponsorList={GOLDSPONSORSLIST}
      />
      <ShowSponsors
        sponsorHeader={"Silver Sponsors"}
        sponsorList={SILVERSPONSORSLIST}
      />
      <SPONSORFAQ />
    </>
  );
}

export default Sponsors;
