import React from "react";
import plane from "../assets/plane.svg";
import { motion } from "framer-motion";

const Hero = ({ showSection }) => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="flex flex-col gap-y-10 w-[700px]">
        <h2 className="text-6xl font-bold">
          CV Creation has never been so{" "}
          <span className="underline decoration-blue-500 decoration-6">
            easy.
          </span>
        </h2>
        <p>
          Using new AI technology creating a CV has never been such an easy
          process, no sign up required. Get started{" "}
          <span className="font-bold uppercase">today!</span>
        </p>

        <button
          onClick={showSection}
          className="py-3 px-5 bg-blue-500 text-white rounded-lg w-fit"
        >
          Lets go
        </button>
      </div>
    </div>
  );
};

export default Hero;
