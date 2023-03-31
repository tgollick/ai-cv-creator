import React from "react";
import CV from "../components/CV.jsx";

const CVsection = ({ cvData }) => {
  return (
    <div className={`h-screen flex justify-center items-center`}>
      <CV cvData={cvData} />
    </div>
  );
};

export default CVsection;
