import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AutoCarousel from "@/components/AutoCarousel"; 
import { Zap, Mic, Newspaper, Award, TrendingUp, LucideIcon, Camera, CheckCircle } from "lucide-react"; 
import { Link } from "react-router-dom";

// --- 1. ASSET IMPORTS ---
import sundeepPhoto from "@/assets/sundeep.jpeg"; 
import newsClipping from "@/assets/new.jpeg"; // Updated to your saved name
import heroDubai from "@/assets/wtitc.jpeg";
import rakCoast from "@/assets/rak-coast.jpg";
import sharjahCulture from "@/assets/sharjah-culture.jpg";
import ummAlQuwain from "@/assets/umm ai qawain.png";

// --- 2. INTERFACE DEFINITIONS ---
interface FeaturedMention {
    source: string;
    headline: string;
    date: string;
    link: string;
    icon: LucideIcon;
    color: string;
}

interface MediaLogo {
    name: string;
    src: string; 
    filter: string;
}

// --- 3. DATA STRUCTURES ---
const featuredMentions: FeaturedMention[] = [
  {
    source: "The Economic Times",
    headline: "How ExpandME is Decoupling Indian Startups from Domestic Red Tape",
    date: "Oct 2024",
    link: "#",
    icon: Newspaper,
    color: "text-red-600",
  },
  {
    source: "Gulf Business Review",
    headline: "The 48-Hour UAE Setup: A Game-Changer for SME Expansion",
    date: "Sep 2024",
    link: "#",
    icon: Mic,
    color: "text-blue-500",
  },
  {
    source: "Startup India Magazine",
    headline: "Winning the Global Race: ExpandME's Blueprint for Compliance Success",
    date: "Aug 2024",
    link: "#",
    icon: Award,
    color: "text-yellow-600",
  },
];

const mediaLogos: MediaLogo[] = [
  { name: "Forbes", src: "", filter: "grayscale" },
  { name: "Bloomberg", src: "", filter: "grayscale" },
  { name: "Economic Times", src: "", filter: "grayscale" },
  { name: "Moneycontrol", src: "", filter: "grayscale" },
  { name: "Gulf News", src: "", filter: "grayscale" },
  { name: "Times of India", src: "", filter: "grayscale" },
];

// --- 4. CAROUSEL DATA ---
const carouselImages = [
  {
    src: sundeepPhoto,
    alt: "Leadership",
    title: "Visionary Leadership",
    description: "Spearheading global initiatives for the tech community.",
  },
  {
    src: heroDubai,
    alt: "Dubai Gateway",
    title: "Global Bridge: UAE Gateway",
    description: "Connecting world-class innovation to Middle Eastern markets.",
  },
  {
    src: rakCoast,
    alt: "Ras Al Khaimah",
    title: "Expansion in RAK",
    description: "Tapping into the industrial potential of the Northern Emirates.",
  },
  {
    src: sharjahCulture,
    alt: "Sharjah",
    title: "Sharjah Cultural Hub",
    description: "Bridging business growth with the UAE's rich cultural heritage.",
  },
  {
    src: ummAlQuwain,
    alt: "Umm Al Quwain",
    title: "Regional Reach",
    description: "Developing robust local ecosystems for emerging tech sectors.",
  },
];


const Spotlight: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section className="pt-36 pb-28 bg-gradient-hero text-background rounded-lg overflow-hidden relative">
          <div className="container mx-auto px-4 text-center">
            <Zap className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in text-white">
              In the <span className="text-yellow-400">Spotlight</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              See why leading media and industry experts recognize ExpandME as the definitive partner for zero-risk global expansion.
            </p>
            <Button variant="hero" size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/contact">Request a Media Kit</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Media Logos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-12 text-muted-foreground uppercase tracking-wider">
                As Featured In
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
                {mediaLogos.map((logo, index) => (
                    <div key={index} className="flex justify-center p-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <div className="h-10 w-full flex items-center justify-center text-lg font-bold text-gray-500 border border-gray-200 rounded-md italic">
                            {logo.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- AUTO CAROUSEL SECTION --- */}
      <section className="py-20 px-4 sm:px-8 bg-slate-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Camera className="text-primary h-8 w-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Global Journey <span className="text-primary">Gallery</span>
            </h2>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white h-[400px] sm:h-[600px] relative">
            <AutoCarousel images={carouselImages} />
          </div>

          {/* --- NEW: MINISTERIAL RECOGNITION SECTION (using new.jpeg) --- */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100">
             <div className="relative group">
                <img 
                    src={newsClipping} 
                    alt="Press Feature Oman Minister" 
                    className="rounded-xl shadow-lg border border-slate-200 transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
             </div>
             <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
                    Press Highlight
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                    TS Youth's Innovation <span className="text-primary italic">Impresses</span> Oman Minister
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                   "A significant milestone in our journey, where our technological advancements were showcased to international delegates and recognized for their potential to disrupt global markets."
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle className="text-green-500 h-5 w-5" /> 
                        <span>G20 Ministerial Conclave Recognition</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle className="text-green-500 h-5 w-5" /> 
                        <span>Cross-Border Technology Endorsement</span>
                    </div>
                </div>
             </div>
          </div>

          <p className="text-center text-muted-foreground mt-10 italic">
            Capturing moments of innovation and global collaboration across the network.
          </p>
        </div>
      </section>

      {/* Featured Press Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-primary/20 pb-2">
            Featured Articles & Press Releases
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {featuredMentions.map((mention, index) => (
              <Card 
                key={index}
                className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border-t-4 border-primary/50 bg-white"
              >
                <div className="flex items-center mb-4">
                    <mention.icon className={`h-8 w-8 mr-3 ${mention.color}`} />
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{mention.source}</p>
                        <p className="text-xs text-gray-500">{mention.date}</p>
                    </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground flex-grow">
                  {mention.headline}
                </h3>
                
                <Button variant="link" className="p-0 justify-start text-primary font-bold mt-2" asChild>
                    <a href={mention.link} target="_blank" rel="noopener noreferrer">
                        Read Full Article <TrendingUp className="h-4 w-4 ml-1 transform rotate-45" />
                    </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Media Inquiries & Partnership Opportunities
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Our team is available for expert commentary on UAE Free Zones, Indian global expansion trends, and tax-efficient structures.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Contact Our PR Team</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Spotlight;