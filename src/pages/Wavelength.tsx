import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Zap, Activity, BookOpen, Clock, Tag, Search, DollarSign, Map, Handshake, LucideIcon } from "lucide-react"; // Import all required icons and LucideIcon type
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single article/content item
interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  link: string;
  icon: LucideIcon;
}

// --- 2. DATA STRUCTURES (Typed) ---
const articles: Article[] = [
  {
    title: "Understanding the UAE's Corporate Tax Landscape (0% vs 9%)",
    category: "Compliance",
    date: "Oct 25, 2024",
    readTime: "7 min",
    excerpt: "A deep dive into the legal nuances between mainland and Free Zone corporate tax rates and how to achieve genuine zero tax.",
    link: "#article-1",
    icon: DollarSign,
  },
  {
    title: "The Strategic Advantage of RAKEZ for Indian E-commerce",
    category: "Market Entry",
    date: "Oct 10, 2024",
    readTime: "5 min",
    excerpt: "Why the Ras Al Khaimah Economic Zone offers the best balance of cost efficiency and logistical access for cross-border trade.",
    link: "#article-2",
    icon: Map,
  },
  {
    title: "48-Hour Setup: Fact vs. Fiction in Dubai Company Formation",
    category: "Process",
    date: "Sep 18, 2024",
    readTime: "6 min",
    excerpt: "We break down the critical steps and documentation required to achieve an ultra-fast, compliant company launch.",
    link: "#article-3",
    icon: Zap,
  },
  {
    title: "Mitigating Risk: The Importance of a Vetted Alliescape",
    category: "Strategy",
    date: "Aug 30, 2024",
    readTime: "8 min",
    excerpt: "Our guide on choosing banking, legal, and government partners to ensure your global expansion is truly zero-risk.",
    link: "#article-4",
    icon: Handshake,
  },
];


// --- 3. THE COMPONENT (Typed) ---
const Wavelength: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-36 pb-28 bg-gradient-hero text-background rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Activity className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in text-white">
              On the **Wavelength**
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Zero-risk expansion starts with expert knowledge. Stay current with our thought leadership on global compliance, strategy, and market trends.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="hero" size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                  <Link to="/contact">Subscribe to Newsletter</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                  <Link to="/spotlight">View Press Mentions</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      ---

      {/* Content Grid & Sidebar */}
      <section className="py-24 bg-white"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Main Content Area (3/4 width) */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-10 border-b-2 border-primary/10 pb-2"> {/* Increased mb-8 to mb-10 */}
                Latest **Insights**
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-10"> {/* Increased gap-8 to gap-10 */}
                {articles.map((article, index) => (
                  <Card 
                    key={index}
                    className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden"
                  >
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary flex items-center">
                                <Tag className="h-3 w-3 mr-1" /> {article.category}
                            </span>
                            <span className="text-sm text-muted-foreground flex items-center">
                                <Clock className="h-4 w-4 mr-1" /> {article.readTime}
                            </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors duration-200">
                          {article.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                            {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <span className="text-xs text-gray-500">{article.date}</span>
                            <Button variant="link" className="p-0 text-primary font-bold" asChild>
                                <a href={article.link}>Read Article →</a>
                            </Button>
                        </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Pagination Placeholder */}
              <div className="mt-16 text-center"> {/* Increased mt-12 to mt-16 */}
                <Button variant="outline">Load More Articles</Button>
              </div>

            </div>

            {/* Sidebar (1/4 width) */}
            <aside className="lg:col-span-1 space-y-10"> {/* Increased space-y-8 to space-y-10 */}
              
              {/* Search Widget */}
              <Card className="p-6 shadow-md">
                <h4 className="text-lg font-bold mb-4">Search Insights</h4>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        type="text" 
                        placeholder="Search topics..." 
                        className="pl-10"
                    />
                </div>
              </Card>
              
              {/* Categories Widget */}
              <Card className="p-6 shadow-md">
                <h4 className="text-lg font-bold mb-4">Top Categories</h4>
                <ul className="space-y-3 text-sm"> {/* Increased space-y-2 to space-y-3 */}
                    {["Compliance (4)", "Market Entry (6)", "Strategy (10)", "Case Studies (5)"].map((cat, i) => (
                        <li key={i}>
                            <a href="#" className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium">
                                <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" /> {cat}
                            </a>
                        </li>
                    ))}
                </ul>
              </Card>
              
              {/* CTA Widget */}
              <Card className="p-6 bg-primary text-white shadow-xl text-center">
                <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">Need Direct Advice?</h4>
                <p className="text-sm mb-4">Don't wait for the next article. Talk to our experts now.</p>
                <Button variant="secondary" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                    <Link to="/contact">Get a Consultation</Link>
                </Button>
              </Card>

            </aside>
          </div>
        </div>
      </section>

      ---

      {/* Footer CTA */}
      <section className="py-16 bg-gray-100 text-center"> {/* Increased py-12 to py-16 */}
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6"> {/* Increased mb-4 to mb-6 */}
            Never Miss an Update
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"> {/* Increased mb-6 to mb-8 */}
            Get the latest zero-tax insights and compliance news delivered straight to your inbox.
          </p>
          {/* Simple Subscription Form Placeholder */}
          <div className="flex justify-center max-w-lg mx-auto space-x-3"> {/* Increased space-x-2 to space-x-3 */}
            <Input type="email" placeholder="Enter your email address" className="flex-grow" />
            <Button variant="default">Subscribe</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wavelength;