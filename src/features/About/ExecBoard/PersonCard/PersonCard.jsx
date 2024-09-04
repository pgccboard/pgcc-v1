import LINKEDIN from "../../../../assets/icons/linkedin.png";
import MAIL from "../../../../assets/icons/email.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../../Modal/ModalSlice";

const PersonCard = ({ person }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border rounded-lg overflow-hidden my-2">
      <img
        className="w-full h-64 object-cover"
        src={person.image}
        alt={person.name}
      />
      <div className="p-5">
        <div>
          <p className="font-bold text-xl">{person.name}</p>
          <p className="text-sm italic text-gray-600">{person.title}</p>
        </div>
        <div className="flex flex-wrap justify-between mt-5">
          <div className="flex">
            <Link to={person.linkedin} target="_blank">
              <img src={LINKEDIN} className="w-8 h-8 mr-2" alt="linkedin" />
            </Link>
            {person.email && (
              <Link to={`mailto:${person.email}`}>
                <img src={MAIL} className="w-8 h-8" alt="mail" />
              </Link>
            )}
          </div>
          <button
            type="button"
            className="self-end"
            onClick={() =>
              dispatch(
                showModal({
                  modalTitle: person.name,
                  modalSubtitle: person.title,
                  modalContent: person.content,
                  modalButtons: [
                    {
                      buttonName: "linkedIn",
                      buttonRoute: person.linkedin,
                      buttonType: "image",
                      buttonImageSrc: LINKEDIN,
                      buttonText: "",
                    },
                    {
                      buttonName: "email",
                      buttonRoute: person.email,
                      buttonType: "image",
                      buttonImageSrc: MAIL,
                      buttonText: "",
                    },
                  ],
                })
              )
            }
          >
            Read bio →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
