import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

// --- UI Icons ---
import { 
  Building2, 
  Clock, 
  TrendingUp, 
  Globe as GlobeIcon, 
  MapPin, 
  Quote, 
  Camera 
} from "lucide-react"; 

// --- CAROUSEL & SWIPER COMPONENTS ---
import AutoCarousel from "@/components/AutoCarousel"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 

// --- GLOBE COMPONENT ---
import RotatingGlobe from '@/components/RotatingGlobe'; 

// --- 1. ASSET IMPORTS ---
import sundeepPhoto from "@/assets/sundeep.jpeg"; 
import newsClipping from "@/assets/new.jpeg"; 
import heroDubai from "@/assets/hero-dubai1.jpg";
import wtitcHero from "@/assets/wtitc.jpeg";
import expansion from "@/assets/Expansion.png";

// Location Images
import dubaiImage from "@/assets/dubai-city.jpg"; 
import rasAlKhaimahImage from "@/assets/rak-coast.jpg"; 
import sharjahImage from "@/assets/sharjah-culture.jpg"; 
import abudhabi from "@/assets/abu-dhabi.png";
import fujairah from "@/assets/fujairah.png";
import ajman from "@/assets/ajman.png";
import ummaiqawain from "@/assets/umm ai qawain.png";

// Testimonial Portraits
import ramy from "@/assets/Ramy-jallad.jpeg";
import haz from "@/assets/Mohammadhhazeeb.jpeg";
import car from "@/assets/carlosrodriguez.jpeg";
import fat from "@/assets/fatimaalmansoori.jpeg";
import david from "@/assets/David-Chen.jpg";
import priya from "@/assets/PriyaSharma.jpg";

// --- 2. DATA STRUCTURES ---

const galleryImages = [
  {
    src: sundeepPhoto,
    alt: "Leadership",
    title: "Visionary Leadership",
    description: "Spearheading global initiatives for the tech community.",
  },
  {
    src: wtitcHero,
    alt: "Global Network",
    title: "Strategic Networking",
    description: "Connecting Indian entrepreneurs with UAE decision-makers.",
  },
  {
    src: rasAlKhaimahImage,
    alt: "RAK Expansion",
    title: "Industrial Growth",
    description: "Expanding footprints across the Northern Emirates.",
  },
];

const benefits = [
  {
    icon: Building2,
    title: "International Company Setup",
    description: "100% ownership, 0% Income tax",
  },
  {
    icon: Clock,
    title: "Support",
    description: "Start your business in 48 hours",
  },
  {
    icon: TrendingUp,
    title: "Final Delivery",
    description: "Global brand visibility and media exposure",
  },
];

const locations = [
  { name: "Dubai", sectors: ["Fintech", "E-commerce", "Healthtech"], icon: MapPin, imageUrl: dubaiImage },
  { name: "Ras Al Khaimah", sectors: ["AgriTech", "Wellness", "Industry"], icon: MapPin, imageUrl: rasAlKhaimahImage },
  { name: "Sharjah", sectors: ["Education", "Creative Arts", "SaaS"], icon: MapPin, imageUrl: sharjahImage },
  { name: "Abu Dhabi", sectors: ["Oil & Gas", "Defense", "Clean Energy"], icon: MapPin, imageUrl: abudhabi },
  { name: "Fujairah", sectors: ["Logistics", "Maritime", "Tourism"], icon: MapPin, imageUrl: fujairah },
  { name: "Ajman", sectors: ["Real Estate", "Automotive", "Retail"], icon: MapPin, imageUrl: ajman },
  { name: "Umm Al Quwain", sectors: ["Free Zone", "Agriculture", "Leisure"], icon: MapPin, imageUrl: ummaiqawain },
];

const testimonials = [
  {
    name: "RAMY JALLAD",
    role: "CEO RAKEZ",
    quote: "The Hyderabad event brought together 150+ business leaders, showcasing the incredible potential for Indian businesses to expand in the UAE.",
    imageUrl: ramy
  },
  {
    name: "MOHAMMAD HASSEB",
    role: "Manager RAKEZ Groups",
    quote: "ExpandME has been instrumental in creating bridges between Indian entrepreneurs and global opportunities in the Middle East.",
    imageUrl: haz 
  },
  {
    name: "Priya Sharma",
    role: "Founder, InnovateSphere",
    quote: "ExpandME provided invaluable guidance for our market entry. Their expertise made a complex process seem effortless.",
    imageUrl: priya 
  },
  {
    name: "David Chen",
    role: "Director, Global Ventures",
    quote: "We've seen significant growth since partnering with ExpandME. Their strategic insights are a game-changer.",
    imageUrl: david 
  },
  {
    name: "Fatima Al-Mansoori",
    role: "Investor, Desert Bloom Capital",
    quote: "The team at ExpandME consistently identifies high-potential opportunities. Their commitment is evident.",
    imageUrl: fat
  },
  {
    name: "Carlos Rodriguez",
    role: "CEO, Horizon Tech",
    quote: "Navigating international regulations can be daunting, but ExpandME made it seamless. A trusted partner.",
    imageUrl: car 
  },
];

// --- 3. COMPONENT RENDER ---

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative rounded-lg overflow-hidden shadow-card mt-6 mx-4 sm:mx-6 md:mx-8 h-[500px] md:h-[650px]">
        <img
          src={heroDubai}
          alt="UAE Expansion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
              To Sell To The World, Start Your Shop In UAE
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
              Your expansion journey — one milestone at a time. From Local to Global Execution.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/918019577575?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                Expand with Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-gold transition-all duration-300 animate-slide-up border-2 border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Understanding Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={expansion}
                alt="Business Expansion Illustration"
                className="rounded-lg shadow-xl max-w-full h-auto lg:max-w-md xl:max-w-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Understand Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
                Your vision matters — and we&rsquo;re here to help bring it to life. Whether you're a rising startup or an established brand, ExpandME is ready to understand your journey. Share your business with us, and discover how ExpandME can turn your local ambition into global success.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Strategic Presence (Globe) */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Strategic Presence Across the UAE
          </h2>
          <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border-4 border-primary/20 h-[400px] flex items-center justify-center bg-white">
            <RotatingGlobe /> 
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            We guide your business expansion to key economic zones in Dubai, Ras Al Khaimah, and Sharjah, ensuring optimal market reach.
          </p>
        </div>
      </section>

      {/* 5. NEW: AUTO CAROUSEL GALLERY (Below Globe) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Camera className="text-primary h-8 w-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Global Journey <span className="text-primary">Gallery</span>
            </h2>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50 bg-white h-[400px] sm:h-[600px] relative max-w-6xl mx-auto">
            <AutoCarousel images={galleryImages} />
          </div>
          <p className="text-center text-muted-foreground mt-6 italic">
            Showcasing milestones of innovation and leadership across our global network.
          </p>
        </div>
      </section>
      
      {/* 6. Expansion Across Verticals (Locations) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Expansion Across Verticals
          </h2>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} 
            spaceBetween={32}
            loop={true} 
            navigation={true} 
            pagination={{ clickable: true }} 
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {locations.map((location, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Card className="p-8 hover:shadow-gold transition-all duration-300 border-2 border-primary/20 h-full">
                  {location.imageUrl && (
                    <div className="mb-6 rounded-lg overflow-hidden h-40">
                      <img
                        src={location.imageUrl}
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <MapPin className="h-8 w-8 text-primary mr-3" /> 
                    <h3 className="text-2xl font-bold">{location.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.sectors.map((sector, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Partners Say
          </h2>
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            loop={true} 
            navigation={true} 
            pagination={{ clickable: true }} 
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Card className="p-8 hover:shadow-gold transition-all duration-300 border-2 border-primary/20 flex flex-col items-center text-center h-full"> 
                  {testimonial.imageUrl && (
                    <div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 shadow-md">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <p className="text-lg mb-6 italic flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 8. Partners Trust Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Business Partner Trusted By The World's
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            To Sell To The World, Start Your Business In UAE
          </p>
          <div className="flex justify-center items-center space-x-4">
            <GlobeIcon className="h-16 w-16 text-primary" /> 
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;