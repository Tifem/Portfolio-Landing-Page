import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About"
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";


const App = () => {
  return (
    <ThemeContext>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />{" "}
        </Routes>
        <Footer />
      </div>
    </ThemeContext>
  );
};

export default App;
