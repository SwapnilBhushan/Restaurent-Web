import React, { useState } from "react";
import Bg from "../../assets/img/img9.jpeg";
import QuotesContainer from "./QuotesContainer";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Carousel } from "@material-tailwind/react";

const Quotes = () => {
  const [index, setIndex] = useState(1);
  const quotations = [
    {
      key: 1,
      quote:
        "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!",
    },
    {
      key: 2,
      quote:
        "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!",
    },
    {
      key: 3,
      quote:
        "I can't get enough of Sunset Cafe! The cozy ambiance and welcoming vibe make it feel like a home away from home. The scent of freshly brewed coffee is simply delightful, and the friendly faces add to the charm. Every bite of the food is pure bliss. This place is now my ultimate favorite!",
    },
    {
      key: 4,
      quote:
        "Sunset Cafe has stolen my heart! From the moment I walked in, I was enveloped in a warm and cozy atmosphere. The coffee’s rich aroma and the staff’s genuine friendliness make it a joy to visit. The food is just out of this world. It’s my new favorite hangout, hands down!",
    },
    {
      key: 5,
      quote:
        "Sunset Cafe is my new happy place! The atmosphere is so cozy and inviting, and the aroma of coffee is irresistible. The people there are so friendly, making every visit a delight. And the food? Simply scrumptious! I’m already looking forward to my next trip back.",
    },
  ];

  const handleNext = () => {
    setIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > quotations.length ? 1 : nextIndex;
    });
  };

  const handlePrev = () => {
    setIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 1 ? quotations.length : prevIndex;
    });
  };
  const currentQuote = quotations[index - 1];
  console.log(quotations.length, index);

  return (
    <div className="w-full bg-bg-quote h-[110vh] bg-center bg-cover bg-blend-overlay bg-custom-overlay pb-10">
      <div className="w-full flex items-center h-[65%] bg-black opacity-[60%] justify-center">
        {/* <div className="w-[10%] flex items-center justify-center">
          <button onClick={handlePrev}>
            <GrPrevious className="text-white text-[3vw]" />
          </button>
        </div> */}

        <div className="flex flex-col  w-[80%] items-center justify-center mb-10 gap-4">
          <h1 className="font-mono text-[3vw] font-bold text-white capitalize italic">
            motivation being our hard work
          </h1>
          <Carousel className="rounded-lg overflow-hidden" autoplay>
            {quotations.map((item, index) => {
              return (
                <div className="flex items-center justify-center gap-4">
                  <QuotesContainer
                    key={item.key}
                    quote={item.quote}
                    index={index}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>

        {/* <div className="w-[10%] flex items-center justify-center">
          <button onClick={handleNext}>
            <GrNext className="text-white text-[3vw]" />
          </button>
        </div> */}
      </div>
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
