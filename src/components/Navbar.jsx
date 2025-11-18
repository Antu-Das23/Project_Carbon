import React from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/10 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Greenify</span>
        </Link>

        {/* Middle - Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-white/80 hover:text-white font-medium transition">
            Home
          </Link>
          <Link to="/CarbonFootPrintCalculator" className="text-white/80 hover:text-white font-medium transition">
            Carbon FootPrint Calculator
          </Link>
          
          <Link to="/about" className="text-white/80 hover:text-white font-medium transition">
            About
          </Link>
          <Link to="/features" className="text-white/80 hover:text-white font-medium transition">
            Features
          </Link>
          {/* ✅ Use <a> instead of <Link> for scrolling */}
          <Link to ="/how-it-work" className="text-white/80 hover:text-white font-medium transition">
            How it Work
          </Link>
          <Link to="/contact" className="text-white/80 hover:text-white font-medium transition">
            Contact
          </Link>
        </div>

        {/* Right - Auth Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition shadow"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-green-500 text-white hover:from-emerald-500 hover:to-green-600 transition shadow"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
