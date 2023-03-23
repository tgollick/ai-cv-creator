import React from "react";
import CVImage from "./CVImage.jsx";
import CVContact from "./CVContact.jsx";
import CVSkills from "./CVSkills.jsx";
import CVHobbies from "./CVHobbies.jsx";
import CVInfo from "./CVInfo.jsx";
import CVJobs from "./CVJobs.jsx";
import CVEducation from "./CVEducation.jsx";

const CV = ({ innerRef, userDetails }) => {
  return (
    <div className={`h-screen flex justify-center items-center`} ref={innerRef}>
      <div className="flex w-[700px] aspect-[1/1.4] shadow-2xl">
        <div className="w-[200px] h-full bg-gray-800 flex flex-col text-white">
          <CVImage userImage={userDetails.img} />
          <CVContact />
          <CVSkills />
          <CVHobbies />
        </div>
        <div className="w-[500px] h-full text-gray-800 bg-slate-100">
          <CVInfo />
          <CVJobs />
          <CVEducation />
        </div>
      </div>
    </div>
  );
};

export default CV;
