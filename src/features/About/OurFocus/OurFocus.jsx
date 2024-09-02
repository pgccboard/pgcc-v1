import { OurFocusList } from "../../../pgccConstants";

function OurFocus() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center my-4 text-cello">
        Our Focus
      </h2>
      <div className="relative w-full max-w-5xl my-4 mx-auto p-4">
        {OurFocusList.map((ourFocusListItem) => {
          return (
            <div className="flex justify-center" key={ourFocusListItem.id}>
              <div className="mb-4 flex justify-start items-start w-full lg:w-2/3">
                <img
                  className="w-12 h-12 mr-4"
                  src={ourFocusListItem.numImg}
                  alt={ourFocusListItem.numImgAlt}
                />
                <p className="text-md">{ourFocusListItem.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OurFocus;
