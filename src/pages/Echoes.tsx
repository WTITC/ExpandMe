import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
// UI Icons and LucideIcon type
import { Quote, Star, Zap, Handshake, DollarSign, Globe, Code, LucideIcon } from "lucide-react"; 
import { Link } from "react-router-dom";

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single client testimonial
interface ClientEcho {
  quote: string;
  clientName: string;
  clientTitle: string;
  location: string;
  icon: LucideIcon;
}

// Interface for StarRating props
interface StarRatingProps {
  count?: number;
}

// --- 2. DATA STRUCTURES (Typed) ---

const clientEchoes: ClientEcho[] = [
  {
    quote: "The 48-hour setup guarantee was real. We were operational in Dubai before our competitors even finished their initial paperwork. ExpandME is pure acceleration.",
    clientName: "Rohan Sharma",
    clientTitle: "CEO, TechNova Solutions",
    location: "Dubai, UAE",
    icon: Zap,
  },
  {
    quote: "Their financial structuring expertise is unmatched. We confidently moved forward knowing the 0% corporate tax arrangement was 100% compliant and maximized our profits.",
    clientName: "Priya Dasgupta",
    clientTitle: "CFO, Apex Global Ventures",
    location: "Abu Dhabi, UAE",
    icon: DollarSign,
  },
  {
    quote: "The Alliescape network is their secret weapon. Direct access to top banking and legal partners meant zero roadblocks. A seamless process.",
    clientName: "David Lee",
    clientTitle: "Founder, Zenith Logistics",
    location: "Ras Al Khaimah, UAE",
    icon: Handshake,
  },
  {
    quote: "From initial strategy on the Blueprint page to final setup, their team was precise, transparent, and always focused on our ultimate growth objective.",
    clientName: "Aisha Khan",
    clientTitle: "Director, Innovate Education",
    location: "Sharjah, UAE",
    icon: Star,
  },
  {
    quote: "We needed a partner who truly understood the Indian startup ecosystem and the complexities of the GCC market. ExpandME is that perfect bridge.",
    clientName: "Vikram Reddy",
    clientTitle: "VP of Strategy, Quantum Tech",
    location: "Bangalore, India",
    icon: Globe, 
  },
  {
    quote: "The only firm we trust for international expansion. They handled everything from visas to compliance, allowing us to focus purely on product development.",
    clientName: "Sarah Chen",
    clientTitle: "Operations Lead, CloudCore Systems",
    location: "London, UK",
    icon: Code, 
  },
];

// --- 3. HELPER COMPONENT (Typed) ---
const StarRating: React.FC<StarRatingProps> = ({ count = 5 }) => (
  <div className="flex justify-center mb-3">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
    ))}
  </div>
);

// --- 4. THE COMPONENT (Typed) ---
const Echoes: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-36 pb-28 bg-gradient-to-r from-primary/90 to-blue-800 text-white rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Quote className="h-16 w-16 mx-auto mb-6 text-yellow-300 animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
              The **Echoes** of Success
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Hear directly from the founders and executive teams who have successfully expanded their businesses globally with the ExpandME system.
            </p>
            <Button variant="hero" size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/impact-tales">Read Detailed Case Studies →</Link>
            </Button>
          </div>
        </section>
      </div>

      ---

      {/* Testimonial Grid */}
      <section className="py-24 bg-white"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-primary/20 pb-2"> {/* Increased mb-12 to mb-16 */}
            Verified Client **Feedback**
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap-8 to gap-10 */}
            {clientEchoes.map((echo, index) => (
              <Card
                key={index}
                className="p-8 shadow-xl border-t-4 border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:border-primary/80 flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StarRating />
                <div className="mb-4 flex-grow">
                    <Quote className="h-6 w-6 text-yellow-500 float-left mr-2 mt-1" />
                    <p className="italic text-lg text-gray-700 leading-relaxed">
                      "{echo.quote}"
                    </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                    <div className="mr-3">
                        {/* TypeScript correctly handles component props here */}
                        <echo.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-foreground">{echo.clientName}</h3>
                        <p className="text-sm text-muted-foreground">{echo.clientTitle}</p>
                        <p className="text-xs text-primary">{echo.location}</p>
                    </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* CTA Section - Lead to Consultation */}
      <section className="py-24 bg-secondary/30 text-center"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8"> {/* Increased mb-6 to mb-8 */}
            Ready for **Your** Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Join the ranks of successful global entrepreneurs. Start co-creating your personalized expansion strategy today.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="https://wa.me/918019577575?text=I%20am%20ready%20to%20start%20my%20global%20expansion%20with%20ExpandME.">
                Start My Expansion Request
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Echoes;