import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUs from "./components/AboutUS/AboutUs";

function App() {
  return (
    <div className="w-full">
      <LandingPage />
      <AboutUs />
    </div>
  );
}

export default App;
