import React, { useRef, useState } from "react";
import Skill from "./Skill";
import plusIcon from "../assets/plus.svg";
import downArrow from "../assets/down.svg";

const { v4: uuidv4 } = require("uuid");

const HobbiesInput = ({ showSection, innerRef }) => {
  const [hobbies, setHobbies] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const hobbieRef = useRef();

  const handleAddHobbie = () => {
    const hobbie = {
      id: uuidv4(),
      name: hobbieRef.current.value,
    };

    hobbieRef.current.value = "";

    const tempList = [...hobbies, hobbie];

    setHobbies(tempList);
  };

  const deleteHobbie = (id) => {
    const tempHobbies = [...hobbies];
    setHobbies(tempHobbies.filter((hobbie) => hobbie.id !== id));
  };

  const nextSection = () => {
    showSection();
    setButtonDisabled(true);
  };

  return (
    <div className={`h-screen flex justify-center items-center`} ref={innerRef}>
      <div className="flex flex-col gap-y-10 items-center w-[700px]">
        <div className="bg-blue-500 rounded-full flex justify-center items-center w-[75px] h-[75px]">
          <p className="font-bold text-4xl text-white">5</p>
        </div>

        <h3 className="text-5xl font-bold text-center">
          Enter a list of your favorite hobbies.
        </h3>

        <div className="flex flex-col gap-y-3">
          {hobbies.map((hb) => (
            <Skill key={hb.id} skill={hb} deleteSkill={deleteHobbie} />
          ))}
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Enter your hobbies..."
            className="w-[400px] px-2 py-3 bg-slate-100 rounded-lg"
            ref={hobbieRef}
          />
          <button
            className="bg-blue-500 rounded-lg w-12 p-2"
            onClick={handleAddHobbie}
          >
            <img src={plusIcon} alt="Plus Icon" />
          </button>
        </div>

        <button
          onClick={nextSection}
          className={`${
            buttonDisabled ? `bg-gray-500` : `bg-blue-500`
          } rounded-full transition-colors duration-500`}
          disabled={buttonDisabled}
        >
          <img src={downArrow} alt="Down Arrow" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default HobbiesInput;
