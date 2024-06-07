import React from "react";
import Comma from "../../assets/img/quote.png";
import { motion } from "framer-motion";
const QuotesContainer = ({ quote }) => {
  console.log(quote, ">>>>>>>>>>>>>>>>>>>>>>>>");
  return (
    <div className="w-[80%] bg-[#71717a] rounded-md px-20 py-7">
      <p className="text-[2.5vw] font-mono text-white leading-none">{quote}</p>
    </div>
  );
};

export default QuotesContainer;
