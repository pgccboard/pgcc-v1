import { Link } from "react-router-dom";

import { PGCCGetInvolvedList } from "../../../pgccConstants";

function GetInvolved() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Get Involved</h2>
      <div className="mx-auto my-4 text-center flex flex-col xl:flex-row mt-8 xl:px-24 bg-gray-100">
        {PGCCGetInvolvedList.map((PGCCGetInvolvedItem) => {
          return (
            <div
              key={PGCCGetInvolvedItem.id}
              className="m-3 xl:w-1/3 px-8 py-12 rounded-lg border border-solid border-cello bg-gradient-to-br from-cello/50 to-tamarillo/50"
            >
              <div className="h-32 xl:h-64">
                <div className="flex justify-center">
                  <img
                    src={PGCCGetInvolvedItem.titleIcon}
                    alt=""
                    className="w-8 h-8 mr-4"
                  />
                  <p className="text-lg xl:text-xl font-bold">
                    {PGCCGetInvolvedItem.title}
                  </p>
                </div>
                <p className="mt-4 text-md xl:text-lg">
                  {PGCCGetInvolvedItem.para}
                  &nbsp;
                </p>
              </div>
              <div className="h-8">
                <Link to={PGCCGetInvolvedItem.buttonRoute}>
                  <button className="bg-cello text-white py-2 px-4 rounded-lg shadow hover:bg-burgundy">
                    {PGCCGetInvolvedItem.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetInvolved;
