import React from "react";

const Education = ({ degreeRef, schoolRef, resultRef, startRef, endRef }) => {
  return (
    <div className="flex flex-col gap-y-2 text-black w-full">
      <input
        type="text"
        placeholder="Degree/Course name..."
        className="w-full px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={degreeRef}
      />

      <input
        type="text"
        placeholder="University/College name..."
        className="w-full px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={schoolRef}
      />

      <input
        type="text"
        placeholder="Grade acheived..."
        className="w-full px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={resultRef}
      />

      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">Start date:</p>
          <input
            type="date"
            ref={startRef}
            className="w-[70%] md:w-[85%] px-2 py-3 bg-slate-100 rounded-lg"
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">End date:</p>
          <input
            type="date"
            ref={endRef}
            className="w-[70%] md:w-[85%] px-2 py-3 bg-slate-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
