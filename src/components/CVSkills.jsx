import React from "react";

const CVSkills = ({ userSkills }) => {
  return (
    <div className="pl-6 md:pl-8 flex flex-col gap-y-2 md:gap-y-4 box-border">
      <h2 className="text-xs md:text-2xl font-bold border-b-2 border-white">
        Skills
      </h2>

      <div className="text-[6px] min-[410px]:text-[7px] md:text-xs flex flex-col gap-y-2 md:gap-y-4">
        <ul className="list-disc pl-3 md:pl-4 pr-1 md:pr-2 flex flex-col gap-y-0.5 md:gap-y-2">
          {userSkills.map((skill, skillIdx) => (
            <li key={skillIdx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CVSkills;
