import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Globe, Lightbulb, Zap, CheckCircle, ArrowRight, LucideIcon } from "lucide-react";

// --- Data based on Blog Screenshots (No need for interfaces for simple string arrays) ---

const uaeExpansionBenefits: string[] = [
  "Strategic location connecting Asia, Africa, and Europe.",
  "World-class infrastructure and funding opportunities.",
  "Business-friendly ecosystem with minimal red tape.",
];

const setupGuideSteps: string[] = [
  "Select your business activity – from fintech to e-commerce, healthcare, or creative industries.",
  "Choose the right setup – mainland or free zone, based on your goals.",
  "Documentation & approvals – we handle the paperwork and compliance.",
  "Corporate banking support – ensuring your business has global financial access.",
  "Launch operations – start with full ownership in record time.",
];

const successStories: string[] = [
  "A Hyderabad tech startup doubled its client base in Dubai's digital ecosystem within a year.",
  "A health-tech company scaled into Sharjah, tapping into GCC healthcare demand.",
  "An e-commerce business leveraged Ras Al Khaimah's logistics hub to deliver across Asia & Africa.",
];

const thrivingSectors: string[] = [
  "Fintech & Digital Payments – leading regional innovation.",
  "E-commerce – powered by cross-border trade.",
  "Healthcare & Wellness – rapidly growing post-pandemic.",
  "Technology & AI Startups – strongly backed by investors.",
  "Creative Industries – arts, media, and design making a mark.",
];

// --- Main Component (Typed) ---

const Footprint: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-32 pb-24 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-white">
              ExpandME <span className="text-primary">Global Footprint</span>
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              We believe that growth has no boundaries. Our mission is to help Indian startups and businesses seamlessly expand into the **UAE and the Middle East**. This page is your trusted space for market **Insights**, practical guides, success stories, and the latest updates on global expansion opportunities.
            </p>
          </div>
        </section>
      </div>

      {/* --- */}
      
      {/* Section 1: Why Indian Startups Are Expanding to the UAE */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary/20 pb-2 mb-10"> {/* Increased mb-8 to mb-10 */}
            Why Indian Startups Are Expanding to the <span className="text-primary">UAE</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8"> {/* Increased mb-6 to mb-8 */}
            The United Arab Emirates has become one of the fastest-growing hubs for entrepreneurs worldwide. With **100% foreign ownership**, **0% tax benefits**, and company setup possible in as little as **48 hours**, it's no surprise that Indian startups are choosing the UAE as their gateway to the global market.
          </p>
          <ul className="space-y-4 list-none pl-0 mb-8"> {/* Increased space-y-3 to space-y-4 */}
            {uaeExpansionBenefits.map((item, index) => (
              <li key={index} className="flex items-start text-lg text-foreground">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-lg">
            For Indian entrepreneurs, this means faster scaling, stronger visibility, and direct access to international customers.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* Section 2: How to Set Up Your Business - A Simple Guide */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary/20 pb-2 mb-10"> {/* Increased mb-8 to mb-10 */}
            How to Set Up Your Business in the UAE – A Simple <span className="text-primary">Guide</span>
          </h2>
          <ol className="list-decimal list-inside space-y-5 text-lg text-foreground"> {/* Increased space-y-4 to space-y-5 */}
            {setupGuideSteps.map((step, index) => (
              <li key={index} className="pl-2">
                <span className="font-semibold">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
      
      {/* --- */}

      {/* Section 3: Success Stories & Thriving Sectors (Two Columns) */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16"> {/* Increased gap-12 to gap-16 */}
            
            {/* Column 1: Success Stories */}
            <div>
                <h2 className="text-3xl font-bold border-b-4 border-primary/20 pb-2 mb-10"> {/* Increased mb-8 to mb-10 */}
                    Success Stories: Businesses Growing with <span className="text-primary">ExpandME</span>
                </h2>
                <ul className="space-y-4 list-none pl-0">
                    {successStories.map((story, index) => (
                      <li key={index} className="flex items-start text-lg text-muted-foreground">
                        <Lightbulb className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        {story}
                      </li>
                    ))}
                </ul>
                <p className="mt-8 italic text-sm text-muted-foreground"> {/* Increased mt-6 to mt-8 */}
                    Every success story begins with a decision—and we're here to ensure yours is a winning one.
                </p>
            </div>

            {/* Column 2: Top Business Sectors */}
            <div>
                <h2 className="text-3xl font-bold border-b-4 border-primary/20 pb-2 mb-10"> {/* Increased mb-8 to mb-10 */}
                    Top Business Sectors Thriving in the UAE <span className="text-primary">(2025)</span>
                </h2>
                <ul className="space-y-4 list-none pl-0">
                    {thrivingSectors.map((sector, index) => (
                      <li key={index} className="flex items-start text-lg text-muted-foreground">
                        <Zap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        {sector}
                      </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* --- */}

      {/* Section 4: Events & Community (Call to Action) */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary/20 pb-2 mb-8 inline-block"> {/* Increased mb-6 to mb-8 */}
            Stay Connected with ExpandME
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-muted-foreground mb-10"> {/* Increased mb-8 to mb-10 */}
            Business expansion isn't just about setting up a company—it's about building a future without limits. At ExpandME, we're here to guide, support, and celebrate your growth.
          </p>
          <div className="flex flex-col items-center space-y-6"> {/* Increased space-y-4 to space-y-6 */}
              <Button variant="hero" size="lg" asChild>
                <a href="/chronos" className="flex items-center">
                    Read More Blog Posts <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-md text-foreground">
                📧 Subscribe to our newsletter and follow us on social media for the latest insights and updates.
              </p>
              <p className="text-lg font-bold text-primary">
                Together, let's take Indian innovation to the world!
              </p>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Footprint;