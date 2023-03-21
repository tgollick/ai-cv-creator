import React from "react";
import CurrentRoleInput from "./CurrentRoleInput";

const CurrentRole = ({ handleNext }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-y-20 w-[700px]">
        <div className="flex flex-col gap-y-10">
          <h2 className="text-6xl font-bold">
            CV Creation has never been{" "}
            <span className="underline decoration-blue-500 decoration-6">
              so easy.
            </span>
          </h2>
          <p>
            Using new AI technology creating a CV has never been such an easy
            process, no sign up required.{" "}
            <span className="font-bold">Get started today!</span>
          </p>

          <CurrentRoleInput handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default CurrentRole;
