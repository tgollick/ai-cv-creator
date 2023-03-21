import React from "react";

const PreviousRole = ({ show, divRef }) => {
  return (
    <div
      className={`h-screen flex justify-center items-center ${
        !show ? "hidden" : ""
      }`}
      ref={divRef}
    >
      <div className="flex flex-col gap-y-20 w-[700px]">
        <div className="flex flex-col gap-y-10">
          <h3 className="text-5xl font-bold">Now enter the role prior.</h3>
        </div>
      </div>
    </div>
  );
};

export default PreviousRole;
