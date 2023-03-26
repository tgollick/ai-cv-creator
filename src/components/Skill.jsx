import React from "react";
import deleteIcon from "../assets/delete.svg";

const Skill = ({ skill, deleteSkill }) => {
  const handleDelete = () => {
    deleteSkill(skill.id);
  };

  return (
    <div className="flex justify-center gap-x-3 text-black">
      <p className="text-xl w-[400px]">{skill.name}</p>
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

export default Skill;
