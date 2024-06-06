import React from "react";
import Image1 from "../../assets/img/card1.jpeg";
const Cards = ({ image, title, desc }) => {
  return (
    <div className="w-1/3 min-h-[34vw] rounded-lg bg-white shadow-lg">
      <div className="w-full h-[15vw]">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-t-lg object-cover"
        />
      </div>
      <div className="px-5 py-4 flex flex-col gap-2">
        <h4 className="text-[#D16E43] text-[1.2vw] font-semibold font-mono leading-none">
          {title}
        </h4>
        <p className="text-[1vw] leading-tight text-gray-700 tracking-tight">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Cards;
