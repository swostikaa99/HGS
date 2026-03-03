import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import path from "path";

const Footer = () => (
  <footer className="bg-gradient-to-b from-navy-dark to-navy-dark/95 text-primary-foreground relative overflow-hidden">
    {/* Animated background elements */}
    <motion.div
      className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 20, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 25, repeat: Infinity, delay: 5 }}
    />

    <div className="container-custom py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold mb-4">
            HGS <span className="text-gold">&</span> Associates
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Trusted Chartered Accountants providing comprehensive financial
            services in Kathmandu, Nepal since 2005.
          </p>

          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/hgsassociates",
                  label: "Facebook",
                  color: "#1877F2",
                },
                {
                  icon: Instagram,
                  url: "https://www.instagram.com/hgsassociates",
                  label: "Instagram",
                  color: "#E4405F",
                },
                {
                  icon: MessageCircle,
                  url: "https://wa.me/9771234567890",
                  label: "WhatsApp",
                  color: "#25D366",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-colors border border-primary-foreground/20"
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0 0 20px ${social.color}40`,
                    backgroundColor: `${social.color}20`,
                    color: social.color,
                  }}
                  transition={{ duration: 0.3 }}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Industries", path: "/industries" },
              { name: "Team", path: "/team" },
              { name: "Careers", path: "/careers" },
            ].map((link) => (
              <motion.div
                key={link.path}
                className="group"
                whileHover={{ x: 4 }}
              >
                <Link
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <motion.span
                    className="text-primary-foreground/50 group-hover:text-gold"
                    animate={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={14} />
                  </motion.span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            {[
              { name: "Audit & Assurance", path: "/services/audit" },
              { name: "Tax Advisory", path: "/services/tax" },
              { name: "Financial Consulting", path: "/services/financial" },
              {
                name: "Business Registration",
                path: "/services/business-registration",
              },
              { name: "Risk Management", path: "/services/risk-management" },
            ].map((service) => (
              <motion.div
                key={service.path}
                className="group flex items-center gap-2"
                whileHover={{ x: 4 }}
              >
                <motion.span
                  className="text-primary-foreground/50 group-hover:text-gold"
                  animate={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={14} />
                </motion.span>
                <Link
                  to={service.path}
                  className="group-hover:text-gold transition-colors"
                >
                  {service.name}
                </Link>
              </motion.div>
            ))}
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
              <span>+977-1-555-1126</span>
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

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 flex-wrap">
        <div className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} HGS & Associates. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-primary-foreground/50">
          <motion.a
            href="/terms"
            className="hover:text-gold transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Terms & Conditions
          </motion.a>
          <span className="text-primary-foreground/30">|</span>
          <motion.a
            href="/privacy"
            className="hover:text-gold transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Privacy Policy
          </motion.a>
        </div>
        <motion.div
          className="text-sm text-primary-foreground/50 flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          Powered by{" "}
          <motion.a
            href="https://www.anoopinnovations.com"
            className="text-gold hover:underline font-semibold"
            whileHover={{ color: "#FFD700" }}
            transition={{ duration: 0.2 }}
          >
            Anoop Innovations
          </motion.a>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;
