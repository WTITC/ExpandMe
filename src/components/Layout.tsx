import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Fixed navigation */}
      <Navigation />
      
      {/* Add padding-top to offset fixed header height */}
      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;