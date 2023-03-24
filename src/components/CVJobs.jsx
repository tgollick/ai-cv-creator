import React from "react";

const CVJobs = ({ jobs }) => {
  return (
    <div className="flex flex-col gap-y-4 box-border">
      <h2 className="text-2xl font-bold border-b-2 border-gray-800">
        Experience
      </h2>

      {jobs.map((job, index) => (
        <div key={index} className="flex flex-col gap-y-1">
          <p className="text-sm font-bold">
            {job.dateStart} - {job.dateEnd}
          </p>

          <p>{job.jobRole}</p>

          <p className="text-sm italic font-bold">{job.companyName}</p>

          <p className="text-xs">{job.jobDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default CVJobs;
