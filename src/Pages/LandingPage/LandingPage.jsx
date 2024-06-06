import React from "react";
import Bg from "../../assets/img/bg.jpeg";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import Image1 from "../../assets/img/card1.jpeg";
import Image2 from "../../assets/img/card2.jpeg";
import Image3 from "../../assets/img/card3.jpeg";
import Image4 from "../../assets/img/card4.jpeg";
import Image5 from "../../assets/img/card5.jpeg";
import CarouselContainer from "../../components/Carousel/CarouselContainer";

const LandingPage = () => {
  const data = [
    {
      key: 1,
      title: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
      image: Image1,
      desc: "Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.",
    },
    {
      key: 2,
      title: "Sizzling Tandoori Platter: A Feast for the Senses",
      image: Image2,
      desc: "Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney",
    },
    {
      key: 3,
      title: "Mango Curry Chicken",
      image: Image3,
      desc: "Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
    },
    {
      key: 4,
      title: "Vegan Caesar Salad",
      image: Image4,
      desc: "Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
    },
    {
      key: 5,
      title: "Espresso Chocolate Cheesecake",
      image: Image5,
      desc: "This is the vegan version of a salad that is known for its anchovies and egg yolks. As a vegan version of Caesar Salad, this on does not have anchovies and egg yolks in it. That recipe is also for a popular salad (Waldorf) using healthier ingredients.",
    },
  ];
  return (
    <div
      className="w-full bg-bg-home bg-center bg-cover bg-blend-overlay bg-custom-overlay pb-10"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Navbar />
      <div className="mt-40 px-10 flex">
        <div className="text-container w-[45%] flex flex-col items-center">
          <div className="flex flex-col gap-5 items-start">
            <h2 className="text-[2.1vw] font-mono uppercase font-bold pl-10 text-[#D16E43] leading-none tracking-tight">
              Welcome
            </h2>
            <h3 className="text-[1.9vw] font-bold text-white font-mono leading-none">
              Discover Culinary Elegance at Café Sunset: Where Every Sip and
              Bite Unveils a Symphony of Flavors and Moments.
            </h3>
          </div>
          <div className="flex flex-col mt-[3vw] gap-6 items-start">
            <h2 className="w-[80%] text-[1.6vw] font-mono uppercase font-bold pl-5 text-[#D16E43] leading-[1.7vw]">
              Gateway to Serenity, Culinary Delights,
            </h2>
            <h3 className="w-[80%] text-[1.5vw] font-semibold text-white font-mono leading-none">
              Step into a World Where Ambiance, Flavor, and Warmth Converge—A
              Haven Where Every Visit Feels Like Coming Home.
            </h3>
          </div>
          <div className="mt-[4vw] w-1/3 flex items-center justify-center ">
            <div className="border border-white px-10 py-2 text-white font-semibold ">
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className="w-[55%] px-10 flex items-center justify-center gap-3">
          <CarouselContainer data={data} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
