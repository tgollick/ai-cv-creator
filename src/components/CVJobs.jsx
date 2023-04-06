import React from "react";

const CVJobs = ({ jobs }) => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-4 box-border">
      <h2 className="text-xs md:text-2xl font-bold border-b-2 border-gray-800">
        Experience
      </h2>

      {jobs.map((job, index) => (
        <div key={index} className="flex flex-col gap-y-0.5 md:gap-y-1">
          <p className="text-[7px] md:text-sm font-bold">
            {job.dateStart} - {job.dateEnd}
          </p>

          <p className="text-[8px] md:text-base">{job.jobRole}</p>

          <p className="text-[7px] md:text-sm italic font-bold">
            {job.companyName}
          </p>

          <p className="text-[5px] min-[380px]:text-[5.5xp] min-[410px]:text-[6px] md:text-xs">
            {job.jobDescription}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CVJobs;
