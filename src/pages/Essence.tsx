import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Zap, Shield, Globe, TrendingUp, Handshake, Eye } from "lucide-react"; 
// Assuming the image path is correct, use the imported variable
import assn from "@/assets/assense.png"; 
import { Link } from "react-router-dom";

// --- Define Professional Gold & Dark Classes ---
const ACCENT_GOLD = "text-yellow-400";
const ACCENT_GOLD_BG = "bg-yellow-400 text-black";
const DARK_BG = "bg-gray-900"; // Deep dark background for formal look

const Essence = () => {
  // --- Core Values Data (Unchanged) ---
  const coreValues = [
    { 
      icon: Zap, 
      title: "Speed & Agility", 
      description: "We guarantee company formation in 48 hours, operating with unmatched efficiency to accelerate your market entry." 
    },
    { 
      icon: Shield, 
      title: "Integrity & Trust", 
      description: "We ensure 100% ownership and legal compliance, building a foundation of absolute trust and transparency in all expansions." 
    },
    { 
      icon: Globe, 
      title: "Global Vision", 
      description: "Our focus is strictly international, providing specialized expertise to transition Indian startups into globally recognized brands." 
    },
    { 
      icon: TrendingUp, 
      title: "Zero-Risk Growth", 
      description: "Leveraging 0% income tax advantages and expert strategic support to ensure profitable and sustainable international scaling." 
    },
  ];

  // --- Mission/Vision Data (Icons added for visual appeal) ---
  const essenceContent = [
    {
      icon: Handshake,
      title: "Our Mission: The Pivotal Partner",
      text: "To be the pivotal partner for ambitious Indian startups, dismantling barriers to global markets and establishing their international presence with speed, security, and unparalleled tax efficiency.",
    },
    {
      icon: Eye,
      title: "Our Vision: The Global Perception Shift",
      text: "To enable the next generation of Indian entrepreneurs to build internationally recognized, multi-million dollar brands, fundamentally shifting the global perception of Indian innovation.",
    },
  ];

  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        {/* ==================================================
          FORMAL HERO SECTION 
          ==================================================
        */}
        <section className={`py-32 ${DARK_BG} text-white rounded-lg overflow-hidden`}>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center"> {/* Increased gap-12 to gap-16 */}
            
            {/* Left Column - Text and Heading */}
            <div className="text-left"> {/* Added text-left for explicit justification */}
              <p className={`text-lg font-semibold uppercase tracking-widest mb-4 ${ACCENT_GOLD}`}> {/* Increased mb-2 to mb-4 */}
                Scope & Purpose
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"> {/* Increased mb-4 to mb-6 */}
                The <span className={ACCENT_GOLD}>Essence</span> of ExpandME
              </h1>
              
              <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300"> {/* Increased mb-6 to mb-8 */}
                ExpandME is your **fast-track gateway to global markets**, dedicated to 
                turning Indian innovation into internationally recognized brands.
              </h2>
              
              <p className="text-base max-w-lg text-gray-400 mb-8"> {/* Added mb-8 for separation from button */}
                We provide complete end-to-end support for global expansion—including setting up companies 
                with **100% ownership**, enjoying **0% income tax advantages**, and ensuring fast company 
                formation within just **48 hours**. Our expert assistance covers legal, strategic, 
                and operational areas, enabling entrepreneurs to confidently enter new markets.
              </p>

              <Button className={`mt-4 ${ACCENT_GOLD_BG} hover:bg-yellow-500`}> {/* Adjusted mt-8 to mt-4 (moved space to p tag) */}
                  <Link to="/blueprint">Explore Our Blueprint</Link>
              </Button>
            </div>
            
            {/* Right Column - Illustration (Now using the imported 'assn' image) */}
            <div className="hidden md:flex justify-center items-center">
              <img 
                  src={assn} 
                  alt="ExpandME core promises: 100% Ownership, 0% income Tax, 48-Hour Company Setup, India to UAE Global Expansion Accelerated" 
                  className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* --- */}
      
      {/* Mission and Vision Section (Increased Vertical Spacing: py-24) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"> {/* Increased mb-12 to mb-16 */}
            Our Foundation: Mission & <span className={ACCENT_GOLD}>Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10"> {/* Increased gap-8 to gap-10 */}
            {essenceContent.map((item, index) => (
              <Card
                key={index}
                className="p-10 shadow-2xl transition-all duration-300 border-t-4 border-yellow-400 hover:shadow-yellow-300/30 text-left" // Added text-left
              >
                <item.icon className={`h-8 w-8 mb-4 ${ACCENT_GOLD}`} />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Core Values Section (Increased Vertical Spacing: py-24) */}
      <section className={`py-24 ${DARK_BG}/95`}>
        <div className="container mx-auto px-4">
          {/* *** ROBUST CENTERING FIX APPLIED HERE: Using flex and justify-center on a wrapper div *** */}
          <div className="flex justify-center">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 text-white`}>
              Pillars of Our <span className={ACCENT_GOLD}>Philosophy</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Increased gap-6 to gap-8 */}
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-800 rounded-lg shadow-2xl border border-yellow-700/50 hover:bg-gray-700 transition-all duration-300" // Increased p-6 to p-8
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className={`h-10 w-10 mx-auto mb-4 ${ACCENT_GOLD}`} />
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400 text-center">{value.description}</p> {/* Added text-center for consistency */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* CTA Section (Increased Vertical Spacing: py-24) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center border-t border-b py-12 border-gray-200"> {/* Increased py-10 to py-12 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"> {/* Increased mb-6 to mb-8 */}
            Ready to Forge Your <span className={ACCENT_GOLD}>Global Path?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Initiate your Expansion Request and connect with our senior strategists today.
          </p>
          <Button 
            className={`text-lg px-8 py-6 font-extrabold ${ACCENT_GOLD_BG} hover:bg-yellow-500 transition-all duration-300`}
            asChild
          >
            <a href="https://wa.me/918019577575?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services.">
              Expansion Request
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Essence;