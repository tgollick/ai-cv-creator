import React, { useEffect, useRef, useState } from "react";
import Job from "../components/Job";
import downArrow from "../assets/down.svg";
import { roleCompletion } from "../api/roleCompletion";
import { motion, AnimatePresence } from "framer-motion";

const PreviousJob = ({
  showSection,
  setJobRole2,
  jobRole2,
  setSectionVisible,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);

  const jobRoleRef = useRef();
  const companyNameRef = useRef();

  useEffect(() => {
    setSectionVisible(2);
  }, []);

  useEffect(() => {
    if (jobRole2 === undefined) {
    } else {
      setVisible(false);
      console.log(jobRole2);

      setTimeout(() => {
        setSectionVisible(3);
      }, 550);
    }
  }, [jobRole2]);

  const nextSection = async () => {
    setButtonDisabled(true);

    const jobDescription = await roleCompletion(
      jobRoleRef.current.value,
      companyNameRef.current.value
    );

    setJobRole2({
      jobRole: jobRoleRef.current.value,
      companyName: companyNameRef.current.value,
      jobDescription: jobDescription,
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
          className={`h-screen flex justify-center items-center relative ${
            visible ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-y-10 items-center w-[700px]">
            <div className="bg-blue-500 rounded-full flex z-[11] justify-center items-center w-[75px] h-[75px]">
              <p className="font-bold text-4xl ">2</p>
            </div>

            <h3 className="text-5xl font-bold text-center">
              Enter your previous job role and company.
            </h3>

            <div>
              <Job jobRoleRef={jobRoleRef} companyNameRef={companyNameRef} />
            </div>

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

export default PreviousJob;
