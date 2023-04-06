import React, { useEffect, useRef, useState } from "react";
import Education from "../components/Education";
import downArrow from "../assets/down.svg";
import educationCompletion from "../api/educationCompletion.js";
import { motion, AnimatePresence } from "framer-motion";
import loadingGIF from "../assets/loading.gif";

const EducationInput = ({ setEducation, education, setSectionVisible }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const degreeRef = useRef();
  const schoolRef = useRef();
  const resultRef = useRef();
  const startRef = useRef();
  const endRef = useRef();

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
    setLoading(true);

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
      startDate: startRef.current.value,
      endDate: endRef.current.value,
    });
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
              <p className="font-bold text-3xl md:text-4xl">4</p>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-center">
              Enter your highest point of education.
            </h3>

            <Education
              degreeRef={degreeRef}
              schoolRef={schoolRef}
              resultRef={resultRef}
              startRef={startRef}
              endRef={endRef}
            />

            <button
              className={`${
                buttonDisabled ? `bg-gray-500` : `bg-blue-500`
              } rounded-full transition-colors duration-500`}
              onClick={nextSection}
              disabled={buttonDisabled}
            >
              <img
                src={loading ? loadingGIF : downArrow}
                alt="Down Arrow"
                className="w-10"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationInput;
