import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="text"
        placeholder="Degree/Course name..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="University/College name..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="Grade acheived..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
      />
    </div>
  );
};

export default Education;
