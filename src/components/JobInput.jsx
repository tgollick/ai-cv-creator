import React, { useState } from "react";
import Job from "./Job";
import downArrow from "../assets/down.svg";

const Step = ({ sectionTitle, stepNumber, innerRef, showSection }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const nextSection = () => {
    showSection();
    setButtonDisabled(true);
  };

  return (
    <div
      className={`h-screen flex justify-center items-center relative`}
      ref={innerRef}
    >
      <div className="flex flex-col gap-y-10 items-center w-[700px]">
        <div className="bg-blue-500 rounded-full flex z-[11] justify-center items-center w-[75px] h-[75px]">
          <p className="font-bold text-4xl text-white ">{stepNumber}</p>
        </div>

        <h3 className="text-5xl font-bold text-center">{sectionTitle}</h3>

        <div>
          <Job />
        </div>

        <button
          className={`${
            buttonDisabled ? `bg-gray-500` : `bg-blue-500`
          } rounded-full transition-colors duration-500`}
          onClick={nextSection}
          disabled={buttonDisabled}
        >
          <img src={downArrow} alt="Down Arrow" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default Step;
