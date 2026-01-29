import React from 'react'; // Import React for TSX
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// UI Icons
import { Briefcase, Handshake, CheckCircle, LucideIcon } from "lucide-react"; // Import LucideIcon type

// IMAGE IMPORTS
// IMPORTANT: Ensure this path is correct for your project structure
import sundeep from "@/assets/Sundeep Kumar.jpeg"; 

// --- 1. INTERFACE DEFINITIONS ---
interface Leader {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  expertise: string[];
}

interface Partner {
  name: string;
  category: "Government/FZ" | "Financial" | "Legal/Support";
  logoUrl: string; // Placeholder for actual logo paths
  benefit: string;
}

// --- 2. DATA STRUCTURES (Typed) ---
const leadershipTeam: Leader[] = [
  {
    name: "Sundeep Kumar Makthala",
    role: "Founder & Chief Expansion Officer",
    // Use the actual imported image path
    imageUrl: sundeep, 
    bio: "Sundeep provides the strategic vision, leveraging his deep understanding of the Indian and GCC markets to ensure client success. He personally oversees market entry strategies, turning local ambitions into global realities.",
    expertise: ["Market Entry Strategy", "UAE Free Zone Compliance", "Investment Facilitation", "India-GCC Trade Relations"],
  },
  // You can add more team members here
];

const strategicAllies: Partner[] = [
  {
    name: "RAKEZ",
    category: "Government/FZ",
    // Placeholder image URL
    logoUrl: "https://via.placeholder.com/150/1e40af/ffffff?text=RAKEZ", 
    benefit: "Official partner for fast-tracked licensing and diverse free zone solutions across Ras Al Khaimah.",
  },
  {
    name: "DMCC",
    category: "Government/FZ",
    // Placeholder image URL
    logoUrl: "https://via.placeholder.com/150/065f46/ffffff?text=DMCC", 
    benefit: "Access to Dubai's leading hub for commodities trading, blockchain, and robust business setup.",
  },
  {
    name: "Abu Dhabi Global Market (ADGM)",
    category: "Government/FZ",
    // Placeholder image URL
    logoUrl: "https://via.placeholder.com/150/991b1b/ffffff?text=ADGM", 
    benefit: "Specialist guidance for financial services and fintech regulations in the capital of the UAE.",
  },
  {
    name: "Banking Partners",
    category: "Financial",
    // Placeholder image URL
    logoUrl: "https://via.placeholder.com/150/f59e0b/ffffff?text=Bank",
    benefit: "Dedicated support for corporate bank account opening and critical treasury management.",
  },
  {
    name: "Legal & Compliance Firms",
    category: "Legal/Support",
    // Placeholder image URL
    logoUrl: "https://via.placeholder.com/150/4f46e5/ffffff?text=Legal",
    benefit: "Expert local counsel for complex compliance, corporate structuring, and labor law.",
  },
  {
    name: "Logistics & Audit Network",
    category: "Legal/Support",
    // Placeholder image URL
    logoUrl: "https://via.placeholder.com/150/78716c/ffffff?text=Audit",
    benefit: "Seamless connections to warehousing, accounting, and VAT filing services.",
  },
];


// --- 3. THE COMPONENT (Typed) ---
const Alliescape: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-32 pb-24 bg-primary/5 text-center rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for styling consistency
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Strategic Network (Alliescape) 🤝
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              ExpandME is built on **official partnerships** and **deep personal expertise** to guarantee your seamless entry into the UAE market.
            </p>
          </div>
        </section>
      </div>

      ---

      {/* --- MEET THE LEADERSHIP --- */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16"> {/* Increased mb-12 to mb-16 */}
            The Visionaries Behind Your Success
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10 justify-center">
            {leadershipTeam.map((leader, index) => (
              <Card 
                key={index} 
                className="p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-gold transition-all duration-300 max-w-4xl mx-auto"
              >
                <div className="w-36 h-36 flex-shrink-0"> {/* Slightly increased image size */}
                  <img
                    src={leader.imageUrl}
                    alt={`Profile of ${leader.name}`}
                    className="w-full h-full object-cover rounded-full border-4 border-primary/50"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary">{leader.name}</h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">{leader.role}</p>
                  <p className="italic text-sm mb-4">"{leader.bio}"</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {leader.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/70 text-secondary-foreground rounded-full text-xs font-medium flex items-center"
                      >
                        <Briefcase className="w-3 h-3 mr-1" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      ---
      
      {/* --- OFFICIAL STRATEGIC ALLIES --- */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6"> {/* Increased mb-4 to mb-6 */}
            Official Government & Strategic Allies
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto"> {/* Increased mb-12 to mb-16 */}
            Our direct access to UAE Free Zones, financial institutions, and legal firms guarantees **speed, compliance, and reliability.**
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAllies.map((partner, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-lg border-primary/20 flex flex-col items-center h-full hover:shadow-gold transition-all duration-300"
              >
                <div className="mb-4 w-24 h-24 flex items-center justify-center border rounded-lg bg-background">
                    <Handshake className="h-10 w-10 text-primary" /> 
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-sm font-semibold text-primary/70 mb-3">{partner.category}</p>
                <p className="text-muted-foreground text-center text-sm flex-grow">{partner.benefit}</p>
                <span className="mt-4 px-3 py-1 text-xs text-green-700 bg-green-100 rounded-full flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    ExpandME Endorsed
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* Final CTA */}
      <section className="py-24 text-center"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"> {/* Increased mb-4 to mb-6 */}
            Ready to Leverage Our Network?
          </h2>
          <p className="text-lg text-muted-foreground mb-10"> {/* Increased mb-8 to mb-10 */}
            Don't navigate the complexity alone. Let our **official alliances** become the foundation of your global business.
          </p>
          <Button variant="default" size="lg" asChild>
             {/* Use your official WhatsApp contact link here */}
            <a href="https://wa.me/918019577575?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20Alliescape%20network.">
              Connect With Our Team
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Alliescape;