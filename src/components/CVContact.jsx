import React from "react";

const CVContact = ({ userName, userEmail, userSocials }) => {
  return (
    <div className="pl-8 flex flex-col gap-y-4">
      <h2 className="text-2xl font-bold border-b-2 border-white">Contact</h2>

      <div className="text-xs flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <strong>Fullname</strong>
          <p>{userName}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <strong>Email Address</strong>
          <p>{userEmail}</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <strong>Social Media</strong>
          <div className="flex flex-col gap-y-2">
            {userSocials.map((social, socialIdx) => (
              <div key={socialIdx} className="flex gap-x-2 items-center">
                <img src={social.img} alt="Social icon" className="h-4" />
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
