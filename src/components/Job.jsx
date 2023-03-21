import React from "react";

const Job = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="text"
        placeholder="Enter a job role..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="Enter a company name..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
      />
    </div>
  );
};

export default Job;
