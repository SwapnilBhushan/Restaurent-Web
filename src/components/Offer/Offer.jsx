import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image1 from "../../assets/img/img6.png";
import Image2 from "../../assets/img/img7.png";
import Image3 from "../../assets/img/card1.jpeg";
import Image4 from "../../assets/img/card2.jpeg";
import OfferCard from "./OfferCard";
const Offer = () => {
  const offerData = [
    {
      id: 1,
      amount: "100",
      onOrder: "399",
      code: "RTH10",
      image: Image1,
    },
    {
      id: 2,
      amount: "75",
      onOrder: "299",
      code: "RTH75",
      image: Image2,
    },
    {
      id: 3,
      amount: "150",
      onOrder: "499",
      code: "RTH15",
      image: Image3,
    },
    {
      id: 4,
      amount: "250",
      onOrder: "699",
      code: "RTH25",
      image: Image4,
    },
  ];
  return (
    <div className="w-full bg-[#B8A3BA] flex flex-col gap-10 px-10 py-7 ">
      <div className="w-[20%] text-[#000] text-[1.5vw] leading-none tracking-tight">
        <h3>DEALS AND OFFERS</h3>
      </div>
      <div className="flex items-center justify-between px-20">
        <Carousel className="rounded-lg" autoplay>
          {offerData.map((item, index) => {
            const item1 =
              offerData[index + 1 === offerData.length ? 0 : index + 1];

            return (
              <div className="flex items-center justify-center gap-4">
                <OfferCard
                  amount={item.amount}
                  onOrder={item.onOrder}
                  code={item.code}
                  image={item.image}
                />
                <OfferCard
                  amount={item1.amount}
                  onOrder={item1.onOrder}
                  code={item1.code}
                  image={item1.image}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Offer;
