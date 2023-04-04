import React, { useEffect, useRef, useState } from "react";
import Skill from "../components/Skill";
import plusIcon from "../assets/plus.svg";
import downArrow from "../assets/down.svg";
import { motion, AnimatePresence } from "framer-motion";

const { v4: uuidv4 } = require("uuid");

const HobbiesInput = ({ setCVHobbies, CVHobbies, setSectionVisible }) => {
  const [hobbies, setHobbies] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);

  const hobbieRef = useRef();

  useEffect(() => {
    setSectionVisible(5);
  }, []);

  useEffect(() => {
    if (CVHobbies === undefined) {
    } else {
      setVisible(false);
      console.log(CVHobbies);

      setTimeout(() => {
        setSectionVisible(6);
      }, 550);
    }
  }, [CVHobbies]);

  const handleAddHobbie = () => {
    const hobbie = {
      id: uuidv4(),
      name: hobbieRef.current.value,
    };

    hobbieRef.current.value = "";

    const tempList = [...hobbies, hobbie];

    setHobbies(tempList);
  };

  const deleteHobbie = (id) => {
    const tempHobbies = [...hobbies];
    setHobbies(tempHobbies.filter((hobbie) => hobbie.id !== id));
  };

  const nextSection = () => {
    setCVHobbies(hobbies.map((hobbie) => hobbie.name));
    setButtonDisabled(true);
  };

  return (
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
          className={`h-screen flex justify-center items-center ${
            visible ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-y-10 items-center w-[700px]">
            <div className="bg-blue-500 rounded-full flex justify-center items-center w-[75px] h-[75px]">
              <p className="font-bold text-4xl ">5</p>
            </div>

            <h3 className="text-5xl font-bold text-center">
              Enter a list of your favorite hobbies.
            </h3>

            <div className="flex flex-col gap-y-3">
              {hobbies.map((hb) => (
                <Skill key={hb.id} skill={hb} deleteSkill={deleteHobbie} />
              ))}
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="text"
                placeholder="Enter your hobbies..."
                className="w-[400px] px-2 py-3 bg-slate-100 rounded-lg"
                ref={hobbieRef}
              />
              <button
                className="bg-blue-500 rounded-lg w-12 p-2"
                onClick={handleAddHobbie}
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HobbiesInput;
