import React from "react";
import CV from "../components/CV.jsx";

const CVsection = ({ innerRef, cvData }) => {
  return (
    <div className={`h-screen flex justify-center items-center`} ref={innerRef}>
      <CV cvData={cvData} />
    </div>
  );
};

export default CVsection;
