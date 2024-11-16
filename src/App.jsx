import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";


const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />\{" "}
        </Routes>
    </div>
  );
};

export default App;
