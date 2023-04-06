import React from "react";

const Job = ({ jobRoleRef, companyNameRef, startRef, endRef }) => {
  return (
    <div className="flex flex-col gap-y-2 justify-center text-black">
      <input
        type="text"
        placeholder="Enter a job role..."
        className="w-full px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={jobRoleRef}
      />

      <input
        type="text"
        placeholder="Enter a company name..."
        className="w-full px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={companyNameRef}
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

export default Job;
