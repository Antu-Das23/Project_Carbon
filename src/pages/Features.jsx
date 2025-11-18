import React, { useState, useEffect } from 'react';
import { Activity, Zap, TrendingDown, BarChart3, Users, Leaf, ArrowRight, CheckCircle, Gauge, Target, Rocket, Cloud, Map, MessageSquare, Share2, Layers, Database, Hexagon, Lightbulb, Sparkles, Flame, Lock, Settings, Smartphone, FileText } from 'lucide-react';

export default function CarbonTrackerFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      id: 'tracking',
      title: 'Core Tracking & Calculation',
      icon: Activity,
      color: 'from-blue-600 to-cyan-500',
      items: [
        {
          icon: Map,
          title: 'Data Input',
          desc: 'Track energy usage, transportation, and waste activities',
          features: ['Electricity & gas monitoring', 'Car, public transit, flights', 'Recycling & composting logs', 'Real-time activity input']
        },
        {
          icon: Gauge,
          title: 'Emission Calculation',
          desc: 'Automatic calculation with updated emissions factors',
          features: ['Scope 1, 2 & 3 emissions', 'Updated factors', 'Supply chain tracking', 'Real-time calculations']
        },
        {
          icon: TrendingDown,
          title: 'Progress Tracking',
          desc: 'Monitor emissions and progress over time',
          features: ['Monthly tracking', 'Annual reports', 'Trend analysis', 'Report generation']
        }
      ]
    },
    {
      id: 'analysis',
      title: 'Analysis & Reporting',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-500',
      items: [
        {
          icon: BarChart3,
          title: 'Data Visualization',
          desc: 'Beautiful dashboards showing emission trends',
          features: ['High-level overview', 'Interactive dashboards', 'Custom charts', 'Real-time insights']
        },
        {
          icon: Users,
          title: 'Benchmarking',
          desc: 'Compare your footprint with others',
          features: ['Peer comparison', 'Regional averages', 'Sector benchmarks', 'Global standards']
        },
        {
          icon: FileText,
          title: 'Audit Reports',
          desc: 'Generate compliance-ready reports',
          features: ['CSR reporting', 'Regulatory formats', 'Third-party verification', 'Detailed breakdowns']
        }
      ]
    },
    {
      id: 'action',
      title: 'Action & Goal Setting',
      icon: Target,
      color: 'from-green-600 to-emerald-500',
      items: [
        {
          icon: Lightbulb,
          title: 'Personalized Tips',
          desc: 'AI-powered suggestions for your habits',
          features: ['Habit analysis', 'Smart recommendations', 'Impact estimation', 'Easy wins']
        },
        {
          icon: Rocket,
          title: 'Goal Setting',
          desc: 'Set and track reduction targets',
          features: ['Custom targets', 'Milestone tracking', 'Progress alerts', 'Achievement badges']
        },
        {
          icon: Leaf,
          title: 'Carbon Offsetting',
          desc: 'Invest in sustainability projects',
          features: ['Verified projects', 'Direct investment', 'Impact tracking', 'Certificates']
        }
      ]
    },
    {
      id: 'other',
      title: 'Additional Features',
      icon: Settings,
      color: 'from-orange-600 to-red-500',
      items: [
        {
          icon: Lock,
          title: 'Profiles & Security',
          desc: 'Manage data and privacy settings',
          features: ['User profiles', 'Privacy controls', 'Data encryption', 'Account management']
        },
        {
          icon: Smartphone,
          title: 'Integrations',
          desc: 'Connect with other software',
          features: ['Accounting software', 'Mobile apps', 'API access', 'Auto data collection']
        },
        {
          icon: Users,
          title: 'Team & Enterprise',
          desc: 'Collaborate at scale',
          features: ['User permissions', 'Large data support', 'Team analytics', 'Enterprise features']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-yellow-400 via-pink-500 via-cyan-400 to-emerald-400 z-50"
        style={{ width: `${scrollProgress}%`, boxShadow: '0 0 20px currentColor' }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Header */}
      <section className="relative px-8 py-32 max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 border border-yellow-300/40 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
            <span className="text-sm font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">COMPREHENSIVE FEATURES</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-tight">
            Track Your<br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Carbon Impact</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete platform for measuring, analyzing, and reducing your carbon footprint with precision and ease
          </p>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="relative px-8 py-16 max-w-7xl mx-auto">
        <div className="flex gap-4 mb-16 overflow-x-auto pb-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`group relative px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  activeTab === idx
                    ? `bg-gradient-to-r ${feat.color} text-white shadow-2xl`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {feat.title}
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="space-y-8">
          {features[activeTab].items.map((item, idx) => {
            const Icon = item.icon;
            const currentFeature = features[activeTab];
            return (
              <div key={idx} className="group relative overflow-hidden rounded-3xl">
                {/* Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${currentFeature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10`} />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/20 group-hover:border-white/50 transition-all duration-500">
                  <div className="flex gap-8">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentFeature.color} flex items-center justify-center flex-shrink-0 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{item.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed text-lg">{item.desc}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        {item.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${currentFeature.color} flex items-center justify-center flex-shrink-0`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-300 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-8 py-24 border-t border-white/10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '95%', label: 'Accuracy', color: 'from-blue-500 to-cyan-500' },
            { number: '24/7', label: 'Tracking', color: 'from-purple-500 to-pink-500' },
            { number: '50k+', label: 'Active Users', color: 'from-green-500 to-emerald-500' },
            { number: '195+', label: 'Countries', color: 'from-orange-500 to-red-500' }
          ].map((stat, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500 -z-10`} />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center hover:border-white/40 transition-all duration-300">
                <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.number}</div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-8 py-32 border-t border-white/10 max-w-7xl mx-auto">
        <div className="relative rounded-4xl overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative bg-black/50 backdrop-blur-2xl border-2 border-white/20 rounded-4xl p-20 text-center space-y-8">
            <h2 className="text-6xl font-black leading-tight">
              Start Your<br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">Carbon Journey</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands making a measurable difference. Track, analyze, and reduce your environmental impact today.
            </p>

            <button className="group px-10 py-5 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 text-black rounded-xl font-bold text-lg hover:shadow-3xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-110 inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-gray-400 text-sm">✓ No credit card • ✓ 30-day free trial • ✓ Full access</p>
          </div>
        </div>
      </section>
    </div>
  );
}