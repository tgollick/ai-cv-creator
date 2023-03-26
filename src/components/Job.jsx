import React from "react";

const Job = ({ jobRoleRef, companyNameRef }) => {
  return (
    <div className="flex flex-col gap-y-2 text-black">
      <input
        type="text"
        placeholder="Enter a job role..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={jobRoleRef}
      />

      <input
        type="text"
        placeholder="Enter a company name..."
        className="w-[600px] px-2 py-3 bg-slate-100 rounded-lg"
        required
        ref={companyNameRef}
      />
    </div>
  );
};

export default Job;
