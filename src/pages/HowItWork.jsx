import React from "react";
import { ClipboardList, BarChart3, Lightbulb, Leaf, ArrowRight, CheckCircle } from "lucide-react";

export default function HowItWork() {
  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12" />,
      title: "Answer a Quick Survey",
      desc: "Tell us about your lifestyle – transportation, diet, shopping, and energy use.",
      color: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-400/30"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Get Your Carbon Score",
      desc: "We calculate your estimated CO₂ emissions based on your inputs.",
      color: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-400/30"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "See Eco-Friendly Suggestions",
      desc: "Receive personalized tips to reduce your footprint and live sustainably.",
      color: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-400",
      borderColor: "border-amber-400/30"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Track Your Progress",
      desc: "Monitor your daily, weekly, and monthly carbon savings in a visual dashboard.",
      color: "from-emerald-500/20 to-green-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-400/30"
    },
  ];

  const benefits = [
    { icon: "📊", title: "Real-time Analytics", desc: "Track emissions with detailed insights" },
    { icon: "🎯", title: "Personalized Goals", desc: "Custom targets based on your lifestyle" },
    { icon: "🏆", title: "Achievements", desc: "Unlock badges and milestones" },
    { icon: "👥", title: "Community", desc: "Connect with eco-warriors worldwide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-20 px-6">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full">
            <span className="text-emerald-300 text-sm font-semibold">⚙️ How It Works</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Journey to
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              Carbon Neutrality
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-2">
            Greenify helps you calculate your carbon footprint and gives you simple, actionable steps to reduce emissions for a healthier planet.
          </p>
          <p className="text-white/50 max-w-2xl mx-auto">
            Just 4 easy steps to start your sustainable lifestyle transformation
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className={`p-8 bg-gradient-to-br ${step.color} border ${step.borderColor} rounded-3xl hover:border-white/40 transition backdrop-blur-sm`}>
                <div className="flex gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} border ${step.borderColor} flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-white/40">0{i + 1}</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex items-center">
                      <ArrowRight className="w-6 h-6 text-white/30 group-hover:translate-x-2 transition" />
                    </div>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="h-8 flex justify-center">
                  <div className="w-1 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Greenify?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-400/50 transition group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{benefit.icon}</div>
              <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-white/60 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-16">Quick Process Overview</h2>
        
        <div className="p-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/20 border border-emerald-400/50 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-300">{i + 1}</span>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-2">Step {i + 1}</h4>
                <p className="text-white/60 text-sm">{step.title.replace(/^\d+\.\s/, "")}</p>
                
                {i < steps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-emerald-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="p-10 bg-gradient-to-r from-emerald-500/30 to-green-500/20 border border-emerald-400/30 rounded-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What You'll Get</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Accurate carbon footprint calculation",
              "Personalized reduction recommendations",
              "Real-time progress tracking dashboard",
              "Community challenges and leaderboards",
              "Eco-friendly tips and resources",
              "Monthly impact reports"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-white/90 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-white/70 mb-10 text-lg">
          Join thousands of users already tracking and reducing their carbon footprint
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition transform hover:scale-105 text-lg">
          Start Your Journey Today
        </button>
      </section>
    </div>
  );
}