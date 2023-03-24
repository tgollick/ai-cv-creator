import React, { useEffect, useState } from "react";

const CVInfo = ({ userName, userRole, userPS }) => {
  const [name, setName] = useState([]);

  useEffect(() => {
    const split = userName.split(" ");

    setName(split);
  }, [userName]);

  return (
    <div className="flex flex-col gap-y-1">
      <h2 className="text-4xl flex gap-x-2">
        {name.map((part, index) =>
          index === 0 ? <strong>{part}</strong> : <p>{part}</p>
        )}
      </h2>

      <p className="tracking-[4px]">{userRole}</p>

      <p className="text-xs">{userPS}</p>
    </div>
  );
};

export default CVInfo;
