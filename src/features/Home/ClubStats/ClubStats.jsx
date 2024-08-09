import { PGCCNumStatsList } from "../../../pgccConstants";

const ClubStats = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-center">Our Club in Numbers</h3>
      <div className="mx-auto text-center flex flex-col sm:flex-row mt-8 lg:px-24">
        {PGCCNumStatsList.map((PGCCNumStats) => {
          return (
            <div className="my-3 sm:w-1/3">
              <p className="text-4xl lg:text-6xl font-semibold text-cadillac">
                {PGCCNumStats.title}
              </p>
              <p className="font-semibold mb-6 text-slate-blue">
                {PGCCNumStats.subTitle}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ClubStats;
