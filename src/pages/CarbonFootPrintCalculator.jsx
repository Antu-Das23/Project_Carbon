import React, { useState } from "react";
import { Leaf, ChevronRight } from "lucide-react";

export default function CarbonFootprintCalculator() {
  const [step, setStep] = useState("household"); // household, transportation, results
  const [email, setEmail] = useState("");
  const [emailName, setEmailName] = useState("");
  
  // Household State
  const [household, setHousehold] = useState({
    housingType: "detached",
    housingSize: "46-93",
    renewablePercent: "50-75",
    residents: "2",
    diet: "no_beef"
  });

  // Transportation State
  const [transportation, setTransportation] = useState({
    aboveGroundRail: "0",
    belowGroundRail: "0",
    bus: "0",
    useAutomobile: false,
    automobileDistance: "0",
    flightKm: "0"
  });

  const [results, setResults] = useState(null);

  // Calculate function
  const handleCalculate = () => {
    try {
      let totalCO2 = 0;
      let breakdown = {};

      // Housing factors
      const housingBase = {
        detached: { "46-93": 6.2, "93-139": 7.8, "139+": 9.5 },
        semiDetached: { "46-93": 4.1, "93-139": 5.2, "139+": 6.3 },
        terrace: { "46-93": 3.5, "93-139": 4.2, "139+": 5.1 },
        flat: { "46-93": 2.8, "93-139": 3.2, "139+": 3.8 }
      };

      const renewableFactor = {
        "0-25": 1.0,
        "25-50": 0.7,
        "50-75": 0.4,
        "75-100": 0.1
      };

      // Calculate housing
      const houseValue = housingBase[household.housingType]?.[household.housingSize] || 6.2;
      const renewValue = renewableFactor[household.renewablePercent] || 0.5;
      const houseCO2 = (houseValue * renewValue) / parseInt(household.residents);
      breakdown.housing = parseFloat(houseCO2.toFixed(2));
      totalCO2 += houseCO2;

      // Diet factors
      const dietFactor = {
        meat_lover: 1.3,
        average: 1.0,
        no_beef: 0.79,
        vegetarian: 0.66,
        vegan: 0.56
      };

      const dietCO2 = dietFactor[household.diet] || 1.0;
      breakdown.diet = parseFloat(dietCO2.toFixed(2));
      totalCO2 += dietCO2;

      // Transportation factors (per km)
      const transportFactors = {
        rail_intercity: 0.00014,
        rail_commuter: 0.00017,
        rail_transit: 0.00012,
        bus: 0.00006,
        car: 0.0089, // per km, petrol
        flight: 0.0001
      };

      // Calculate weekly transport * 52 weeks / 1000 to get metric tons
      if (parseFloat(transportation.aboveGroundRail) > 0) {
        const railCO2 = (parseFloat(transportation.aboveGroundRail) * 52 * transportFactors.rail_intercity) / 1000;
        breakdown.rail = parseFloat(railCO2.toFixed(2));
        totalCO2 += railCO2;
      }

      if (parseFloat(transportation.belowGroundRail) > 0) {
        const underCO2 = (parseFloat(transportation.belowGroundRail) * 52 * transportFactors.rail_transit) / 1000;
        breakdown.underground = parseFloat(underCO2.toFixed(2));
        totalCO2 += underCO2;
      }

      if (parseFloat(transportation.bus) > 0) {
        const busCO2 = (parseFloat(transportation.bus) * 52 * transportFactors.bus) / 1000;
        breakdown.bus = parseFloat(busCO2.toFixed(2));
        totalCO2 += busCO2;
      }

      if (transportation.useAutomobile && parseFloat(transportation.automobileDistance) > 0) {
        const autoCO2 = (parseFloat(transportation.automobileDistance) * 52 * transportFactors.car) / 1000;
        breakdown.automobile = parseFloat(autoCO2.toFixed(2));
        totalCO2 += autoCO2;
      }

      if (parseFloat(transportation.flightKm) > 0) {
        const flightCO2 = parseFloat(transportation.flightKm) * transportFactors.flight;
        breakdown.flight = parseFloat(flightCO2.toFixed(2));
        totalCO2 += flightCO2;
      }

      // Goods & Services
      breakdown.goods_services = 0.5;
      totalCO2 += 0.5;

      // Calculate hectares (2.75 metric tons per hectare per year)
      const hectares = (totalCO2 / 2.75).toFixed(2);

      setResults({
        totalCO2: parseFloat(totalCO2.toFixed(2)),
        breakdown,
        hectares
      });

      setStep("results");
    } catch (error) {
      console.error("Calculation error:", error);
      alert("Error calculating footprint. Please check your inputs.");
    }
  };

  const resetCalculator = () => {
    setStep("household");
    setHousehold({
      housingType: "detached",
      housingSize: "46-93",
      renewablePercent: "50-75",
      residents: "2",
      diet: "no_beef"
    });
    setTransportation({
      aboveGroundRail: "0",
      belowGroundRail: "0",
      bus: "0",
      useAutomobile: false,
      automobileDistance: "0",
      flightKm: "0"
    });
    setResults(null);
    setEmail("");
    setEmailName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/30 border-b border-emerald-500/20 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
        </div>
      </div>

      {/* Questionnaire Page */}
      {step === "household" && (
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-12 border-b border-emerald-500/30 pb-4">
            <button className="text-lg font-semibold text-emerald-400 border-b-2 border-emerald-400">
              Household
            </button>
            <button
              onClick={() => setStep("transportation")}
              className="text-lg font-semibold text-white/60 hover:text-white transition"
            >
              Transportation
            </button>
          </div>

          {/* Household Form */}
          <div className="space-y-6 mb-12">
            {/* Housing Type */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">I live in a(n):</label>
              <div className="relative w-72">
                <select
                  value={household.housingType}
                  onChange={(e) => setHousehold({ ...household, housingType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none appearance-none cursor-pointer text-right"
                >
                  <option value="detached">Detached single family home</option>
                  <option value="semiDetached">Semi-detached home</option>
                  <option value="terrace">Terrace house</option>
                  <option value="flat">Flat/Apartment</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 pointer-events-none" />
              </div>
            </div>

            {/* Housing Size */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">Size of housing:</label>
              <div className="relative w-72">
                <select
                  value={household.housingSize}
                  onChange={(e) => setHousehold({ ...household, housingSize: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none appearance-none cursor-pointer text-right"
                >
                  <option value="46-93">46-93 m²</option>
                  <option value="93-139">93-139 m²</option>
                  <option value="139+">139+ m²</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 pointer-events-none" />
              </div>
            </div>

            {/* Renewable Energy */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">How much of your electricity is from solar / wind / hydropower / nuclear?</label>
              <div className="relative w-72">
                <select
                  value={household.renewablePercent}
                  onChange={(e) => setHousehold({ ...household, renewablePercent: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none appearance-none cursor-pointer text-right"
                >
                  <option value="0-25">Most (50-99%)</option>
                  <option value="25-50">About half (25-50%)</option>
                  <option value="50-75">Some (10-25%)</option>
                  <option value="75-100">Very little (0-10%)</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 pointer-events-none" />
              </div>
            </div>

            {/* Number of Residents */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">Number of residents including myself:</label>
              <input
                type="number"
                min="1"
                value={household.residents}
                onChange={(e) => setHousehold({ ...household, residents: e.target.value })}
                className="w-72 px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none text-right"
              />
            </div>

            {/* Diet */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">My diet is mostly:</label>
              <div className="relative w-72">
                <select
                  value={household.diet}
                  onChange={(e) => setHousehold({ ...household, diet: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none appearance-none cursor-pointer text-right"
                >
                  <option value="meat_lover">Meat lover</option>
                  <option value="average">Average omnivore</option>
                  <option value="no_beef">No beef</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 pointer-events-none" />
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-8">
              <button
                onClick={() => setStep("transportation")}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition text-lg"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transportation Page */}
      {step === "transportation" && (
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-12 border-b border-emerald-500/30 pb-4">
            <button
              onClick={() => setStep("household")}
              className="text-lg font-semibold text-white/60 hover:text-white transition"
            >
              Household
            </button>
            <button className="text-lg font-semibold text-emerald-400 border-b-2 border-emerald-400">
              Transportation
            </button>
          </div>

          {/* Transportation Form */}
          <div className="space-y-6 mb-12">
            <p className="text-base text-white/80 mb-8">What is your average total weekly travel via:</p>

            {/* Above-ground Rail */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">Above-ground rail (km)</label>
              <input
                type="number"
                value={transportation.aboveGroundRail}
                onChange={(e) => setTransportation({ ...transportation, aboveGroundRail: e.target.value })}
                className="w-72 px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none text-right"
              />
            </div>

            {/* Below-ground Rail */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">Below-ground rail (km)</label>
              <input
                type="number"
                value={transportation.belowGroundRail}
                onChange={(e) => setTransportation({ ...transportation, belowGroundRail: e.target.value })}
                className="w-72 px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none text-right"
              />
            </div>

            {/* Bus */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">Bus (km)</label>
              <input
                type="number"
                value={transportation.bus}
                onChange={(e) => setTransportation({ ...transportation, bus: e.target.value })}
                className="w-72 px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none text-right"
              />
            </div>

            {/* Automobile */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">Do you use an automobile or motorbike?</label>
              <input
                type="checkbox"
                checked={transportation.useAutomobile}
                onChange={(e) => setTransportation({ ...transportation, useAutomobile: e.target.checked })}
                className="w-6 h-6 accent-emerald-400 cursor-pointer"
              />
            </div>

            {/* Automobile Distance (conditional) */}
            {transportation.useAutomobile && (
              <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
                <label className="text-base font-medium flex-1">Weekly automobile distance (km)</label>
                <input
                  type="number"
                  value={transportation.automobileDistance}
                  onChange={(e) => setTransportation({ ...transportation, automobileDistance: e.target.value })}
                  className="w-72 px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none text-right"
                />
              </div>
            )}

            {/* Flight */}
            <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-emerald-500/20">
              <label className="text-base font-medium flex-1">How far do you fly every year? (km)</label>
              <input
                type="number"
                value={transportation.flightKm}
                onChange={(e) => setTransportation({ ...transportation, flightKm: e.target.value })}
                className="w-72 px-4 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white focus:border-emerald-400 focus:outline-none text-right"
              />
            </div>

            {/* Buttons */}
            <div className="pt-8 flex gap-4">
              <button
                onClick={() => setStep("household")}
                className="px-8 py-4 border border-emerald-400/50 text-white font-bold rounded-lg hover:bg-emerald-500/10 transition text-lg"
              >
                BACK
              </button>
              <button
                onClick={handleCalculate}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition text-lg"
              >
                CALCULATE FOOTPRINT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Page */}
      {step === "results" && results && (
        <div
          className="relative min-h-screen bg-cover bg-center py-12"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80")',
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">YOUR CARBON IMPACT IS</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
                {results.totalCO2} METRIC TONS CO₂
              </h3>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left Side */}
              <div className="flex flex-col items-center justify-center">
                {/* Circle */}
                <div className="relative w-64 h-64 flex items-center justify-center mb-12">
                  <div className="absolute w-full h-full rounded-full border-8 border-emerald-500/30"></div>
                  <div className="absolute w-56 h-56 rounded-full border-4 border-emerald-400"></div>
                  <div className="text-center z-10">
                    <div className="text-4xl md:text-5xl font-bold text-emerald-400">{results.totalCO2}</div>
                    <div className="text-white/80 text-sm">METRIC TONS OF CO₂</div>
                  </div>
                </div>

                {/* Forest Box */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/10 border border-emerald-400/30 rounded-2xl p-8 w-full text-center">
                  <div className="text-6xl mb-4">🌳</div>
                  <p className="text-white/90 text-lg mb-4 font-semibold">
                    Protecting <span className="text-emerald-300 font-bold">{results.hectares} hectares</span> of tropical forest can neutralise that amount of carbon dioxide.
                  </p>
                  <p className="text-white/60 text-sm mb-6">
                    On average, a hectare of tropical forest stores carbon equaling to 550 metric tons of CO₂ in biomass. With annual tropical deforestation rates averaging 0.5%, this results in 2.75 metric tons of CO₂ emitted per hectare each year.
                  </p>
                  <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition mb-3">
                    DONATE TO OFFSET
                  </button>
                  <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm block">
                    Convert to different currency
                  </a>
                </div>
              </div>

              {/* Right Side - Breakdown */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-8">HOW DO YOU COMPARE?</h3>
                {Object.entries(results.breakdown).map(([category, value]) => {
                  const maxValue = Math.max(...Object.values(results.breakdown));
                  const percentage = (value / maxValue) * 100;

                  const icons = {
                    housing: "🏠",
                    diet: "🍽️",
                    rail: "🚂",
                    underground: "🚇",
                    bus: "🚌",
                    automobile: "🚗",
                    flight: "✈️",
                    goods_services: "🛍️",
                  };

                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{icons[category] || "📊"}</span>
                          <span className="font-semibold text-white/80 capitalize">
                            {category.replace(/_/g, " ")}
                          </span>
                        </div>
                        <span className="text-emerald-400 font-bold">{value} metric tons</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-400 to-green-500 h-full rounded-full"
                          style={{ width: `${Math.max(percentage, 5)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Email Section */}
            <div className="text-center mb-12">
              <p className="text-white/70 text-lg mb-6">
                Receive more tips and your personalised carbon footprint report by email
              </p>
              <div className="flex gap-3 max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="name"
                  value={emailName}
                  onChange={(e) => setEmailName(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-emerald-500/30 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                />
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-xl">
                  →
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4">Success! You will receive an email from us in the next 24 hours.</p>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <button
                onClick={resetCalculator}
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-emerald-500/50 transition text-lg"
              >
                Calculate Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}