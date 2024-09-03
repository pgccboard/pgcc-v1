import { execBoardList } from "../../../pgccConstants";
import PersonCard from "./PersonCard/PersonCard";

function ExecBoard() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-cello">
        Meet The Executive Board
      </h2>
      <div className="flex flex-wrap max-w-screen-2xl items-center mx-auto">
        {execBoardList.map((execBoardPersonDetails) => {
          return (
            <div
              key={execBoardPersonDetails.id}
              className="px-3 w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
            >
              <PersonCard person={execBoardPersonDetails} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExecBoard;
