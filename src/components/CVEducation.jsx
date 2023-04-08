import React from "react";

const CVEducation = ({ education }) => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-4 box-border">
      <h2 className="text-xs md:text-2xl font-bold border-b-2 border-gray-800">
        Education
      </h2>

      <div className="flex flex-col gap-y-0.5 md:gap-y-1">
        <p className="text-[7px] md:text-sm font-bold">
          {education.educationStart} - {education.educationEnd}
        </p>

        <p className="text-[8px] md:text-base">{education.educationDegree}</p>

        <p className="text-[7px] md:text-sm italic font-bold">
          {education.educationSchoolName}
        </p>

        <p className="text-[5px] min-[380px]:text-[5.5xp] min-[410px]:text-[6px] md:text-[10px]">
          {education.educationDescription}
        </p>
      </div>
    </div>
  );
};

export default CVEducation;
