import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, ChevronDown, X } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  // --- Users State & Functions ---
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add new user
  const addUser = async () => {
    if (!name || !email) return alert("Enter name and email");
    try {
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };
  // --- End Users Section ---

  const stats = [
    { number: "50K+", label: "Active Users", icon: "👥" },
    { number: "2.5M", label: "Tons CO₂ Reduced", icon: "🌍" },
    { number: "180+", label: "Countries", icon: "🌏" }
  ];

  const handleGetStarted = () => {
    navigate("/Login"); // Change "/auth" to your actual login/register page route
  };

  const handleWatchDemo = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 text-center min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full animate-pulse self-center">
          <span className="text-emerald-300 text-sm font-semibold">🌱 Join the Green Revolution</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            Carbon Footprint
          </span>
        </h1>

        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Track emissions, reduce impact, and join 50K+ eco-warriors making a real difference. Every action counts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button 
            onClick={handleGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-emerald-500/50 hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <button 
            onClick={handleWatchDemo}
            className="px-8 py-4 border-2 border-emerald-400/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 transition flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 bg-white/5 border border-emerald-500/20 rounded-xl backdrop-blur hover:bg-white/10 transition group cursor-pointer">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Users Section Added */}
        <div className="bg-white/10 border border-emerald-400/30 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Users List</h2>
          <ul className="mb-4 text-slate-200">
            {users.map((user) => (
              <li key={user.id}>
                {user.id} - {user.name} - {user.email}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Add User</h3>
          <input
            className="border p-1 mr-2 mb-2 rounded text-slate-900"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-1 mr-2 mb-2 rounded text-slate-900"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            onClick={addUser}
          >
            Add User
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative w-full bg-black aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xOftAPQoRoU?autoplay=1"
                title="Carbon Footprint Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800">
              <h3 className="text-2xl font-bold text-white mb-2">How to Track Your Carbon Footprint</h3>
              <p className="text-white/70">Learn how our platform helps you monitor and reduce your environmental impact in just a few minutes.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
