import React from "react";

const CVImage = ({ userImage }) => {
  return (
    <div className="p-8">
      <img src={userImage} alt="User" className="w-full rounded-full" />
    </div>
  );
};

export default CVImage;
