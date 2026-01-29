import React from 'react'; // Import React for TSX
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Zap, Clock, TrendingUp, Shield, Users, Globe, DollarSign, Activity, Award, Rocket, LucideIcon } from "lucide-react"; // Import all required icons and LucideIcon type
import { Link } from "react-router-dom";

// --- 1. INTERFACE DEFINITIONS ---

// Interface for a single Key Performance Indicator (KPI)
interface Kpi {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

// Interface for a single activity feed item
interface ActivityItem {
    type: string;
    text: string;
    icon: LucideIcon;
    color: string;
    // timestamp field has been removed
}

// --- 2. DATA STRUCTURES (Typed) ---
const kpis: Kpi[] = [
  {
    title: "Global Compliance Rate",
    value: "99.8%",
    description: "Average success rate for initial license and regulatory approvals across all jurisdictions.",
    icon: Shield,
    color: "text-green-500",
  },
  {
    title: "Average Setup Speed",
    value: "5.1 Days",
    description: "The mean time from document submission to full company registration and license issuance.",
    icon: Clock,
    color: "text-yellow-500",
  },
  {
    title: "Zero-Tax Structuring",
    value: "100%",
    description: "Percentage of eligible clients successfully achieving 0% corporate tax structure.",
    icon: DollarSign,
    color: "text-blue-500",
  },
  {
    title: "Active Expansion Projects",
    value: "15+",
    description: "Current number of executive teams actively moving through the Expansion Blueprint process.",
    icon: Activity,
    color: "text-indigo-500",
  },
];

const activityFeed: ActivityItem[] = [
    // Removed the 'timestamp' key from all objects
    { type: "Success", text: "New company license secured for 'Apex FinTech' in ADGM.", icon: Award, color: "text-green-500" },
    { type: "Milestone", text: "Client 'Quantum Systems' initiated Phase 3: Banking & Visas.", icon: Users, color: "text-blue-500" },
    { type: "Compliance", text: "UAE VAT registration completed for 'EcomNext'.", icon: Shield, color: "text-yellow-500" },
    { type: "Success", text: "Fast-track license issued for 'Innovate Health' in DMCC.", icon: Rocket, color: "text-red-500" },
    { type: "Milestone", text: "Blueprint development started for 'GlobalServe Logistics'.", icon: Clock, color: "text-indigo-500" },
];

// --- 3. THE COMPONENT (Typed) ---
const PulseStream: React.FC = () => {
  return (
    <Layout>
      {/* *** FIX APPLIED HERE ***: Added an outer div to create the required top and side margins */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="pt-36 pb-28 bg-gray-900 text-white border-b-4 border-primary/50 rounded-lg overflow-hidden" // Added rounded-lg and overflow-hidden for consistency
        >
          <div className="container mx-auto px-4 text-center">
            <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300 animate-pulse" /> {/* Increased mb-4 to mb-6 */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
              **PulseStream** | Operational Metrics
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/70 animate-slide-up">
              Transparency in motion. See the real-time operational metrics and activity feed that drive our zero-risk, high-speed expansion process.
            </p>
            <p className="text-sm mt-6 text-yellow-400"> {/* Increased mt-4 to mt-6 */}
              Last Updated: {new Date().toLocaleTimeString()} (Simulated Live Data)
            </p>
          </div>
        </section>
      </div>

      ---

      {/* KPI Grid Section */}
      <section className="py-24 bg-secondary/30"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16"> {/* Increased mb-12 to mb-16 */}
            Key Performance **Indicators** (KPIs)
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap-8 to gap-10 */}
            {kpis.map((kpi, index) => (
              <Card
                key={index}
                className="p-6 shadow-xl border-l-4 border-primary/50 transition-shadow duration-300 hover:shadow-2xl flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                    {/* TypeScript handles component props here */}
                    <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
                    <span className={`text-4xl font-extrabold ${kpi.color}`}>{kpi.value}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{kpi.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{kpi.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      ---

      {/* Activity Feed and Global Map (Two Columns) */}
      <section className="py-24 bg-white"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16"> {/* Increased gap-12 to gap-16 */}
            
            {/* Left Column: Recent Activity Feed */}
            <div>
              <h2 className="text-3xl font-bold mb-10 border-b-2 border-primary/10 pb-2"> {/* Increased mb-8 to mb-10 */}
                Recent **Activity Feed**
              </h2>
              <div className="space-y-6"> {/* Increased space-y-4 to space-y-6 */}
                {activityFeed.map((activity, index) => (
                    <div 
                        key={index}
                        className="flex items-start p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {/* TypeScript handles component props here */}
                        <activity.icon className={`h-6 w-6 mr-4 flex-shrink-0 ${activity.color}`} />
                        <div>
                            <p className="font-semibold text-foreground">
                                <span className={`uppercase text-xs font-bold mr-1 ${activity.color}`}>{activity.type}:</span>
                                {activity.text}
                            </p>
                            {/* Removed the timestamp rendering line: 
                            <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p> 
                            */}
                        </div>
                    </div>
                ))}
              </div>
              <div className="mt-10"> {/* Increased mt-8 to mt-10 */}
                <Button variant="link" className="text-primary font-bold" asChild>
                    <Link to="/impact-tales">View Full Success Log →</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Global Reach Visualization */}
            <div>
              <h2 className="text-3xl font-bold mb-10 border-b-2 border-primary/10 pb-2"> {/* Increased mb-8 to mb-10 */}
                Our **Global Reach**
              </h2>
              <Card className="p-8 h-96 flex flex-col items-center justify-center bg-secondary/50 text-muted-foreground text-center shadow-xl">
                <Globe className="h-16 w-16 mb-4 text-primary" />
                <p className="text-lg font-semibold mb-2">
                    Visualization Placeholder: Global Expansion Map
                </p>
                <p className="text-sm">
                    Showing current client presence and active expansion target zones (UAE, KSA, UK, Singapore).
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 text-white text-center"> {/* Increased py-20 to py-24 */}
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-300"> {/* Increased mb-6 to mb-8 */}
            Make Your Business the Next Data Point
          </h3>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto"> {/* Increased mb-8 to mb-10 */}
            Ready to contribute to our success metrics? Start your expansion today with the team that delivers speed and compliance.
          </p>
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://wa.me/918019577575?text=I%20want%20to%20be%20the%20next%20successful%20entry%20on%20PulseStream.">
                Start My Expansion Request
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PulseStream;