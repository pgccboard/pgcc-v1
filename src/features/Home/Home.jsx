import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setActiveTab } from "../Navbar/NavbarSlice";

import BENFRANK from "../../assets/benfrank.png";
import { HOME, ABOUT, CONTACTUS } from "../../pgccConstants";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(HOME));
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:justify-center p-8 md:p-16">
        <div className="text-center md:text-left md:mr-8 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold mb-4">
            Penn Graduate
          </h1>
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold mb-4">
            Consulting Club
          </h1>
          <p className="text-lg md:text-2xl text-gray-600">
            Premiere student-run consulting club at the
          </p>
          <p className="text-lg md:text-2xl text-gray-600 mb-6">
            University of Pennsylvania, 500+ members strong.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to={`/${ABOUT}`}>
              <button className="bg-tamarillo text-white py-2 px-4 rounded-lg shadow hover:bg-burgundy">
                Learn More
              </button>
            </Link>
            <Link to={`/${CONTACTUS}`}>
              <button className="border border-slate-blue text-block py-2 px-4 rounded-lg shadow hover:bg-cello hover:text-white">
                Get Involved
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <img
            className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-lg shadow"
            src={BENFRANK}
            alt="PGCC LOGO"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
