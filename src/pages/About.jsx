import React from "react";
import { Leaf, Target, Users, Zap, Globe, Heart, TrendingUp, Award, CheckCircle, BarChart3, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      desc: "We believe that every small action counts. Together, our community can create a big positive impact on the planet.",
      color: "from-emerald-500/20 to-green-500/10",
      borderColor: "border-emerald-400/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      desc: "Our tools provide real-time insights into your daily habits, helping you identify areas to reduce emissions and save resources.",
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-400/30",
      iconColor: "text-blue-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      desc: "Greenify connects you with like-minded people who are passionate about sustainability and making the world greener.",
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-400/30",
      iconColor: "text-purple-400"
    }
  ];

  const features = [
    { icon: "📊", title: "Carbon Tracking", desc: "Real-time monitoring of your emissions" },
    { icon: "🎯", title: "Personalized Goals", desc: "Set and achieve sustainability targets" },
    { icon: "🏆", title: "Gamification", desc: "Earn badges and climb leaderboards" },
    { icon: "🌐", title: "Global Community", desc: "Connect with 50K+ eco-warriors" }
  ];

  const stats = [
    { icon: "👥", number: "50K+", label: "Active Users", gradient: "from-blue-500/20" },
    { icon: "🌍", number: "2.5M", label: "Tons CO₂ Reduced", gradient: "from-emerald-500/20" },
    { icon: "🌏", number: "180+", label: "Countries", gradient: "from-purple-500/20" }
  ];

  const team = [
    { emoji: "👩‍💼", name: "Sarah Chen", role: "Founder & CEO", desc: "10+ years in sustainability" },
    { emoji: "👨‍💻", name: "Michael Torres", role: "CTO", desc: "Tech & environmental advocate" },
    { emoji: "👩‍🤝‍👩", name: "Emma Garcia", role: "Community Lead", desc: "Global connections" },
    { emoji: "🎨", name: "James Liu", role: "Design Lead", desc: "Beautiful experiences" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full">
            <span className="text-emerald-300 text-sm font-semibold">📖 Our Story</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            About
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              Greenify
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Greenify is a platform designed to help individuals and organizations track, understand, and reduce their carbon footprint. Our mission is to empower people to make eco-friendly lifestyle changes through technology, gamification, and community support.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`p-8 bg-gradient-to-br ${stat.gradient} to-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition group`}>
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            These principles guide everything we do at Greenify
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className={`p-8 bg-gradient-to-br ${value.color} border ${value.borderColor} rounded-3xl hover:border-white/40 transition group cursor-pointer backdrop-blur-sm`}
            >
              <div className={`w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition ${value.iconColor}`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-400/30 rounded-3xl">
            <div className="inline-block p-3 bg-emerald-500/30 rounded-lg mb-6">
              <Target className="w-8 h-8 text-emerald-300" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              To democratize sustainability tracking and make it engaging, rewarding, and accessible for everyone. We believe that individual actions at scale can create real global impact on climate change.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white/80">Empower individuals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white/80">Drive real change</span>
              </div>
            </div>
          </div>

          <div className="p-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 rounded-3xl">
            <div className="inline-block p-3 bg-blue-500/30 rounded-lg mb-6">
              <Globe className="w-8 h-8 text-blue-300" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              A world where sustainability is not just a choice but a lifestyle. We envision Greenify as the global hub connecting billions of eco-warriors working together to build a greener, healthier planet for future generations.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-white/80">Global community</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-white/80">Lasting impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-white/60 text-lg">Comprehensive tools for sustainable living</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-400/50 transition group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-white/60 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-white/60 text-lg">Passionate individuals united by a common goal</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-emerald-400/50 transition text-center group cursor-pointer">
              <div className="text-6xl mb-4 group-hover:scale-110 transition">{member.emoji}</div>
              <h4 className="text-lg font-bold mb-1">{member.name}</h4>
              <p className="text-emerald-400 font-semibold text-sm mb-2">{member.role}</p>
              <p className="text-white/60 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="p-12 bg-gradient-to-r from-emerald-500/30 to-green-500/20 border border-emerald-400/30 rounded-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-emerald-300 mb-2">2.5M</p>
              <p className="text-white/80">Tons of CO₂ Reduced</p>
              <p className="text-white/50 text-sm mt-3">Since launch</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-amber-300 mb-2">50K+</p>
              <p className="text-white/80">Active Members</p>
              <p className="text-white/50 text-sm mt-3">Growing daily</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-pink-300 mb-2">180+</p>
              <p className="text-white/80">Countries</p>
              <p className="text-white/50 text-sm mt-3">Worldwide presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-white/70 mb-10 text-lg">
          Join thousands of eco-warriors reducing their carbon footprint
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition transform hover:scale-105 text-lg">
          Get Started Today
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-12 text-center text-white/60 text-sm">
        <p>© 2025 Greenify. Made with 🌱 for a better planet.</p>
      </footer>
    </div>
  );
}