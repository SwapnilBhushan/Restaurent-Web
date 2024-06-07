import React from "react";

const MenuCard = ({ name, image }) => {
  return (
    <div className="w-[25vw] h-[25vw] flex items-center justify-center flex-col gap-4">
      <div className="rounded-full w-[20vw] h-[20vw] bg-red-400 ">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <h3 className="text-[1.6vw] font-semibold text-white uppercase">
        {name}
      </h3>
    </div>
  );
};

export default MenuCard;
