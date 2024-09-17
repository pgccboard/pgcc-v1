import { Link } from "react-router-dom";

function StudentJoin() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-cello">
        Join Our Consulting Team
      </h2>
      <p className="mt-8 text-xl font-light text-left md:text-center">
        If you’re a student,{" "}
        <Link
          className="text-burgundy"
          to="https://docs.google.com/forms/d/e/1FAIpQLSdEVcxjuCNkpYfOdaoHDqetwp_LyO3eKPc5_x246zYnwZIQtw/viewform?pli=1"
        >
          apply here
        </Link>{" "}
        to be considered for future Pro Bono consulting projects.
      </p>
    </>
  );
}

export default StudentJoin;
