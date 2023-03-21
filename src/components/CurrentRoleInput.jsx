import React, { useRef } from "react";
import searchIcon from "../assets/search-icon.svg";

const CurrentRoleInput = ({ handleNext }) => {
  const currentInput = useRef();

  const handleInput = () => {
    console.log(currentInput.value);
    if (currentInput.value === undefined) {
      return;
    } else {
      handleNext();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your current/most recent jole role..."
        className="w-full px-2 py-3 bg-slate-100 rounded-lg z-[-2]"
        required
        ref={currentInput}
      />

      <img
        src={searchIcon}
        alt="Search icon"
        className="absolute top-2 right-2 w-8 cursor-pointer"
        onClick={handleInput}
      />
    </div>
  );
};

export default CurrentRoleInput;
