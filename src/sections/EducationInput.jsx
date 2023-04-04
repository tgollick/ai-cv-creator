import React, { useEffect, useRef, useState } from "react";
import Education from "../components/Education";
import downArrow from "../assets/down.svg";
import { educationCompletion } from "../api/educationCompletion.js";
import { motion, AnimatePresence } from "framer-motion";

const EducationInput = ({ setEducation, education, setSectionVisible }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);

  const degreeRef = useRef();
  const schoolRef = useRef();
  const resultRef = useRef();

  useEffect(() => {
    setSectionVisible(4);
  }, []);

  useEffect(() => {
    if (education === undefined) {
    } else {
      setVisible(false);
      console.log(education);

      setTimeout(() => {
        setSectionVisible(5);
      }, 550);
    }
  }, [education]);

  const nextSection = async () => {
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EducationInput;
