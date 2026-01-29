import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Zap, Map, Shield, DollarSign, Globe, TrendingUp, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Note: Assuming these imports are correct and available in your project structure
import a from "@/assets/48hrs.png";
import b from "@/assets/GlobalStratergy.png";
import c from "@/assets/Certification.png";
import d from "@/assets/4th.png";
import e from "@/assets/5th.png";
import f from "@/assets/6th.png";

// --- 1. Define Types/Interfaces ---

// Interface for a single blueprint item
interface BlueprintItem {
  title: string;
  description: string;
  icon: LucideIcon; // Type for the Lucide icon component (though not used in final JSX)
  imagePath: string; // Path to the illustration image
}

// Interface for BlueprintCard props
interface BlueprintCardProps {
  item: BlueprintItem;
  index: number;
}


// --- 2. Data Definition (Typed) ---

const blueprintItems: BlueprintItem[] = [
{ 
    title: "International Setup", 
    description: "End-to-end company formation within 48 hours, securing 100% ownership and legal structure in tax-efficient jurisdictions.",
    icon: Globe,
    imagePath: a,
  }
  ,
  { 
    title: "Market Entry Strategy", 
    description: "Customized strategic planning and location analysis to ensure optimal market penetration and operational success abroad.",
    icon: Map,
    imagePath: b,
  },
  { 
    title: "Compliance & Certifications", 
    description: "Full regulatory, legal, and certification support to maintain absolute compliance in the target country.",
    icon: Shield,
    imagePath: c,
  },
  { 
    title: "Access To Global Investors", 
    description: "Direct connections and advisory for raising capital from international VCs, angels, and private equity funds.",
    icon: DollarSign,
    imagePath: d,
  },
  { 
    title: "Global Brand Visibility", 
    description: "Media exposure, PR strategy, and digital positioning to build an internationally recognized brand identity.",
    icon: Zap,
    imagePath: e,
  },
  { 
    title: "Zero-Tax Financial Structuring", 
    description: "Expert financial setup to maximize profits by leveraging 0% corporate tax and minimizing regulatory burdens.",
    icon: TrendingUp,
    imagePath: f,
  },
];

// --- 3. Helper Component (Typed) ---

const BlueprintCard: React.FC<BlueprintCardProps> = ({ item, index }) => (
    <Card 
        key={item.title}
        className="overflow-hidden shadow-lg hover:shadow-gold transition-shadow duration-300 border-2 border-primary/10"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        {/* Top Section: Image/Illustration area */}
        <div className="h-48 bg-gray-100 flex items-center justify-center">
            <img 
                src={item.imagePath} 
                alt={item.title + " illustration"} 
                className="w-full h-full object-cover" 
            />
        </div>

        {/* Bottom Section: Text Content */}
        <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            {/* Assuming Link is correctly imported from react-router-dom */}
            <Link to="/contact" className="text-primary hover:underline font-medium text-sm uppercase tracking-wider">
                learn more
            </Link>
        </div>
    </Card>
);

// --- 4. Main Component (Typed) ---

const Blueprint: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-32 pb-24 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              The Expansion <span className="text-primary">Blueprint</span>
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Our systematic, six-pillar approach guarantees a rapid, compliant, and profitable launch for your startup in the global market.
            </p>
          </div>
        </section>
      </div>

      {/* --- */}
      
      {/* Blueprint Services Section */}
      <section className="py-24 bg-white"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"> {/* Increased mb-12 to mb-16 */}
            What We <span className="text-primary">Offer</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap-8 to gap-10 */}
            {blueprintItems.map((item, index) => (
              <BlueprintCard key={item.title} item={item} index={index} />
            ))}
          </div>

        </div>
      </section>
      
      {/* --- */}

      {/* Feature Highlight Section */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6"> {/* Increased mb-4 to mb-6 */}
            Built for <span className="text-primary">Indian Startups</span>
          </h3>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground mb-10"> {/* Increased mb-8 to mb-10 */}
            We understand the unique challenges of taking an Indian business global. Our blueprint is specifically engineered to provide you with the fastest, safest, and most profitable path to international success.
          </p>
          <Button variant="outline" size="lg">
            View Case Studies
          </Button>
        </div>
      </section>

      {/* --- */}

      {/* CTA Section */}
    <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8"> {/* Increased mb-6 to mb-8 */}
                Ready to Implement Your Global Plan?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
                Let's start building your Expansion Blueprint today.
            </p>
            <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact</Link>
            </Button>
        </div>
    </section>
    </Layout>
  );
};

export default Blueprint;