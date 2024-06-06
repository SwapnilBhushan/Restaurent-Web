import React from "react";

const OfferCard = ({ amount, onOrder, code, image }) => {
  return (
    <div className="w-[45%] bg-[#E4FFFDBF]  rounded-xl px-10 py-7 flex items-center justify-between">
      <div className="flex flex-col justify-center">
        <h3 className="text-[1.3vw] text-[#000] font-lg">Flat</h3>
        <div className="flex flex-col mt-1">
          <h1 className="text-[4vw] font-bold text-[#1A7E11] leading-none tracking-tight -mb-2">
            ₹{amount}
          </h1>
          <h1 className="text-[4vw] font-bold text-[#1A7E11] leading-none tracking-tight">
            OFF
          </h1>
        </div>
        <h3 className="mt-1 text-[1.3vw] font-semibold">
          ON ORDER ABOVE {onOrder}
        </h3>
        <div className="w-fit mt-2 bg-[#BFFFFB] px-4 py-2 border border-[#000] rounded-xl">
          <h2 className="text-[1.3vw] text-[#00000054]">
            Use Code <span className="text-[#000] font-semibold">{code}</span>{" "}
          </h2>
        </div>
      </div>
      <div className="w-[15vw] h-[15vw]">
        <img src={image} className="w-full h-full bg-cover" />
      </div>
    </div>
  );
};

export default OfferCard;
/* Frame 10 */

/* Auto layout */
