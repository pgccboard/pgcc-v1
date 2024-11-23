import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import { HOME, missionContentParaList } from "../../pgccConstants";
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
      {/* <h2 className="text-4xl font-bold text-center">Our Mission</h2> */}
      <div className="mx-auto items-center flex flex-col lg:flex-row px-5">
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
          <div className="xl:mx-16 lg:ml-20 mx-10">
            <h5 className="text-3xl font-bold leading-tight text-center">
              Our Mission
            </h5>
            {/* <p className="mt-8 text-xl font-light">
              Penn Graduate Consulting Club (PGCC) is one of the largest
              student–run consulting clubs for non-MBA graduate students (PhDs,
              MDs, JDs, master's, etc.) and post-docs at the University of
              Pennsylvania. The mission of PGCC is to educate the community
              about the consulting industry and to help advanced degree
              candidates prepare for a career in consulting. ​{" "}
            </p>
            <p className="mt-8 text-xl font-light">
              PGCC currently has 500+ members and a strong impact on the broader
              Penn Community. More than 80% of our members show great passion
              for a consulting career, and more than 200 members will be
              applying for full-time jobs or internships in the next recruiting
              cycle.
            </p> */}

            <div className="p-4">
              {missionContentParaList.map(
                (missionContentPara, missionContentIndex) => {
                  return (
                    <div key={`missionContentIndex${missionContentIndex}`}>
                      <p className="md:text-lg xxs:text-xs">
                        {missionContentPara}
                      </p>
                      <br />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="w-11/12 lg:w-1/2">
          <MissionCarousel />
        </div>
      </div>
      <GetInvolved />
      <ClubStats />
    </>
  );
}

export default Home;
