import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Zap, TrendingUp, DollarSign, Globe, Quote, Users, LucideIcon } from "lucide-react"; // Import LucideIcon type
import { Link } from "react-router-dom";

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single impact story/case study
interface ImpactStory {
    title: string;
    client: string;
    quote: string;
    keyMetric: string;
    metricLabel: string;
    result: string;
    icon: LucideIcon;
}

// Interface for a single summary statistic
interface SummaryStat {
    value: string;
    label: string;
    icon: LucideIcon;
}


// --- 2. DATA STRUCTURES (Typed) ---

const impactStories: ImpactStory[] = [
  {
    title: "Tech Startup: Accelerating from Hyderabad to Dubai",
    client: "Velocity Innovations, CEO - Rakesh K.",
    quote: "ExpandME cut our launch time from a projected six months to just 45 days. The 0% tax structure they secured immediately made our business globally competitive.",
    keyMetric: "45 Days",
    metricLabel: "Time to Market Entry",
    result: "Achieved 100% foreign ownership and secured a major regional seed funding round within 9 months.",
    icon: Zap,
  },
  {
    title: "E-commerce Giant: Optimizing Supply Chain via RAKEZ",
    client: "GlobalServe Logistics, Founder - Priya D.",
    quote: "Their expertise in Free Zone selection was unmatched. Moving our logistics hub to Ras Al Khaimah saved us 30% on operational costs in the first year alone.",
    keyMetric: "30%",
    metricLabel: "Operational Cost Reduction",
    result: "Established a fully compliant UAE distribution center, allowing seamless tax-free trade across the GCC region.",
    icon: Globe,
  },
  {
    title: "FinTech Firm: Compliance & Capital in ADGM",
    client: "Apex Digital Finance, CTO - Omar A.",
    quote: "Navigating Abu Dhabi's financial regulations seemed impossible until we engaged ExpandME. Their compliance team was the reason we received our ADGM license without delay.",
    keyMetric: "$5M+",
    metricLabel: "Capital Raised Post-Setup",
    result: "Successfully secured licensing with the Abu Dhabi Global Market (ADGM) and connected with multiple international VCs.",
    icon: DollarSign,
  },
];

const summaryStats: SummaryStat[] = [
    { value: "150+", label: "Successful Expansions", icon: Users },
    { value: "97%", label: "Compliance Success Rate", icon: TrendingUp },
    { value: "48 Hours", label: "Fastest Company Setup", icon: Zap },
    { value: "0%", label: "Corporate Tax Secured", icon: DollarSign },
];


// --- 3. THE COMPONENT (Typed) ---

const ImpactTales: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-36 pb-28 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Quote className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in text-white">
              Our **Impact Tales**
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Proof is in the performance. See how we've powered Indian startups to achieve rapid, compliant, and profitable international expansion.
            </p>
            <Button variant="hero" size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/contact">Discuss My Success Story</Link>
            </Button>
          </div>
        </section>
      </div>

      ---

      {/* Summary Stats Grid */}
      <section className="py-20 bg-white"> {/* Increased py-16 to py-20 */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {summaryStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Note: TypeScript correctly handles component props here */}
                <stat.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* Detailed Case Studies */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-primary/20 pb-2"> {/* Increased mb-12 to mb-16 */}
            Featured **Case Studies**
          </h2>
          
          <div className="space-y-16">
            {impactStories.map((story, index) => (
              <Card 
                key={index}
                className="p-8 lg:p-12 shadow-2xl transition-shadow duration-300 hover:shadow-primary/30"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Left Column: Key Metric & Icon */}
                  <div className="lg:col-span-1 text-center lg:text-left border-b lg:border-r lg:border-b-0 border-primary/20 pb-6 lg:pb-0 lg:pr-8">
                    <story.icon className="h-10 w-10 mx-auto lg:mx-0 mb-4 text-primary" />
                    <div className="text-5xl font-extrabold text-foreground">{story.keyMetric}</div>
                    <p className="text-xl font-semibold text-primary">{story.metricLabel}</p>
                  </div>
                  
                  {/* Right Column: Title, Quote, and Result */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{story.title}</h3>
                    
                    <div className="mb-4 pl-4 border-l-4 border-yellow-500">
                      <Quote className="h-6 w-6 text-yellow-500 float-left mr-2 mt-1" />
                      <p className="italic text-lg text-gray-700 leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>
                    
                    <p className="font-semibold mt-6 text-lg">
                      Outcome: <span className="text-primary">{story.result}</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Client: {story.client}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* Final CTA */}
      <section className="py-24 text-center"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next **Impact Tale**?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Your global expansion story starts with a zero-obligation strategic consultation.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/918019577575?text=I%20want%20to%20start%20my%20Impact%20Tale%20with%20ExpandME.">
                Start My Expansion Request
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactTales;