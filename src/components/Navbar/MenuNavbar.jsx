import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const MenuNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="w-full px-4 sm:px-6 lg:px-10 h-[10vh] flex items-center justify-between">
      <div className="w-[20%] sm:w-20">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="items-center justify-center hidden lg:flex gap-4 sm:gap-8 lg:gap-[5vw] ml-10">
        {["Home", "Menu", "Contact Us", "Blog"].map((item, index) => (
          <div
            key={index}
            className="text-[2vw] sm:text-[1.5vw] lg:text-[1.4vw] font-semibold text-white font-mono hover:scale-105 cursor-pointer"
          >
            <a href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>{item}</a>
          </div>
        ))}
      </div>

      <div className="flex items-center bg-white h-8 rounded-xl">
        <input
          type="text"
          className="h-full rounded-l-xl placeholder:text-black px-3"
          placeholder="Serach here"
        />
        <CiSearch className="w-8 text-black text-lg font-bold" />
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar}>
          <IoIosMenu className="text-3xl text-white" />
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex flex-col items-center justify-center lg:hidden">
          <button onClick={toggleSidebar} className="absolute top-9 right-4">
            <IoIosClose className="text-4xl text-white w-[50px] h-[50px]" />
          </button>
          <div className="flex flex-col gap-8">
            {["Home", "Menu", "Contact Us", "Blog", "Sign In", "Log In"].map(
              (item, index) => (
                <div
                  key={index}
                  className="text-2xl font-semibold text-white font-mono cursor-pointer"
                  onClick={toggleSidebar}
                >
                  <a href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                    {item}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuNavbar;
