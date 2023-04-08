import React, { useEffect, useState } from "react";

const CVInfo = ({ userName, userRole, userPS }) => {
  const [name, setName] = useState([]);

  useEffect(() => {
    const split = userName.split(" ");

    setName(split);
  }, [userName]);

  return (
    <div className="flex flex-col gap-y-0.5 md:gap-y-1">
      <h2 className="text-xl md:text-4xl flex gap-x-2 uppercase">
        {name.map((part, index) =>
          index === 0 ? (
            <strong key={index}>{part}</strong>
          ) : (
            <p key={index}>{part}</p>
          )
        )}
      </h2>

      <p className="tracking-[4px] text-[8px] mt-[-2px] md:mt-0 md:text-base">
        {userRole}
      </p>

      <p className="text-[5.5px] min-[410px]:text-[6.5px] md:text-[10px]">
        {userPS}
      </p>
    </div>
  );
};

export default CVInfo;
