import React from "react";
import deleteIcon from "../assets/delete.svg";

const Social = ({ social, deleteSocial }) => {
  const handleDelete = () => {
    deleteSocial(social.id);
  };

  return (
    <div className="flex justify-center gap-x-3 text-black">
      <p className="text-xl w-[400px]">{social.username}</p>
      <img src={social.socialType.img} alt="Social logo" className="w-10" />
      <button onClick={handleDelete}>
        <img
          src={deleteIcon}
          alt="Delete button"
          className="bg-red-500 rounded-lg w-8 p-1"
        />
      </button>
    </div>
  );
};

export default Social;
