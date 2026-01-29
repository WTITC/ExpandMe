import React from 'react'; // Import React for TSX
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Calendar, TrendingUp, Users, Newspaper, Globe, LucideIcon } from "lucide-react"; // Import LucideIcon type

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single blog post item
interface BlogPost {
  icon: LucideIcon;
  title: string;
  excerpt: string;
  date: string;
}

// --- 2. DATA STRUCTURES (Typed) ---

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      icon: TrendingUp,
      title: "Why Indian Startups Are Expanding to the UAE",
      excerpt:
        "Discover the key reasons why UAE has become the preferred destination for Indian entrepreneurs looking to scale globally.",
      date: "March 15, 2024",
    },
    {
      icon: Globe,
      title: "How to Set Up Your Business in the UAE (Simple Guide)",
      excerpt:
        "A step-by-step guide to establishing your business in the UAE with 100% ownership and 0% tax.",
      date: "March 10, 2024",
    },
    {
      icon: Users,
      title: "Success Stories of Businesses Growing with ExpandME",
      excerpt:
        "Real stories from entrepreneurs who transformed their businesses through global expansion.",
      date: "March 5, 2024",
    },
    {
      icon: Newspaper,
      title: "Top Business Sectors Thriving in the UAE (2025)",
      excerpt:
        "Explore the most promising sectors for business growth in the UAE this year.",
      date: "February 28, 2024",
    },
    {
      icon: Calendar,
      title: "ExpandME Events & Community",
      excerpt:
        "Join our upcoming events and connect with fellow entrepreneurs on their expansion journey.",
      date: "February 20, 2024",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              ExpandME Blog
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-background/90 animate-slide-up">
              Insights, guides, and success stories to help you expand globally
            </p>
          </div>
        </section>
      </div>

      ---

      {/* Blog Posts */}
      <section className="py-24"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-primary/20 pb-2">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap-8 to gap-10 */}
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="p-8 shadow-lg hover:shadow-gold transition-all duration-300 animate-scale-in border-2 border-primary/20 flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* TypeScript correctly handles component props here */}
                <post.icon className="h-10 w-10 text-primary mb-4" />
                <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{post.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p> {/* Increased mb-4 to mb-6 */}
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8"> {/* Increased mb-6 to mb-8 */}
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Subscribe to our newsletter and follow us on social media for **exclusive global expansion updates**.
          </p>
          <div className="max-w-md mx-auto">
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="/contact">Subscribe Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;