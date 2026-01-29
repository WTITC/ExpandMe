import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import Scope from "./pages/Scope";
import ScrollToTop from "./components/ScrollToTop";


// 👇 IMPORT THE NEW ESSENCE COMPONENT
import Essence from "./pages/Essence"; 
import Blueprint from "./pages/Blueprint";
import Footprint from "./pages/Footprint";
import Alliescape from "./pages/Alliescape";
import Cocreate from "./pages/Cocreate";
import ImpactTales from "./pages/ImpactTales";
import Echoes from "./pages/Echoes";
import Chronos from "./pages/Chronos";
import Spotlight from "./pages/Spotlight";
import Wavelength from "./pages/Wavelength";
import PulseStream from "./pages/Pulsestream";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
        <Routes> 
          <Route path="/Expand-me/" element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          
          {/* Scope Subpages */}
          {/* 👇 REPLACED PLACEHOLDER WITH ESSENCE COMPONENT */}
          <Route path="/essence" element={<Essence />} /> 
          <Route path="/crew" element={<About />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/footprint" element={<Footprint />} />
          
          {/* Synergy Subpages */}
          <Route path="/alliescape" element={<Alliescape />} />
          <Route path="/impacttales" element={<ImpactTales />} />
          <Route path="/cocreate" element={<Cocreate />} />
          <Route path="/echoes" element={<Echoes />} />
          
          {/* Momentum Subpages */}
          <Route path="/chronos" element={<Chronos />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/wavelength" element={<Wavelength />} />
          <Route path="/pulsestream" element={<PulseStream />} />
          
          <Route path="/faq" element={<Placeholder title="FAQ's" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;