import React, { useEffect, useRef, useState } from "react";
import plusIcon from "../assets/plus.svg";
import downArrow from "../assets/down.svg";
import Skill from "../components/Skill";
import { motion, AnimatePresence } from "framer-motion";

const { v4: uuidv4 } = require("uuid");

const SkillsInput = ({ setSectionVisible, setCVSkills, CVSkills }) => {
  const [skills, setSkills] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);

  const skillRef = useRef();

  useEffect(() => {
    setSectionVisible(3);
  }, []);

  useEffect(() => {
    if (CVSkills === undefined) {
    } else {
      setVisible(false);
      console.log(CVSkills);

      setTimeout(() => {
        setSectionVisible(4);
      }, 550);
    }
  }, [CVSkills]);

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

  const nextSection = () => {
    setCVSkills(skills.map((skill) => skill.name));
    setButtonDisabled(true);
  };

  return (
    <div className={`h-screen flex justify-center items-center`}>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col gap-y-10 items-center w-full p-4 md:p-0 md:w-[700px]"
          >
            <div className="bg-blue-500 rounded-full flex justify-center items-center w-[50px] h-[50px] md:w-[75px] md:h-[75px]">
              <p className="font-bold text-3xl md:text-4xl">3</p>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-center">
              Enter your key skills.
            </h3>

            <div className="flex flex-col gap-y-3 w-full">
              {skills.map((sk) => (
                <Skill key={sk.id} skill={sk} deleteSkill={deleteSkill} />
              ))}
            </div>

            <div className="flex items-center gap-x-2 w-full">
              <input
                type="text"
                placeholder="Enter your key skills..."
                className="w-full px-2 py-3 bg-slate-100 rounded-lg"
                ref={skillRef}
              />
              <button
                className="bg-blue-500 rounded-lg w-12 p-2"
                onClick={handleAddSkill}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsInput;
