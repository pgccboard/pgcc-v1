import { useDispatch, useSelector } from "react-redux";
import { hideModal, selectModalDetails } from "./ModalSlice";
import { Link } from "react-router-dom";

const Modal = () => {
  const dispatch = useDispatch();
  const modalDetails = useSelector(selectModalDetails);

  return (
    <>
      <div className="z-50 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <div
          className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 text-left sm:mt-0 sm:ml-4">
              <div>
                <p className="font-bold text-xl">{modalDetails.modalTitle}</p>
                <p className="text-sm italic text-gray-600">
                  {modalDetails.modalSubtitle}
                </p>
              </div>
              <div className="my-6">
                <p className="text-xs sm:text-base text-gray-800">
                  {modalDetails.modalContent}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 flex items-center justify-between">
            <div className="flex">
              {modalDetails.modalButtons.map((modalButtonDetails) => {
                if (modalButtonDetails.buttonType == "image") {
                  return (
                    <Link
                      key={modalButtonDetails.buttonName}
                      to={modalButtonDetails.buttonRoute}
                      target="_blank"
                    >
                      <img
                        src={modalButtonDetails.buttonImageSrc}
                        className="w-8 h-8 mr-2"
                        alt={modalButtonDetails.buttonName}
                      />
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={modalButtonDetails.buttonName}
                      to={modalButtonDetails.buttonRoute}
                      target="_blank"
                    >
                      <button className="border border-slate-blue text-block py-2 px-4 rounded-lg shadow hover:bg-cello hover:text-white">
                        {modalButtonDetails.buttonText}
                      </button>
                    </Link>
                  );
                }
              })}

              {/* <a href={person.linkedin}>
                <img
                  src={LINKEDIN}
                  className="w-8 h-8 mr-2 social-icon"
                  alt="linkedin"
                />
              </a>
              {person.email ? (
                <a href={`mailto:${person.email}`}>
                  <img src={MAIL} className="w-8 social-icon" alt="mail" />
                </a>
              ) : null} */}
            </div>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={() => dispatch(hideModal())}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
