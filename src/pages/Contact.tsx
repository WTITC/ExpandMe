import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Phone, Mail, MessageCircle, FileText, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 80195 77575",
      link: "tel:+918019577575",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "expandmeglobal@gmail.com",
      link: "mailto:expandmeglobal@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Chat on WhatsApp",
      link: "https://wa.me/918019577575",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="mt-6 mx-4 sm:mx-6 md:mx-8">
        <section 
          className="py-20 bg-gradient-hero text-background rounded-lg overflow-hidden"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              Contact Us — Tell Us About Your Project
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-white/90 animate-slide-up">
              Ready to expand globally? Let's discuss your vision.
            </p>
          </div>
        </section>
      </div>

      {/* Contact Methods Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-gold transition-all duration-300 animate-scale-in border-2 border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <method.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <a
                  href={method.link}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {method.detail}
                </a>
              </Card>
            ))}
          </div>

          {/* New CTA Section instead of Registration Form */}
          <div className="max-w-3xl mx-auto text-center">
            <Card className="p-10 md:p-16 border-2 border-dashed border-primary/40 bg-secondary/10 shadow-lg">
              <div className="flex justify-center mb-6">
                <FileText className="h-16 w-16 text-primary animate-bounce" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Start Your Expansion Journey</h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                If you are interested in scaling your business to the UAE or looking for 
                zero-risk global compliance structures, we want to hear from you. 
                Please fill out our official project inquiry form to help us understand 
                your requirements better.
              </p>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto px-12 py-7 text-xl font-bold rounded-full transition-transform hover:scale-105 shadow-gold"
                  asChild
                >
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSctf78X-pe3MrLUYMLNtrIsrzdoeIomtDt9pywAGYmNT1fCAQ/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    Click Here for Response <ArrowRight className="h-6 w-6" />
                  </a>
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Estimated time to complete: 2 minutes
                </p>
              </div>
            </Card>

            <div className="mt-12 text-muted-foreground">
              <p>Once submitted, our strategy team will review your details and 
              contact you within 24-48 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;