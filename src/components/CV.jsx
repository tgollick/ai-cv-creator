import React from "react";
import { motion } from "framer-motion";
import CVImage from "../components/CVImage.jsx";
import CVContact from "../components/CVContact.jsx";
import CVSkills from "../components/CVSkills.jsx";
import CVHobbies from "../components/CVHobbies.jsx";
import CVInfo from "../components/CVInfo.jsx";
import CVJobs from "../components/CVJobs.jsx";
import CVEducation from "../components/CVEducation.jsx";

const CV = ({ cvData, green, purple, blue }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 1,
      }}
      className="flex w-full md:w-[700px] aspect-[1/1.4] shadow-2xl"
    >
      <div
        className={`w-[30%] md:w-[200px] h-full flex flex-col text-white pb-10 transition-all duration-1000 ${
          green ? "bg-[#013220]" : ""
        } ${blue ? "bg-slate-800" : ""} ${purple ? "bg-[#301934]" : ""}`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 9,
          }}
        >
          <CVImage userImage={cvData.userImage} />
        </motion.div>

        <div className="flex flex-col justify-between h-full">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 4,
            }}
          >
            <CVContact
              userName={cvData.userFullName}
              userEmail={cvData.userEmail}
              userSocials={cvData.socials}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 7,
            }}
          >
            <CVSkills userSkills={cvData.skills} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 5,
            }}
          >
            <CVHobbies userHobbies={cvData.hobbies} />
          </motion.div>
        </div>
      </div>
      <div
        className={`w-[70%] md:w-[500px] ${green ? "text-[#013220]" : ""} ${
          blue ? "text-slate-800" : ""
        } ${
          purple ? "text-[#301934]" : ""
        } bg-white px-3 md:px-6 py-4 md:py-10 flex flex-col justify-between h-full`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 6,
          }}
        >
          <CVInfo
            userName={cvData.userFullName}
            userRole={cvData.userGeneralRole}
            userPS={cvData.userPersonalSummary}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 8,
          }}
        >
          <CVJobs jobs={cvData.jobs} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          <CVEducation education={cvData.education} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CV;
