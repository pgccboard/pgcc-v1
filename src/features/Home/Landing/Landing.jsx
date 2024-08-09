import { Link } from "react-router-dom";

import BENFRANK from "../../../assets/benfrank.png";
import { ABOUT, CONTACTUS } from "../../../pgccConstants";

function Landing() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center p-8 md:p-12">
        <div className="text-center lg:text-left lg:mr-8 mb-8 lg:mb-0">
          <h1 className="text-5xl lg:text-4xl text-gray-800 font-bold mb-4">
            Penn Graduate
          </h1>
          <h1 className="text-5xl lg:text-4xl text-gray-800 font-bold mb-4">
            Consulting Club
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Premiere student-run consulting club at the
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            University of Pennsylvania, 500+ members strong.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
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

        <div className="w-full lg:w-auto">
          <img
            className="w-full h-auto max-w-md mx-auto lg:mx-0 rounded-lg shadow"
            src={BENFRANK}
            alt="PGCC LOGO"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Landing;
