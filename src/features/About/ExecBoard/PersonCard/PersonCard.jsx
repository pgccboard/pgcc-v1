import React from "react";
import LinkedIn from "../../../../assets/icons/linkedin.png";
import Mail from "../../../../assets/icons/email.png";
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => (
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
            <img src={LinkedIn} className="w-8 h-8 mr-2" alt="linkedin" />
          </Link>
          {person.email && (
            <Link to={`mailto:${person.email}`}>
              <img src={Mail} className="w-8 h-8" alt="mail" />
            </Link>
          )}
        </div>
        <button type="button" className="link-btn self-end">
          Read bio →
        </button>
      </div>
    </div>
  </div>
);

export default PersonCard;
