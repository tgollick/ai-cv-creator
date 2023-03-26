import React from "react";
import CV from "../components/CV.jsx";

const CVsection = ({ innerRef, cvData }) => {
  return (
    <div
      className={`h-screen flex justify-center items-center bg-[url('https://i.imgur.com/8XIdY8P.png')] bg-no-repeat bg-cover bg-center bg-fixed`}
      ref={innerRef}
    >
      <CV cvData={cvData} />
    </div>
  );
};

export default CVsection;
