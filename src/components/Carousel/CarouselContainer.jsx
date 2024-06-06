import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Cards from "../Cards/Cards";
const CarouselContainer = ({ data }) => {
  return (
    <Carousel className="rounded-lg" autoplay loop>
      {data.map((item, index) => {
        const item1 = data[index + 1 === data.length ? 0 : index + 1];
        const item2 = data[index >= data.length - 2 ? 1 : index + 2];
        return (
          <div className="flex gap-2">
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
            <Cards
              key={index + 1}
              image={item1.image}
              title={item1.title}
              desc={item1.desc}
            />
            <Cards
              key={index + 2}
              image={item2.image}
              title={item2.title}
              desc={item2.desc}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselContainer;
