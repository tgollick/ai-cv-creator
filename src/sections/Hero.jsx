import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Hero = ({ showSection, handleUserDetails }) => {
  return (
    <div className="h-screen flex justify-center items-center relative bg-[url('https://i.imgur.com/8XIdY8P.png')] bg-no-repeat bg-cover bg-center bg-fixed">
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
            handleUserDetails(fullName, image, email);
            showSection();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
