import React, { useRef, useState } from "react";
import downArrow from "../assets/down.svg";
import plusIcon from "../assets/plus.svg";
import Social from "./Social";

const { v4: uuidv4 } = require("uuid");

const SocialMedias = ({ showSection, innerRef }) => {
  const [socials, setSocials] = useState([]);

  const socialMedias = [
    {
      name: "Twitter",
      img: "",
      id: "twitter",
    },
    {
      name: "Youtube",
      img: "",
      id: "youtube",
    },
    {
      name: "GitHub",
      img: "",
      id: "github",
    },
    {
      name: "LinkedIn",
      img: "",
      id: "linkedin",
    },
    {
      name: "Instagram",
      img: "",
      id: "instagram",
    },
  ];

  const socialRef = useRef();

  const handleAddSocial = () => {
    const social = {
      id: uuidv4(),
      name: socialRef.current.value,
    };

    socialRef.current.value = "";

    const tempList = [...socials, social];

    setSocials(tempList);
  };

  const deleteSocial = (id) => {
    const tempSocials = [...socials];
    setSocials(tempSocials.filter((social) => social.id !== id));
  };

  return (
    <div className={`h-screen flex justify-center items-center`} ref={innerRef}>
      <div className="flex flex-col gap-y-10 items-center w-[700px]">
        <div className="bg-blue-500 rounded-full flex justify-center items-center w-[75px] h-[75px]">
          <p className="font-bold text-4xl text-white">6</p>
        </div>

        <h3 className="text-5xl font-bold text-center">
          Enter your social medias.
        </h3>

        <div className="flex flex-col gap-y-3">
          {socials.map((sm) => (
            <Social key={sm.id} skill={sm} deleteSkill={deleteSocial} />
          ))}
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Enter your social media username..."
            className="w-[350px] px-2 py-3 bg-slate-100 rounded-lg"
            ref={socialRef}
          />
          <select
            name="cars"
            id="cars"
            className="w-[125px] px-2 py-3 bg-slate-100 rounded-lg"
          >
            {socialMedias.map((social) => (
              <option value={social.id}>{social.name}</option>
            ))}
          </select>
          <button
            className="bg-blue-500 rounded-lg w-12 p-2"
            onClick={handleAddSocial}
          >
            <img src={plusIcon} alt="Plus Icon" />
          </button>
        </div>

        <button onClick={showSection} className="bg-blue-500 rounded-full">
          <img src={downArrow} alt="Down Arrow" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default SocialMedias;
