import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import AboutUs from "../../components/AboutUS/AboutUs";
import Offer from "../../components/Offer/Offer";
import Reservation from "../../components/Reservation/Reservation";
import Quotes from "../../components/Quotes/Quotes";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="w-full">
      <LandingPage />
      <AboutUs />
      <Offer />
      <Reservation />
      <Quotes />
      <Footer />
    </div>
  );
};

export default Home;
