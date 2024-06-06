import React from "react";
import Image1 from "../../assets/img/card1.jpeg";
const Cards = ({ image, title, desc }) => {
  return (
    <div className="w-[15vw] h-[56vh]  rounded-lg bg-white ">
      <div className="w-[15vw] h-[15vw]">
        <img src={image} className="w-full h-full rounded-t-lg" />
      </div>
      <div className="px-5 py-4 flex flex-col gap-2">
        <h4 className="text-[#D16E43] text-[15px] font-semibold font-mono  leading-none ">
          {title}
        </h4>
        <p className="text-sm leading-none text-normal tracking-tight">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Cards;
