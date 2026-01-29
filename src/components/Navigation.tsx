import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button"; 
import { ChevronDown, Menu, X } from "lucide-react";
import Expandme from "@/assets/Expand-me-logo.png";

// Define the types for navigation items
interface NavItem {
  label: string;
  path: string;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  // ... navItems array remains the same
  { label: "Origin", path: "/" },
  {
    label: "Scope",
    path: "/scope",
    dropdown: [
      { label: "Essence", path: "/essence" },
      { label: "Crew", path: "/crew" },
      { label: "Blueprint", path: "/blueprint" },
      { label: "Footprint", path: "/footprint" },
    ],
  },
  {
    label: "Synergy",
    path: "/services",
    dropdown: [
      { label: "Alliescape", path: "/alliescape" },
      { label: "Impact Tales", path: "/impacttales" },
      { label: "CoCreate", path: "/cocreate" },
      { label: "Echoes", path: "/echoes" },
    ],
  },
  {
    label: "Momentum",
    path: "/blog",
    dropdown: [
      { label: "Chronos", path: "/chronos" },
      { label: "Spotlight", path: "/spotlight" },
      { label: "Wavelength", path: "/wavelength" },
      { label: "PulseStream", path: "/pulsestream" },
    ],
  },
  { label: "Expansion Request", path: "/contact" },
];

// --- Custom Colors ---
const DEEP_BLUE_BG = "bg-blue-900"; 
const BRIGHT_GOLD_TEXT_CLASS = "text-yellow-400";
const BRIGHT_GOLD_HOVER_TEXT_CLASS = "hover:text-yellow-400";
const BRIGHT_GOLD_SHADOW_CLASS = "shadow-[0_0_10px_rgba(250,204,21,0.6)]";

// GOLD BOX EFFECT CLASSES
const BRIGHT_GOLD_BOX_CLASS = "bg-yellow-400 text-black rounded-md";
const BRIGHT_GOLD_HOVER_BOX_CLASS = "hover:bg-yellow-400 hover:text-black";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // NEW STATE: Tracks the path of the currently open mobile dropdown
  const [openDropdownPath, setOpenDropdownPath] = useState<string | null>(null);
  const location = useLocation();
  
  const isCta = (item: NavItem) => item.label === "Expansion Request";
  
  // CTA classes
  const ctaClasses = `bg-primary text-primary-foreground font-extrabold ${BRIGHT_GOLD_SHADOW_CLASS} hover:bg-primary/90 rounded-lg px-4 transition-colors duration-200`;

  // Helper to handle the dropdown toggle logic
  const toggleMobileDropdown = (path: string) => {
    setOpenDropdownPath(openDropdownPath === path ? null : path);
  };
  
  // Helper to handle link clicks, closing both menu and dropdown
  const handleLinkClick = (isDropdownLink: boolean) => {
    // Only close the mobile menu if the item is NOT a top-level item with a dropdown (unless it's a CTA)
    // For dropdown links (sub-items), we always close the whole menu.
    if (isDropdownLink || !mobileMenuOpen) {
        setMobileMenuOpen(false);
        setOpenDropdownPath(null); // Close the dropdown as well
    }
  };


  return (
    <nav 
      className={`bg-gray-900 fixed top-0 w-full z-50`} 
    >
      <div className="px-5"> 
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 h-full">
            <img src={Expandme} alt="Expand Me Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation (REMAINS UNCHANGED) */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto mr-6">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 py-2 px-3 font-medium transition-colors duration-200 ${
                    isCta(item) 
                      ? ctaClasses + " py-3" 
                      : location.pathname === item.path
                        ? `${BRIGHT_GOLD_BOX_CLASS} font-bold` // Active link gold box
                        : `text-white ${BRIGHT_GOLD_HOVER_BOX_CLASS} rounded-md` // Hover gold box
                  }`}
                >
                  <span>{item.label}</span>
                  {!isCta(item) && item.dropdown && (
                    <ChevronDown 
                      className={`h-4 w-4 transition-colors duration-200 ${
                        location.pathname === item.path 
                          ? 'text-black' 
                          : 'text-white group-hover:text-black' 
                      }`} 
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className={`bg-card border border-border rounded-lg ${BRIGHT_GOLD_SHADOW_CLASS} overflow-hidden z-50`}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm text-foreground hover:bg-primary/10 ${BRIGHT_GOLD_HOVER_TEXT_CLASS} transition-colors duration-200`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                // Close dropdown when closing the main menu
                if (mobileMenuOpen) setOpenDropdownPath(null); 
            }}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${BRIGHT_GOLD_TEXT_CLASS}`} />
            ) : (
              <Menu className={`h-6 w-6 ${BRIGHT_GOLD_TEXT_CLASS}`} />
            )}
          </button>
        </div>

        {/* --- MOBILE MENU (UPDATED) --- */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.path} className="py-2">
                <div className="flex justify-between items-center"> {/* New wrapper for link + toggle button */}
                    <Link
                      to={item.path}
                      className={`flex-grow py-2 px-3 font-medium rounded-md transition-colors duration-200 ${
                        isCta(item) 
                          ? "w-full text-center " + ctaClasses + " py-3"
                          : location.pathname === item.path
                            ? BRIGHT_GOLD_BOX_CLASS 
                            : `text-white ${BRIGHT_GOLD_HOVER_BOX_CLASS}` 
                      }`}
                      onClick={() => handleLinkClick(item.dropdown === undefined)} // If no dropdown, close menu
                    >
                      {item.label}
                    </Link>

                    {/* Dropdown Toggle Button */}
                    {item.dropdown && (
                        <button
                            className={`p-2 ml-2 rounded-md transition-colors duration-200 ${
                                openDropdownPath === item.path
                                ? BRIGHT_GOLD_BOX_CLASS
                                : `text-white ${BRIGHT_GOLD_HOVER_BOX_CLASS}` 
                            }`}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent link click if it were a link
                                toggleMobileDropdown(item.path);
                            }}
                        >
                            {openDropdownPath === item.path ? (
                                <X className="h-5 w-5 text-black" />
                            ) : (
                                <ChevronDown className="h-5 w-5" />
                            )}
                        </button>
                    )}
                </div>

                {/* Mobile Dropdown List (CONDITIONAL RENDERING) */}
                {item.dropdown && openDropdownPath === item.path && (
                  <div className="ml-4 mt-2 space-y-2 border-l border-primary/50 pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`block py-2 text-sm text-gray-200 ${BRIGHT_GOLD_HOVER_TEXT_CLASS}`} 
                        onClick={() => handleLinkClick(true)} // Always close menu on sub-item click
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;