import React from "react";
import Image from "../../assets/img/img8.jpeg";
const Reservation = () => {
  return (
    <div className="w-full bg-[#0F172B] flex justify-center px-10 py-10 gap-4">
      <div className="w-[45%]">
        <img
          src={Image}
          alt="img"
          className="w-fit h-[35vw] bg-auto bg-center"
        />
      </div>
      <div className="w-[55%] flex flex-col items-start px-5 py-4">
        <div>
          <h1 className="text-[2vw] font-bold text-[#FFAB08]">Reservation</h1>
          <h1 className="text-[2vw] font-bold text-[#fff]">
            BOOK A TABLE ONLINE
          </h1>
        </div>
        <div className="w-full flex flex-col gap-5 mt-4">
          <div className="w-full flex items-center justify-between gap-2 ">
            <input
              className="w-1/2 h-[3vw] px-2 border-none placeholder:text-black"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="w-1/2 h-[3vw] px-2 placeholder:text-black"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="w-full flex items-center justify-between gap-2">
            <input
              className="w-1/2 h-[3vw] px-2 border-none placeholder:text-black"
              type="text"
              placeholder="Date and Time"
              required
            />
            <input
              className="w-1/2 h-[3vw] px-2 placeholder:text-black"
              type="number"
              placeholder="No of People"
              required
              min="1"
            />
          </div>
          <div className="w-full flex items-center justify-between gap-2">
            <textarea
              className="w-full h-[10vw] px-2 py-2 placeholder:text-black"
              placeholder="Special Request"
            />
          </div>
          <div className="w-full flex items-center justify-between gap-2 mt-4">
            <button className="w-full bg-[#FFAB08] py-[1vw] text-[1.3vw] font-semibold text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
