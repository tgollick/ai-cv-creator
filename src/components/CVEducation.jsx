import React from "react";

const CVEducation = ({ education }) => {
  return (
    <div className="flex flex-col gap-y-4 box-border">
      <h2 className="text-2xl font-bold border-b-2 border-gray-800">
        Education
      </h2>

      <div className="flex flex-col gap-y-1">
        <p className="text-sm font-bold">
          {education.educationStart} - {education.educationEnd}
        </p>

        <p>{education.educationDegree}</p>

        <p className="text-sm italic font-bold">
          {education.educationSchoolName}
        </p>

        <p className="text-xs">{education.educationDescription}</p>
      </div>
    </div>
  );
};

export default CVEducation;
