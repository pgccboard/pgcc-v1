import MEETING from "../../../assets/icons/meeting.png";

function BecomeClient() {
  return (
    <>
      <div className="mx-auto px-8 flex flex-col lg:flex-row justify-center items-center max-w-screen-2xl my-4">
        <img src={MEETING} alt="MEETING" />
        <div>
          <h2 className="text-2xl font-bold text-center my-4 text-cello">
            Become a Client
          </h2>
          <div className="text-left lg:pl-16">
            <p className="text-xl font-light">
              At PGCC, we offer Pro Bono consulting services for clients ranging
              from local small businesses, to growing start-ups and
              international firms. We bring together top Penn graduate students
              of diverse backgrounds and expertise to solve business problems
              spanning marketing, strategy, and implementation for firms in
              education, biotech, and beyond.
            </p>
            <p className="mt-8 text-lg md:text-xl text-burgundy">
              If you’re a potential client, reach out to us at{" "}
              <a href="mailto:pgcc.comm@gmail.com">pgcc.comm@gmail.com.</a> to
              learn more about working with us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeClient;
