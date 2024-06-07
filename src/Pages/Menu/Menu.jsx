import React from "react";
import Banner from "../../assets/img/banner.png";
import MenuNavbar from "../../components/Navbar/MenuNavbar";
import MenuCard from "../../components/MenuCard/MenuCard";
import img1 from "../../assets/img/menu1.jpeg";
import img2 from "../../assets/img/menu2.jpeg";
import img3 from "../../assets/img/menu3.jpeg";
import img4 from "../../assets/img/menu4.jpeg";
import img5 from "../../assets/img/menu5.jpeg";
import img6 from "../../assets/img/menu6.jpeg";
import img7 from "../../assets/img/menu7.jpeg";
import img8 from "../../assets/img/menu8.jpeg";
import img9 from "../../assets/img/menu9.jpeg";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
  const menuItems = [
    {
      key: 1,
      name: "BURGER & SANDWICHES",
      image: img1,
    },
    {
      key: 2,
      name: "CHINESE CUSINE",
      image: img2,
    },
    {
      key: 3,
      name: "STARTERS",
      image: img3,
    },
    {
      key: 4,
      name: "SIDES",
      image: img4,
    },
    {
      key: 5,
      name: "Salads",
      image: img5,
    },
    {
      key: 6,
      name: "Desert/Icecream",
      image: img6,
    },
    {
      key: 7,
      name: "Main Course",
      image: img7,
    },
    {
      key: 8,
      name: "value Combo",
      image: img8,
    },
    {
      key: 9,
      name: "Beverages",
      image: img9,
    },
  ];
  return (
    <div className="w-full bg-[#252323]">
      <MenuNavbar />
      <div className="w-full h-[60vh]">
        <img src={Banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      <div className="w-full flex items-center justify-between py-5">
        <div className="border w-full" />
        <div className="w-[75%] flex items-center justify-center">
          <h1 className="text-[2vw] font-bold font-mono py-2 text-white ">
            WHAT’S ON YOUR MIND?
          </h1>
        </div>
        <div className="border w-full" />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20 pb-10">
        {menuItems.map((item, index) => (
          <MenuCard key={index} name={item.name} image={item.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
