import React, { useRef, useState } from "react";
import plusIcon from "../assets/plus.svg";
import downArrow from "../assets/down.svg";
import Skill from "./Skill";

const { v4: uuidv4 } = require("uuid");

const SkillsInput = ({ innerRef, showSection }) => {
  const [skills, setSkills] = useState([]);

  const skillRef = useRef();

  const handleAddSkill = () => {
    const skill = {
      id: uuidv4(),
      name: skillRef.current.value,
    };

    skillRef.current.value = "";

    const tempList = [...skills, skill];

    setSkills(tempList);
  };

  const deleteSkill = (id) => {
    const tempSkills = [...skills];
    setSkills(tempSkills.filter((skill) => skill.id !== id));
  };

  return (
    <div className={`h-screen flex justify-center items-center`} ref={innerRef}>
      <div className="flex flex-col gap-y-10 items-center w-[700px]">
        <div className="bg-blue-500 rounded-full flex justify-center items-center w-[75px] h-[75px]">
          <p className="font-bold text-4xl text-white">3</p>
        </div>

        <h3 className="text-5xl font-bold text-center">
          Enter your key skills.
        </h3>

        <div className="flex flex-col gap-y-3">
          {skills.map((sk) => (
            <Skill key={sk.id} skill={sk} deleteSkill={deleteSkill} />
          ))}
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Enter your key skills..."
            className="w-[400px] px-2 py-3 bg-slate-100 rounded-lg"
            ref={skillRef}
          />
          <button
            className="bg-blue-500 rounded-lg w-12 p-2"
            onClick={handleAddSkill}
          >
            <img src={plusIcon} alt="Plus Icon" />
          </button>
        </div>

        <button onClick={showSection} className="bg-blue-500 rounded-full">
          <img src={downArrow} alt="Down Arrow" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default SkillsInput;
