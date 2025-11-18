// src/pages/Register.jsx
import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sophia Lee",
      role: "Eco Blogger",
      quote: "Creating an account with Greenify was so simple. I love how it motivates me to stay eco-friendly!",
      avatar: "🌿",
    },
    {
      name: "David Wilson",
      role: "Entrepreneur",
      quote: "Registering was quick, and the platform instantly started giving me actionable insights.",
      avatar: "🌎",
    },
    {
      name: "Maria Lopez",
      role: "Student",
      quote: "Joining Greenify made me feel part of a community that truly cares about our planet.",
      avatar: "🌸",
    },
  ];

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await signup(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">

          {/* Left Panel - Register Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Greenify</span>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-white/70">Join us and start tracking your carbon footprint today</p>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Name */}
            <div className="mb-6">
              <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-8">
              <label className="block text-white/80 text-sm font-medium mb-2">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Confirm your password"
              />
            </div>

            {/* Signup Button */}
            <div className="flex flex-col gap-4">
              <button
                onClick={handleSignup}
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-500 hover:to-green-600 transition-all shadow-lg"
              >
                {loading ? "Creating Account..." : "Signup"}
              </button>

              <button
                onClick={() => navigate("/login")}
                className="w-full bg-white/20 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/30 transition-all shadow-lg"
              >
                Already have an account? Login
              </button>
            </div>
          </div>

          {/* Right Panel - Testimonials */}
          <div className="lg:w-1/2 bg-gradient-to-br from-black/40 to-black/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Why Join</h2>
                <h2 className="text-3xl font-bold text-white mb-8">Our Community?</h2>

                <div className="mb-8">
                  <div className="text-6xl text-emerald-400 mb-4">"</div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {testimonials[currentTestimonial].quote}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-xl">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-white/70 text-sm">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center"
                  >
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-emerald-500/80 hover:bg-emerald-500 rounded-xl flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
