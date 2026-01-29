import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Building2,
  TrendingUp,
  FileCheck,
  DollarSign,
  Globe,
  CheckCircle2,
  LucideIcon, // Import LucideIcon type
} from "lucide-react";

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single service item
interface ServiceItem {
    icon: LucideIcon;
    title: string;
    description: string;
}


// --- 2. DATA STRUCTURES (Typed) ---

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: Building2,
      title: "International Setup",
      description: "Complete company formation with 100% ownership and 0% corporate tax",
    },
    {
      icon: TrendingUp,
      title: "Market Entry Strategy",
      description: "Tailored strategies for successful market penetration in UAE and beyond",
    },
    {
      icon: FileCheck,
      title: "Compliance & Certifications",
      description: "Full legal and regulatory compliance support",
    },
    {
      icon: DollarSign,
      title: "Access to Global Investors",
      description: "Connect with international investors and funding opportunities",
    },
    {
      icon: Globe,
      title: "Global Brand Visibility",
      description: "Media exposure and brand positioning in international markets",
    },
  ];

  const whyChoose: string[] = [
    "100% ownership with 0% corporate tax",
    "End-to-end documentation support",
    "Setup completed within 48 hours",
    "Expert guidance at every step",
    "Access to global networks",
    "Compliance and legal support",
  ];

// --- 3. THE COMPONENT ---
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-32 pb-24 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white"> {/* Added text-white for visibility */}
              Our Services — What We Offer
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Comprehensive solutions for your global business expansion
            </p>
          </div>
        </section>
      </div>

      {/* Services Cards */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap-8 to gap-10 */}
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 shadow-lg hover:shadow-gold transition-all duration-300 animate-scale-in border-2 border-primary/20 flex flex-col items-start h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* TypeScript correctly handles component props here */}
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16"> {/* Increased mb-12 to mb-16 */}
            Why Choose ExpandME
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center mb-10 text-muted-foreground"> {/* Increased mb-8 to mb-10 */}
              ExpandME is your gateway to global success — not just setup, but **strategy**.
            </p>
            <div className="grid md:grid-cols-2 gap-6"> {/* Increased gap-4 to gap-6 */}
              {whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8"> {/* Increased mb-6 to mb-8 */}
            From Local to Global, We Grow With You
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Ready to take your business to the next level?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Let's Start</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;