import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUs from "./components/AboutUS/AboutUs";
import Offer from "./components/Offer/Offer";
import Reservation from "./components/Reservation/Reservation";
import Quotes from "./components/Quotes/Quotes";

function App() {
  return (
    <div className="w-full">
      <LandingPage />
      <AboutUs />
      <Offer />
      <Reservation />
      <Quotes />
    </div>
  );
}

export default App;
