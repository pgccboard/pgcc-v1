import { Link } from "react-router-dom";

function ShowSponsors({ sponsorHeader, sponsorList }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-cello">
        {sponsorHeader}
      </h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          {sponsorList.map((sponsor) => (
            <div
              key={sponsor.link}
              className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
            >
              <Link to={sponsor.link} target="_blank">
                <img src={sponsor.logo} alt="logo" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowSponsors;
