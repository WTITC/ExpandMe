import React from 'react'; // Explicitly import React for clarity in TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Users, Award, Briefcase, TrendingUp, LucideIcon } from "lucide-react"; // Import LucideIcon for type checking icons

// --- 1. Define Types/Interfaces ---

// Interface for a single team member
interface TeamMember {
  name: string;
  role: string;
}

// Interface for the props of the TeamGrid helper component
interface TeamGridProps {
  teamMembers: TeamMember[];
  startDelay?: number;
}

// Interface for a single stat item
interface Stat {
  icon: LucideIcon; // Correct type for an imported Lucide component
  label: string;
  value: string;
}

// --- 2. Define the Component ---

const About: React.FC = () => {
  // SPLIT TEAM INTO NATIONAL AND INTERNATIONAL ARRAYS
  const nationalTeam: TeamMember[] = [
    { name: "Sundeep Makthala", role: "Founder, T-Consult" },
    { name: "Bhagya", role: "Director" },
    { name: "Yamini", role: "Personal Secretary" },
  ];

  const internationalTeam: TeamMember[] = [
    { name: "Kethan", role: "Country Manager - UAE" },
    { name: "Priya Sharma", role: "Legal Advisor - UK" },
    { name: "David Lee", role: "Operations Head - Singapore" },
  ];

  const stats: Stat[] = [
    { icon: Users, label: "Satisfied Clients", value: "150+" },
    { icon: Users, label: "Expert Team", value: "20+" },
    { icon: Briefcase, label: "Active Projects", value: "50+" },
    { icon: Award, label: "Award Winning", value: "10+" },
  ];

  // Helper component to render a single team grid
  const TeamGrid: React.FC<TeamGridProps> = ({ teamMembers, startDelay = 0 }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <Card
          key={member.name}
          className="p-8 text-center hover:shadow-gold transition-all duration-300 animate-scale-in border-2 border-primary/20"
          // Calculate animation delay based on the team's starting point
          style={{ animationDelay: `${(startDelay + index) * 100}ms` }}
        >
          <div className="w-20 h-20 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
            {/* The Users icon is used here as a placeholder for a profile image/icon */}
            <Users className="h-10 w-10 text-background" />
          </div>
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
        </Card>
      ))}
    </div>
  );

  return (
    <Layout>
      {/* *** FIX APPLIED HERE *** We wrap the Hero section in a div to apply the margins and top spacing
        that were present on the Index page's hero image wrapper.
      */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-32 pb-24 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              ExpandME: Who We Are?
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-background/90 animate-slide-up">
              ExpandME helps Indian startups expand globally through company setup, 0% tax,
              100% ownership, and setup within 48 hours. We provide full support — legal,
              operational, and strategic.
            </p>
          </div>
        </section>
      </div>

      {/* --- */}
      
      {/* Team Section - Increased overall padding (py-24) and inner spacing */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Our Expert Crew
          </h2>

          {/* National Team */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-primary mb-8 border-b pb-2 border-primary/20">
              🇮🇳 National Core Team
            </h3>
            <TeamGrid teamMembers={nationalTeam} startDelay={0} />
          </div>

          {/* International Team */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 border-b pb-2 border-primary/20">
              🌍 International Expansion Team
            </h3>
            <TeamGrid teamMembers={internationalTeam} startDelay={nationalTeam.length} />
          </div>

        </div>
      </section>

      {/* --- */}

      {/* Stats Section - Increased overall padding (py-24) */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Dynamically rendering the icon component from the stat object */}
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* CTA Section - Increased overall padding (py-24) */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Are You Ready To Start A Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            We Will Help You To Start Your Business From A to Z.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/918019577575?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services.">Contact Us</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;