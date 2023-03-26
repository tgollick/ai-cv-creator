import React from "react";

const Education = ({ degreeRef, schoolRef, resultRef }) => {
  return (
    <div className="flex flex-col gap-y-2 text-black">
      <input
        type="text"
        placeholder="Degree/Course name..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={degreeRef}
      />

      <input
        type="text"
        placeholder="University/College name..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={schoolRef}
      />

      <input
        type="text"
        placeholder="Grade acheived..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={resultRef}
      />
    </div>
  );
};

export default Education;
