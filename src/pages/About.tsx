import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Users, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  Rocket, 
  Globe2, 
  Zap,
  LucideIcon // Required for Type Checking
} from "lucide-react"; 

// --- 1. Define Types/Interfaces ---

interface ServiceItem {
  icon: LucideIcon; // Added icon type
  title: string;
  description: string;
}

interface StatItem {
  icon: LucideIcon; // Added icon type
  label: string;
  value: string;
}

const About: React.FC = () => {

  const services: ServiceItem[] = [
    { 
      icon: Globe2, 
      title: "Global Market Entry", 
      description: "We simplify the complexities of international borders, helping Indian brands establish a legal and operational presence in the UAE and beyond." 
    },
    { 
      icon: ShieldCheck, 
      title: "Compliant Business Setup", 
      description: "Enjoy 100% foreign ownership and 0% corporate tax benefits with our fully managed legal and administrative setup services." 
    },
    { 
      icon: Zap, 
      title: "48-Hour Execution", 
      description: "Time is money. Our streamlined processes ensure your business structure is ready to operate in record time." 
    },
    { 
      icon: Rocket, 
      title: "Strategic Scaling", 
      description: "Beyond setup, we provide the mentorship and networking needed to scale your operations across global verticals." 
    },
  ];

  const stats: StatItem[] = [
    { icon: Users, label: "Satisfied Clients", value: "150+" },
    { icon: Globe2, label: "Global Reach", value: "7 Emirates" },
    { icon: Briefcase, label: "Active Projects", value: "50+" },
    { icon: Award, label: "Award Winning", value: "10+" },
  ];

  return (
    <Layout>
      {/* 1. Hero Section */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section className="pt-32 pb-24 bg-gradient-hero text-background rounded-lg overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              ExpandME: Powering Global Ambitions
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-background/90 animate-slide-up">
              We are the bridge between local innovation and global markets. 
              Our mission is to empower entrepreneurs with the tools, legal frameworks, 
              and strategic networks required to thrive in the world's most competitive economies.
            </p>
          </div>
        </section>
      </div>

      {/* 2. What We Do Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We manage the heavy lifting of international expansion so you can focus on what you do best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon; // Assigned to a Capitalized variable for React rendering
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-gold transition-all duration-300 border-2 border-primary/20 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Operational Values */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Core Identity</h2>
              <div className="space-y-6">
                {[
                  { label: "A Gateway to the UAE:", text: "We specialize in navigating the regulatory landscape of all 7 Emirates." },
                  { label: "Founder-Centric:", text: "Our roots are in technology and grassroots community growth." },
                  { label: "End-to-End Support:", text: "From initial ideation to the first sale, we are your constant partners." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary h-2 w-2 rounded-full shrink-0" />
                    <p className="text-lg"><strong>{item.label}</strong> {item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="h-40 bg-gradient-gold rounded-xl opacity-20" />
               <div className="h-40 bg-secondary rounded-xl" />
               <div className="h-40 bg-secondary rounded-xl" />
               <div className="h-40 bg-gradient-gold rounded-xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <StatIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Are You Ready To Start A Business?
          </h2>
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/918019577575">Contact Us</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;