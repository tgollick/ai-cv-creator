import React from "react";
import { SocialIcon } from "react-social-icons";
import gearIcon from "../assets/gear-icon.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white fixed top-0 w-full z-[20]">
      {/* Title/Logo */}
      <div className="flex gap-x-3 items-center">
        <img src={gearIcon} alt="Gear icon" className="w-8" />
        <h1 className="text-xl font-bold">AI CV Generator</h1>
      </div>

      {/* Slogan as no nav needed */}
      <div>
        <p className="italic opacity-50">Powered by Chat GPT 4 AI model...</p>
      </div>

      {/* Social media for me */}
      <div>
        <SocialIcon
          url="https://twitter.com/chatgpt4"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/chat-gpt-4"
          bgColor="transparent"
          fgColor="white"
        />
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
