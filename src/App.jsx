import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";

function App() {
  const NotFound = () => {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white font-mono">
          404 Not Found
        </h1>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
