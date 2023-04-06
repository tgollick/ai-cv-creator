import React from "react";

const CVContact = ({ userName, userEmail, userSocials }) => {
  return (
    <div className="pl-6 md:pl-8 flex flex-col gap-y-1 md:gap-y-4">
      <h2 className="text-xs md:text-2xl font-bold border-b-2 border-white">
        Contact
      </h2>

      <div className="text-[6px] min-[410px]:text-[7px] md:text-xs flex flex-col gap-y-1 md:gap-y-4">
        <div className="flex flex-col gap-y-0.5 md:gap-y-2">
          <strong>Fullname</strong>
          <p>{userName}</p>
        </div>
        <div className="flex flex-col gap-y-0.5 md:gap-y-2">
          <strong>Email Address</strong>
          <p>{userEmail}</p>
        </div>

        <div className="flex flex-col gap-y-0.5 md:gap-y-2">
          <strong>Social Media</strong>
          <div className="flex flex-col gap-y-0.5 md:gap-y-2">
            {userSocials.map((social, socialIdx) => (
              <div
                key={socialIdx}
                className="flex gap-x-0.5 md:gap-x-2 items-center"
              >
                <img
                  src={social.img}
                  alt="Social icon"
                  className="h-2 md:h-4"
                />
                <p>{social.username}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVContact;
