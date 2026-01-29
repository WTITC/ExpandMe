import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Clock, Rocket, Shield, Map, Globe, DollarSign, Users, Award, Handshake, LucideIcon 
} from "lucide-react"; // Import LucideIcon type
import { Link } from "react-router-dom";

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single event in the timeline
interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string; // Tailwind class for color
}

// Interface for the TimelineItem component props
interface TimelineItemProps {
    event: TimelineEvent;
    isLeft: boolean;
}

// --- 2. DATA STRUCTURES (Typed) ---
const timelineEvents: TimelineEvent[] = [
  {
    year: 2018,
    title: "Founding: Focus on India-GCC Trade",
    description: "ExpandME (initially T-Consult) is founded with a core mission to simplify trade and compliance for Indian MSMEs entering the Gulf Cooperation Council (GCC) market.",
    icon: Handshake,
    accent: "text-blue-500", // Changed from bg-blue-500 for better component usage
  },
  {
    year: 2020,
    title: "UAE Free Zone Official Partnership",
    description: "Secured our first major official partnership with a leading UAE Free Zone, enabling us to offer fast-track licensing and 100% foreign ownership structures.",
    icon: Shield,
    accent: "text-green-500", // Changed from bg-green-500
  },
  {
    year: 2021,
    title: "The 48-Hour Blueprint Launch",
    description: "Systematized our process into the Expansion Blueprint, guaranteeing company formation and setup within 48 hours for eligible startups.",
    icon: Rocket,
    accent: "text-yellow-500", // Changed from bg-yellow-500
  },
  {
    year: 2022,
    title: "Zero-Tax Financial Structuring Program",
    description: "Launched our specialized financial advisory vertical to help clients legally leverage 0% corporate tax benefits, significantly boosting client profitability.",
    icon: DollarSign,
    accent: "text-indigo-500", // Changed from bg-indigo-500
  },
  {
    year: 2023,
    title: "Expansion to Broader Global Markets",
    description: "Expanded strategic advisory to include market entry support for the UK and Singapore, solidifying our role as a comprehensive global expansion partner.",
    icon: Globe,
    accent: "text-purple-500", // Changed from bg-purple-500
  },
  {
    year: 2024,
    title: "Launch of Co-Creation Lab (Synergy Pillar)",
    description: "Introduced the premium Co-creation Lab service, providing executive teams with high-intensity, one-day strategic planning workshops.",
    icon: Users,
    accent: "text-red-500", // Changed from bg-red-500
  },
];

// --- 3. HELPER COMPONENT (Typed) ---
const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLeft }) => (
    // Note: The structure needs adjustment for the center line logic on desktop
    <div className={`mb-12 flex justify-between items-center w-full relative ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Card Content (Mobile Full Width, Desktop 1/2 Width) */}
        {/* The card is now inside the first 1/2 div */}
        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8 text-left md:text-right' : 'md:pl-8 text-left'}`}>
            <Card className="p-6 shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border border-primary/10">
                <div className={`text-xl font-bold mb-2 ${event.accent.replace('text-', 'text-opacity-80')}`}>{event.year}</div> {/* Use color on year */}
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
            </Card>
        </div>

        {/* Empty Column for Spacing (Desktop Only) */}
        <div className="hidden md:block w-1/2"></div>
        
        {/* Vertical Separator and Icon (The center line) - Only positioned absolutely on desktop */}
        <div className={`absolute w-10 h-10 rounded-full shadow-lg border-4 border-white transform -translate-x-1/2 bg-background z-10 flex items-center justify-center 
                        ${isLeft ? 'md:left-1/2 md:translate-x-1/2' : 'md:right-1/2 md:-translate-x-1/2'} 
                        left-0`}> 
            <event.icon className={`h-5 w-5 ${event.accent}`} />
        </div>
        
    </div>
);


// --- 4. THE COMPONENT (Typed) ---
const Chronos: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-36 pb-28 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Clock className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in text-white">
              Our **Chronos** | A History of Expansion
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Our journey is defined by a commitment to systematic, zero-risk global expansion. Explore the milestones that built the ExpandME legacy.
            </p>
            <Button variant="hero" size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/about">Meet The Crew →</Link>
            </Button>
          </div>
        </section>
      </div>

      ---

      {/* The Vertical Timeline Section */}
      <section className="py-24 bg-white"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-primary/20 pb-2">
            Key **Milestones**
          </h2>
          
          <div className="relative">
            {/* The Main Vertical Line (Desktop Only) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden md:block transform -translate-x-1/2"></div>
            {/* The Main Vertical Line (Mobile Only - on the left) */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-primary/20 md:hidden"></div> 

            {/* Timeline Items */}
            {timelineEvents.map((event, index) => (
              <TimelineItem 
                key={event.year} 
                event={event} 
                // Alternates side for desktop view
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </section>

      ---

      {/* Legacy and Future CTA */}
      <section className="py-24 bg-secondary/30 text-center"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-6"> {/* Increased mb-4 to mb-6 */}
            Building the **Next Chapter**
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Our history of compliance, speed, and profitability is the foundation for your future success. Your expansion is the next milestone on our timeline.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="https://wa.me/918019577575?text=I%20want%20to%20be%20part%20of%20ExpandME%27s%20history.">
                Start My Expansion Today
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Chronos;