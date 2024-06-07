import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#CDC4C4] flex flex-col items-center justify-between ">
      <div className="w-full flex items-start justify-end px-20 py-5 ">
        <div className="w-[25%] flex flex-col items-center justify-center gap-2">
          <h3 className="text-black font-bold text-[1.5vw]">Address</h3>
          <h6 className="w-[70%] text-[1.3vw]">
            Cafe Plot No. 45, Street No.14 Marol MIDC Industry Estate, Andheri
            East,Mumbai-400093
          </h6>
        </div>
        <div className="w-[25%] flex flex-col items-center justify-center gap-2">
          <h3 className="text-black font-bold text-[1.5vw]">Useful Links</h3>
          <ul className="text-[1.3vw] cursor-pointer">
            <li>
              <a>About Cafe</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </ul>
        </div>
        <div className="w-[25%] flex flex-col items-center justify-center gap-2">
          <h3 className="text-black font-bold text-[1.5vw]">Contact Us</h3>
          <ul className="text-[1.3vw] cursor-pointer">
            <li>
              <a>1809-908-5647</a>
            </li>
            <li>
              <a>Get in Touch</a>
            </li>
            <li>
              <a>Chat With Us</a>
            </li>
          </ul>
        </div>
        <div className="w-[25%] flex flex-col items-center justify-center gap-2">
          <h3 className="text-black font-bold text-[1.5vw]">Useful Links</h3>
          <ul className="text-[1.3vw] cursor-pointer">
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms of service</a>
            </li>
            <li>
              <a>payment issues</a>
            </li>
            <li>
              <a>Net Banking</a>
            </li>
            <li>
              <a>custum order</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-white text-[1.4vw] font-semibold bg-black">
        <h3 className="py-2">@2023 Railworld India. All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
