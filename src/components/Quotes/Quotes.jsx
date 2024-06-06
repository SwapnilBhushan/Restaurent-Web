import React from "react";
import Bg from "../../assets/img/img9.jpeg";
const Quotes = () => {
  return (
    <div className="w-full bg-bg-quote h-[110vh] bg-center bg-cover bg-blend-overlay bg-custom-overlay pb-10">
      <div className="w-full h-[65%] bg-black opacity-[60%]"></div>
      <div className="w-full flex flex-col items-start px-20 py-7 gap-5 mt-2">
        <div className="flex flex-col gap-3 w-[45%]">
          <h1 className="text-[3vw] text-white font-bold w-fit leading-none ">
            Subscribe To Newsletter <br />
            <span className="text-[#BBA6A6]"> and Get -20% off</span>
          </h1>
          <h3 className="text-[1.7vw] text-white">
            Your Gateway to Serenity, Culinary Delights, and Unforgettable
            Moments.
          </h3>
        </div>

        <div className="w-[60%] flex items-center justify-center h-[6vh]">
          <input
            type="email"
            className="w-[70%] h-full px-5 placeholder:text-black rounded-l-xl"
            placeholder="Enter Email Address"
          />
          <button className="w-[30%] h-full bg-[#BBA6A6] rounded-r-xl uppercase text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
