import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
// UI Icons
import { Users, Lightbulb, Zap, Calendar, Target, Code, Handshake, CheckCircle, LucideIcon } from "lucide-react"; // Import LucideIcon type
import { Link } from "react-router-dom";

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single step in the co-creation process
interface CocreateStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

// Interface for a single workshop benefit
interface CocreateBenefit {
    icon: LucideIcon;
    title: string;
    detail: string;
}


// --- 2. DATA STRUCTURES (Typed) ---

const cocreateSteps: CocreateStep[] = [
  {
    icon: Lightbulb,
    title: "Discovery & Ideation",
    description: "Deep dive into your core business model, value proposition, and global objectives. We identify key market alignment.",
    color: "text-blue-500",
  },
  {
    icon: Target,
    title: "Market Validation & Selection",
    description: "Detailed analysis of potential UAE Free Zones, jurisdiction requirements, and target customer segments. We lock in the optimal launch strategy.",
    color: "text-orange-500",
  },
  {
    icon: Code,
    title: "Blueprint Development",
    description: "Jointly build a phased, detailed execution plan covering legal structure, financial modeling (0% tax), and compliance roadmap.",
    color: "text-green-500",
  },
  {
    icon: Zap,
    title: "Accelerated Implementation",
    description: "Immediate action on company setup, banking, and visa processing, leveraging our official allies to ensure the 48-hour launch goal.",
    color: "text-red-500",
  },
];

const cocreateBenefits: CocreateBenefit[] = [
    { 
        icon: Users, 
        title: "Team Alignment", 
        detail: "Ensure your leadership team is fully aligned on the international strategy and objectives." 
    },
    { 
        icon: Calendar, 
        title: "De-Risked Timeline", 
        detail: "Walk away with a concrete, prioritized 90-day execution roadmap and contingency plan." 
    },
    { 
        icon: Handshake, 
        title: "Direct Ally Access", 
        detail: "Instant introduction to our legal, banking, and Free Zone partners during the session." 
    },
    { 
        icon: Target, 
        title: "Optimized Structure", 
        detail: "Finalized legal and financial structure to ensure maximum tax efficiency and 100% ownership." 
    },
];

// --- 3. THE COMPONENT (Typed) ---

const Cocreate: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-36 pb-28 bg-gradient-to-r from-primary/90 to-blue-800 text-white rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300 animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
              The Global Strategy <span className="text-yellow-300">Co-creation Lab</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              **Don't just expand, co-create your global future.** A high-intensity, executive workshop designed to finalize your international strategy and execution plan in a single day.
            </p>
            <Button variant="hero" size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/contact">Book Your Executive Session</Link>
            </Button>
          </div>
        </section>
      </div>

      ---
      
      {/* Section 1: The Co-creation Process */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-primary/20 pb-2"> {/* Increased mb-12 to mb-16 */}
            Our Four-Step <span className="text-primary">Co-creation</span> Process
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap-8 to gap-10 */}
            {cocreateSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary/50 flex flex-col items-center h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-12 w-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 ${step.color}`}>
                  {/* TypeScript correctly handles component props here */}
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                <div className="mt-4 text-lg font-semibold text-primary">{`Step ${index + 1}`}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      ---

      {/* Section 2: Guaranteed Outcomes / Benefits */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center"> {/* Increased gap-12 to gap-16 */}
            
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-8"> {/* Increased mb-6 to mb-8 */}
                    Guaranteed <span className="text-primary">Outcomes</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10"> {/* Increased mb-8 to mb-10 */}
                    The Co-creation Lab isn't just a meeting; it's a **strategic delivery session**. You leave with a fully vetted, actionable plan that cuts months off your expansion timeline.
                </p>
                <ul className="space-y-6"> {/* Increased space-y-4 to space-y-6 */}
                    {cocreateBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-xl">{benefit.title}</p>
                                <p className="text-muted-foreground text-sm">{benefit.detail}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
                {/* Placeholder for the illustration/image */}
                <div className="h-96 w-full max-w-lg bg-gray-200 rounded-xl shadow-2xl flex items-center justify-center text-lg text-muted-foreground">
                    
                </div>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* Final CTA */}
      <section className="py-24 text-center"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8"> {/* Increased mb-6 to mb-8 */}
            Ready to Build Your Winning Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            This premium service is reserved for executive teams ready to commit to global growth.
          </p>
          <Button variant="hero" size="lg" className="bg-primary hover:bg-primary/90" asChild>
            {/* Direct link to contact for this premium service */}
            <a href="https://wa.me/918019577575?text=Hello!%20I%E2%80%99m%20interested%20in%20the%20Global%20Strategy%20Co-creation%20Lab.">
                Inquire About Availability
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Cocreate;