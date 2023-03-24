import React from "react";
import CVImage from "./CVImage.jsx";
import CVContact from "./CVContact.jsx";
import CVSkills from "./CVSkills.jsx";
import CVHobbies from "./CVHobbies.jsx";
import CVInfo from "./CVInfo.jsx";
import CVJobs from "./CVJobs.jsx";
import CVEducation from "./CVEducation.jsx";
import { motion } from "framer-motion";

const CV = ({ innerRef, cvData }) => {
  return (
    <div className={`h-screen flex justify-center items-center`} ref={innerRef}>
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
        className="flex w-[700px] aspect-[1/1.4] shadow-2xl"
      >
        <div className="w-[200px] h-full bg-gray-800 flex flex-col text-white pb-10">
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
        <div className="w-[500px] text-gray-800 bg-white px-6 py-10 flex flex-col justify-between h-full">
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
    </div>
  );
};

export default CV;