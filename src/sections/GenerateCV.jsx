import React, { useEffect, useState } from "react";
import loadingGIF from "../assets/loading.gif";
import { motion } from "framer-motion";

const GenerateCV = ({ innerRef, cvData, generateCV, showSection }) => {
  const [loadingCV, setLoadingCV] = useState(false);

  useEffect(() => {
    console.log(cvData);
  }, [cvData]);

  function showCV() {
    generateCV();
    setLoadingCV(true);
    setTimeout(() => {
      showSection();
    }, 10000);
  }

  return (
    <div
      ref={innerRef}
      className="h-screen flex justify-center items-center bg-[url('https://i.imgur.com/8XIdY8P.png')] bg-no-repeat bg-cover bg-center bg-fixed"
    >
      {!loadingCV ? (
        <button
          onClick={showCV}
          className=" text-xl text-white bg-blue-500 p-2 rounded-lg"
        >
          Click to generate CV
        </button>
      ) : (
        <div className="flex items-center text-4xl italic gap-x-6">
          <motion.div
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <p>Generating your CV...</p>
          </motion.div>

          <img src={loadingGIF} alt="Loading" className="w-[100px]" />
        </div>
      )}
    </div>
  );
};

export default GenerateCV;
