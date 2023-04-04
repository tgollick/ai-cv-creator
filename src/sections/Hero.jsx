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
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 0.5 }}
          className={`h-screen flex justify-center items-center relative ${
            visible ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-y-10 w-[700px]">
            <h2 className="text-6xl font-bold">
              CV Creation has never been so{" "}
              <span className="underline decoration-blue-500 decoration-6">
                easy.
              </span>
            </h2>
            <p>
              Using new AI technology creating a CV has never been such an easy
              process, no sign up required. Get started{" "}
              <span className="font-bold uppercase">today!</span>
            </p>
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
  );
};

export default Hero;
