import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-gradient text-primary-foreground">
    <div className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold mb-4">
            HGS <span className="text-gold">&</span> Associates
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Trusted Chartered Accountants providing comprehensive financial services in Kathmandu, Nepal since 2005.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Industries", path: "/industries" },
              { name: "Team", path: "/team" },
              { name: "Careers", path: "/careers" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <span>Audit & Assurance</span>
            <span>Tax Advisory</span>
            <span>Financial Consulting</span>
            <span>Business Registration</span>
            <span>Risk Management</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
              <span>Putalisadak, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gold shrink-0" />
              <span>+977-1-4XXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gold shrink-0" />
              <span>info@hgsassociates.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gold shrink-0" />
              <span>Sun–Fri: 10 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} HGS & Associates. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
