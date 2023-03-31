import React, { useRef, useState } from "react";
import Education from "../components/Education";
import downArrow from "../assets/down.svg";
import { educationCompletion } from "../api/educationCompletion.js";

const EducationInput = ({ showSection, setEducation }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const degreeRef = useRef();
  const schoolRef = useRef();
  const resultRef = useRef();

  const nextSection = async () => {
    showSection();
    setButtonDisabled(true);

    const description = await educationCompletion(
      degreeRef.current.value,
      schoolRef.current.value,
      resultRef.current.value
    );

    setEducation({
      degree: degreeRef.current.value,
      schoolName: schoolRef.current.value,
      grade: resultRef.current.value,
      description: description,
    });
  };

  return (
    <div className={`h-screen flex justify-center items-center`}>
      <div className="flex flex-col gap-y-10 items-center w-[700px]">
        <div className="bg-blue-500 rounded-full flex justify-center items-center w-[75px] h-[75px]">
          <p className="font-bold text-4xl ">4</p>
        </div>

        <h3 className="text-5xl font-bold text-center">
          Enter your highest point of education.
        </h3>

        <Education
          degreeRef={degreeRef}
          schoolRef={schoolRef}
          resultRef={resultRef}
        />

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

export default EducationInput;
