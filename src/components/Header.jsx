import React from "react";
import { SocialIcon } from "react-social-icons";
import gearIcon from "../assets/gear-icon.svg";

const Header = ({ userDetails }) => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white fixed top-0 w-full z-[20]">
      {/* Title/Logo */}
      <div className="flex gap-x-3 w-[400px] justify-start">
        <img src={gearIcon} alt="Gear icon" className="w-8" />
        <h1 className="text-xl font-bold">AI CV Generator</h1>
      </div>

      {/* Slogan as no nav needed */}
      <div className={`${userDetails === "" ? "hidden md:block" : "hidden"}`}>
        <p className="text-center italic opacity-50">
          Powered by Open AI whisper model...
        </p>
      </div>

      <div
        className={`justify-center gap-x-3 items-center ${
          userDetails === "" ? "hidden" : "hidden md:flex"
        }`}
      >
        <img
          src={userDetails.img}
          alt="User"
          className="w-10 h-10 object-fit rounded-full border-2 border-blue-500"
        />
        <p>
          Currently logged in: <strong>{userDetails.name}</strong>
        </p>
      </div>

      {/* Social media for me */}
      <div className="w-fit md:w-[400px] flex justify-end">
        <div className="hidden md:block">
          <SocialIcon
            url="https://twitter.com/chatgpt4"
            bgColor="transparent"
            fgColor="white"
          />
        </div>
        <div className="hidden md:block">
          <SocialIcon
            url="https://www.linkedin.com/company/chat-gpt-4"
            bgColor="transparent"
            fgColor="white"
          />
        </div>
        <SocialIcon
          url="https://github.com/chatgpt4"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
    </header>
  );
};

export default Header;
