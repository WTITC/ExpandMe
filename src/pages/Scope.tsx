import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Zap, Compass, Target, Code, CheckCircle, Lightbulb, TrendingUp, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// --- Data Structure for the Three Core Service Pillars ---
const scopePillars = [
  {
    icon: Compass,
    title: "I. Vision: The Expansion Essence",
    description: "Define your global why. We validate your market fit, regulatory alignment, and long-term vision for tax-optimized success.",
    link: "/essence",
    linkText: "Explore Essence →",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "II. Strategy: The Expansion Blueprint",
    description: "Develop the how. This is the zero-risk, step-by-step roadmap covering jurisdiction selection, legal structuring, and financial modeling.",
    link: "/blueprint",
    linkText: "See the Blueprint →",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Code,
    title: "III. Execution: The Footprint",
    description: "Deploy the what. Immediate, guaranteed implementation of company setup, banking, visas, and VAT registration, targeting a 48-hour launch.",
    link: "/blueprint#execution", // Links to the execution section of the Blueprint page
    linkText: "View Execution Steps →",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const Scope = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="py-24 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Zap className="h-16 w-16 mx-auto mb-4 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in text-white">
              The Full Scope of **ExpandME**
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Our systematic approach is built on three pillars: **Vision**, **Strategy**, and **Execution**. We cover every step from conceptual alignment to operational launch.
            </p>
            <Button variant="hero" size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/contact">Start Your Scope Assessment</Link>
            </Button>
          </div>
        </section>
      </div>

      ---

      {/* Three Pillars Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 border-b-4 border-primary/20 pb-2">
            The ExpandME **3-Pillar System**
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {scopePillars.map((pillar, index) => (
              <Card
                key={index}
                className={`p-8 shadow-2xl transition-all duration-500 hover:shadow-primary/30 flex flex-col items-start h-full ${pillar.bg}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-12 w-12 flex items-center justify-center rounded-xl mb-4 ${pillar.bg} border-4 border-white shadow-md`}>
                    <pillar.icon className={`h-6 w-6 ${pillar.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{pillar.description}</p>
                
                <Button variant="link" className="p-0 font-bold text-primary" asChild>
                    <Link to={pillar.link}>{pillar.linkText}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      ---
      
      {/* Scope Highlights - Key Differentiators */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Our Scope **Guarantees Success**
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="flex items-start">
                        <CheckCircle className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold">100% Tax Compliance</h3>
                            <p className="text-muted-foreground">We only architect structures that are legally validated to ensure 0% corporate tax benefits are secure and future-proof.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Zap className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold">Guaranteed Speed</h3>
                            <p className="text-muted-foreground">Our process leverages official ally channels for rapid setup, committing to a 48-hour launch for prepared executive teams.</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <Lightbulb className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold">End-to-End Handholding</h3>
                            <p className="text-muted-foreground">Our scope includes everything from initial feasibility study (Essence) to final VAT registration (Footprint).</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <TrendingUp className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold">Global Scalability</h3>
                            <p className="text-muted-foreground">The strategy is designed not just for UAE entry, but for seamless scalability to global markets like KSA, UK, and Singapore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      ---

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Define Your Expansion **Scope**?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Book a complimentary 15-minute consultation to map your requirements against our three core service pillars.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="https://wa.me/918019577575?text=I%20want%20to%20define%20the%20scope%20of%20my%20global%20expansion.">
                Book My Consultation
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Scope;