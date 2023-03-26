import React, { useRef, useState } from "react";
import downArrow from "../assets/down.svg";
import plusIcon from "../assets/plus.svg";
import Social from "../components/Social";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

const { v4: uuidv4 } = require("uuid");

const SocialMedias = ({ innerRef, showSection, setCVSocials }) => {
  const [socials, setSocials] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const socialMedias = [
    {
      name: "Twitter",
      img: twitter,
      id: "twitter",
    },
    {
      name: "Youtube",
      img: youtube,
      id: "youtube",
    },
    {
      name: "GitHub",
      img: github,
      id: "github",
    },
    {
      name: "LinkedIn",
      img: linkedin,
      id: "linkedin",
    },
    {
      name: "Instagram",
      img: instagram,
      id: "instagram",
    },
  ];

  const socialRef = useRef();
  const socialTypeRef = useRef();

  const handleAddSocial = () => {
    const matchedSocial = socialMedias.find(
      (social) => social.id === socialTypeRef.current.value
    );

    const social = {
      id: uuidv4(),
      username: socialRef.current.value,
      socialType: matchedSocial,
    };

    socialRef.current.value = "";

    const tempList = [...socials, social];

    setSocials(tempList);
  };

  const deleteSocial = (id) => {
    const tempSocials = [...socials];
    setSocials(tempSocials.filter((social) => social.id !== id));
  };

  const nextSection = () => {
    setCVSocials(
      socials.map(({ username, socialType }) => ({
        username,
        img: socialType.img,
      }))
    );
    setButtonDisabled(true);
    showSection();
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
            <Social key={sm.id} social={sm} deleteSocial={deleteSocial} />
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
            className="w-[125px] px-2 py-3 bg-slate-100 rounded-lg"
            ref={socialTypeRef}
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

        <button
          onClick={nextSection}
          className={`${
            buttonDisabled ? `bg-gray-500` : `bg-blue-500`
          } rounded-full transition-colors duration-500`}
          disabled={buttonDisabled}
        >
          <img src={downArrow} alt="Down Arrow" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default SocialMedias;
