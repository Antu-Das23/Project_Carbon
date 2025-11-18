// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Footer from "./components/Footer";
import HowItWork from "./pages/HowItWork";
import Features from "./pages/Features";
import CarbonFootPrintCalculator from "./pages/CarbonFootPrintCalculator";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Navbar always visible */}
      <Navbar />

      {/* Pages */}
      <div className="pt-20"> {/* padding to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Features" element={<Features/>} />
          <Route path="/CarbonFootPrintCalculator" element={<CarbonFootPrintCalculator/>} />
      
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
