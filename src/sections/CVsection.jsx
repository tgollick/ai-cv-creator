import React, { useState } from "react";
import CV from "../components/CV.jsx";
import { motion } from "framer-motion";

const CVsection = ({ cvData }) => {
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(true);
  const [purple, setPurple] = useState(false);

  const handleGreen = () => {
    setGreen(true);
    setBlue(false);
    setPurple(false);
  };

  const handleBlue = () => {
    setGreen(false);
    setBlue(true);
    setPurple(false);
  };

  const handlePurple = () => {
    setGreen(false);
    setBlue(false);
    setPurple(true);
  };

  return (
    <div
      className={`h-screen flex justify-center items-center w-full p-4 md:p-0 relative`}
    >
      <CV cvData={cvData} green={green} blue={blue} purple={purple} />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 8,
        }}
        className="absolute bottom-4 min-h-[675px]:bottom-8 flex gap-x-6"
      >
        <div className="w-12 h-12 min-h-[675px]:w-16 min-h-[675px]:h-16 min-h-[1000px]:w-20 min-h-[1000px]:h-20 rounded-full p-1 border-slate-800 border-2 hover:border-blue-500 transition-all duration-500 hover:scale-110">
          <div
            className="bg-slate-800 w-full h-full rounded-full"
            onClick={handleBlue}
          ></div>
        </div>
        <div className="w-12 h-12 min-h-[675px]:w-16 min-h-[675px]:h-16 min-h-[1000px]:w-20 min-h-[1000px]:h-20 rounded-full p-1 border-slate-800 border-2 hover:border-blue-500 transition-all duration-500 hover:scale-110">
          <div
            className="bg-[#301934] w-full h-full rounded-full"
            onClick={handlePurple}
          ></div>
        </div>
        <div className="w-12 h-12 min-h-[675px]:w-16 min-h-[675px]:h-16 min-h-[1000px]:w-20 min-h-[1000px]:h-20 rounded-full p-1 border-slate-800 border-2 hover:border-blue-500 transition-all duration-500 hover:scale-110">
          <div
            className="bg-[#013220] w-full h-full rounded-full"
            onClick={handleGreen}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

export default CVsection;
