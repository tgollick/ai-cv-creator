import React, { useRef, useState } from "react";
import Job from "../components/Job";
import downArrow from "../assets/down.svg";
import { roleCompletion } from "../api/roleCompletion";

const PreviousJob = ({ innerRef, showSection, setJobRole2 }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const jobRoleRef = useRef();
  const companyNameRef = useRef();

  const nextSection = async () => {
    showSection();
    setButtonDisabled(true);

    const jobDescription = await roleCompletion(
      jobRoleRef.current.value,
      companyNameRef.current.value
    );

    setJobRole2({
      jobRole: jobRoleRef.current.value,
      companyName: companyNameRef.current.value,
      jobDescription: jobDescription,
    });
  };

  return (
    <div
      className={`h-screen flex justify-center items-center relative`}
      ref={innerRef}
    >
      <div className="flex flex-col gap-y-10 items-center w-[700px]">
        <div className="bg-blue-500 rounded-full flex z-[11] justify-center items-center w-[75px] h-[75px]">
          <p className="font-bold text-4xl text-white ">2</p>
        </div>

        <h3 className="text-5xl font-bold text-center">
          Enter your previous job role and company.
        </h3>

        <div>
          <Job jobRoleRef={jobRoleRef} companyNameRef={companyNameRef} />
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

export default PreviousJob;
