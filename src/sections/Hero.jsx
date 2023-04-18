import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AnimatePresence, motion } from "framer-motion";

const Hero = ({ setSectionVisible, setUserDetails, userdetails }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setSectionVisible(0);
  }, []);

  useEffect(() => {
    if (userdetails === "") {
    } else {
      setVisible(false);

      setTimeout(() => {
        setSectionVisible(1);
      }, 550);
    }
  }, [userdetails]);

  return (
    <div
      className={`h-screen flex justify-center items-center relative py-28 px-4 box-border`}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-y-10 w-full md:w-[700px]"
          >
            <h2 className="text-5xl text-center md:text-left lg:text-6xl font-bold">
              CV Creation has never been so{" "}
              <span className="underline decoration-blue-500 decoration-6">
                easy.
              </span>
            </h2>
            <p className="text-center md:text-left">
              Using new AI technology creating a CV has never been such an easy
              process. Simply login with Google to get started{" "}
              <span className="font-bold uppercase">today!</span>
            </p>

            <div className="w-fit mx-auto md:mx-0">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decodedData = jwt_decode(credentialResponse.credential);
                  console.log(decodedData);
                  const fullName = decodedData.name;
                  const image = decodedData.picture;
                  const email = decodedData.email;
                  setUserDetails({
                    name: fullName,
                    img: image,
                    email: email,
                  });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
