import { Link } from "react-router-dom";
import { JOINTEAMLINK } from "../../../pgccConstants";
import { useEffect } from "react";

function StudentJoin() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-cello">
        Join Our Consulting Team
      </h2>
      {JOINTEAMLINK.length ? (
        <p className="mt-8 text-xl font-light text-left md:text-center">
          If you’re a student,{" "}
          <Link className="text-burgundy" to={JOINTEAMLINK}>
            apply here
          </Link>{" "}
          to be considered for future Pro Bono consulting projects.
        </p>
      ) : (
        <p>
          <p className="mt-8 text-xl font-light text-left md:text-center">
            Please keep an eye out for openings on the events page!
          </p>
        </p>
      )}
    </>
  );
}

export default StudentJoin;
