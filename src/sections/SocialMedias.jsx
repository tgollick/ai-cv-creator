import React, { useEffect, useRef, useState } from "react";
import downArrow from "../assets/down.svg";
import plusIcon from "../assets/plus.svg";
import Social from "../components/Social";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import { motion, AnimatePresence } from "framer-motion";
import loadingGIF from "../assets/loading.gif";

const { v4: uuidv4 } = require("uuid");

const SocialMedias = ({
  setCVSocials,
  CVSocials,
  setSectionVisible,
  generateCV,
  data,
}) => {
  const [socials, setSocials] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setSectionVisible(6);
  }, []);

  useEffect(() => {
    if (CVSocials === undefined) {
    } else {
      console.log(CVSocials);
      generateCV();
    }
  }, [CVSocials]);

  useEffect(() => {
    if (data === undefined) {
    } else {
      setVisible(false);
      setTimeout(() => {
        setSectionVisible(7);
      }, 550);
    }
  }, [data]);

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
    setLoading(true);
  };

  return (
    <div
      className={`h-screen flex justify-center items-center py-24 px-4 box-border`}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col gap-y-10 items-center w-full md:w-[700px]"
          >
            <div className="bg-blue-500 rounded-full flex justify-center items-center w-[50px] h-[50px] md:w-[75px] md:h-[75px]">
              <p className="font-bold text-3xl md:text-4xl">6</p>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-center">
              Enter your social medias.
            </h3>

            <div className="flex flex-col gap-y-3 w-full">
              {socials.map((sm) => (
                <Social key={sm.id} social={sm} deleteSocial={deleteSocial} />
              ))}
            </div>

            <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center">
              <div className="flex items-center gap-x-2 w-full md:w-fit">
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
                  {socialMedias.map((social, index) => (
                    <option key={index} value={social.id}>
                      {social.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  className="bg-blue-500 rounded-lg w-8 md:w-12 p-2"
                  onClick={handleAddSocial}
                >
                  <img src={plusIcon} alt="Plus Icon" />
                </button>
              </div>
            </div>

            <button
              onClick={nextSection}
              className={`${
                buttonDisabled ? `bg-gray-500` : `bg-blue-500`
              } rounded-full transition-colors duration-500`}
              disabled={buttonDisabled}
            >
              <img
                src={loading ? loadingGIF : downArrow}
                alt="Down Arrow"
                className="w-10"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMedias;
