import React from "react";

const CVSkills = ({ userSkills }) => {
  return (
    <div className="pl-8 flex flex-col gap-y-4 box-border">
      <h2 className="text-2xl font-bold border-b-2 border-white">Skills</h2>

      <div className="text-xs flex flex-col gap-y-4">
        <ul className="list-disc pl-4 pr-2 flex flex-col gap-y-2">
          {userSkills.map((skill, skillIdx) => (
            <li key={skillIdx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CVSkills;