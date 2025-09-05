import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Courses", href: "#courses" },
    { label: "Faculty", href: "#" },
    { label: "Results", href: "#" },
    { label: "Admissions", href: "#" },
    { label: "Contact", href: "#contact" }
  ];

  const courses = [
    { label: "JEE Main & Advanced", href: "#" },
    { label: "NEET Preparation", href: "#" },
    { label: "Class 10 CBSE", href: "#" },
    { label: "Class 12 CBSE", href: "#" },
    { label: "Foundation Course", href: "#" },
    { label: "English & Communication", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/d1f24f8d-8afa-4cbc-8bb6-d29d33e4f428.png" 
                alt="Studify Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 leading-relaxed">
              Excellence in education through personalized coaching, expert faculty, and proven methodologies. Building the future, one student at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">123 Education Street, Knowledge Park, New Delhi</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">info@studify.edu.in</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-smooth"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-background/80 text-sm mb-4">
              Subscribe to our newsletter for the latest updates, exam tips, and educational content.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="secondary" size="sm" className="w-full group">
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Studify Educational Institute. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;