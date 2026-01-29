import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "Work", path: "/services" },
    { label: "Case Studies", path: "/impact-tales" },
    { label: "Gallery", path: "/spotlight" },
    { label: "Company", path: "/about" },
    { label: "FAQ's", path: "/faq" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-hero text-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            TO SELL TO THE WORLD START YOUR BUSINESS IN UAE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              ExpandME
            </h3>
            <p className="text-background/80">
              Your trusted partner for global business expansion from India to UAE and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <a
                href="mailto:maddukuriyamini@gmail.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>maddukuriyamini@gmail.com</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>
            Copyright © 2020 ExpandME softland to middle east, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
