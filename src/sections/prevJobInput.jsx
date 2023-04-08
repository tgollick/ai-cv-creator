import React, { useEffect, useRef, useState } from "react";
import Job from "../components/Job";
import downArrow from "../assets/down.svg";
import roleCompletion from "../api/roleCompletion";
import { motion, AnimatePresence } from "framer-motion";
import loadingGIF from "../assets/loading.gif";

const PreviousJob = ({
  showSection,
  setJobRole2,
  jobRole2,
  setSectionVisible,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const jobRoleRef = useRef();
  const companyNameRef = useRef();
  const startRef = useRef();
  const endRef = useRef();

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
    setLoading(true);
    const jobDescription = await roleCompletion(
      jobRoleRef.current.value,
      companyNameRef.current.value
    );

    setJobRole2({
      jobRole: jobRoleRef.current.value,
      companyName: companyNameRef.current.value,
      jobDescription: jobDescription,
      startDate: startRef.current.value,
      endDate: endRef.current.value,
    });
  };

  return (
    <div
      className={`h-screen flex justify-center items-center relative py-24 px-4 box-border`}
    >
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
            className="flex flex-col gap-y-10 items-center w-full md:w-[700px]"
          >
            <div className="bg-blue-500 rounded-full flex z-[11] justify-center items-center w-[50px] h-[50px] md:w-[75px] md:h-[75px]">
              <p className="font-bold text-3xl md:text-4xl ">2</p>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-center">
              Enter your previous job role and company.
            </h3>

            <div className="w-full">
              <Job
                jobRoleRef={jobRoleRef}
                companyNameRef={companyNameRef}
                startRef={startRef}
                endRef={endRef}
              />
            </div>

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

export default PreviousJob;
