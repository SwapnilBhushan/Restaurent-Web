import React from "react";
import Chef from "../../assets/img/img1.jpeg";
const AboutUs = () => {
  return (
    <div className="w-full bg-background px-10 py-5 font-text flex items-center justify-between text-[#000]">
      <div className="w-1/2 flex flex-col items-start gap-2">
        <h4 className="text-[1.2vw] font-medium">About Us</h4>
        <h2 className="text-[1.8vw] font-bold">The story behind sunset ...</h2>
        <h6 className="text-[1.2vw] tracking-tight">
          Welcome to Sunset Café, where our journey began with Chef André's bold
          decision to depart from the world of haute cuisine and create a
          culinary sanctuary rooted in simplicity and heartfelt connection.
          <br />
          Inspired by a chance encounter with a charming café bathed in the warm
          glow of twilight, Chef André envisioned a place where genuine
          hospitality and exceptional flavors intertwine. At Sunset Café, each
          dish is a reflection of Chef André's dedication to crafting culinary
          experiences that nourish both body and soul.
        </h6>
        <div className="w-[27%] bg-[#E45417] flex items-center justify-center rounded-xl border-zinc-950 border-[1.2px] mt-5 ml-[5vw]">
          <button className="w-full py-2 font-semibold">Read More</button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-black rounded-full w-[22vw] h-[22vw] relative">
          <img
            src={Chef}
            className="w-full h-full bg-fit rounded-full  absolute hover:right-3 hover:bottom-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
