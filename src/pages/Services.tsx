import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, FileText, TrendingUp, Building2, BookOpen, BarChart3, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: Shield, title: "Audit & Assurance",
    desc: "Our audit and assurance services provide stakeholders with the confidence that financial statements are accurate and reliable.",
    details: "We conduct statutory audits, internal audits, compliance audits, and special purpose audits. Our team follows International Standards on Auditing (ISA) and Nepal Standards on Auditing (NSA) to deliver comprehensive and reliable assurance services.",
  },
  {
    icon: FileText, title: "Tax Advisory & Compliance",
    desc: "Strategic tax planning and compliance services to optimize your tax position and ensure regulatory compliance.",
    details: "Our tax services include corporate tax planning, VAT compliance, transfer pricing, tax dispute resolution, and international tax advisory. We help businesses minimize tax liabilities while staying fully compliant with Nepal's tax laws.",
  },
  {
    icon: TrendingUp, title: "Financial Consulting",
    desc: "Expert financial guidance to help businesses make informed decisions and achieve sustainable growth.",
    details: "We offer financial feasibility studies, business valuation, mergers & acquisitions advisory, financial restructuring, and capital raising support. Our consultants bring deep industry expertise to every engagement.",
  },
  {
    icon: Building2, title: "Business Registration",
    desc: "End-to-end company incorporation and registration services for domestic and international businesses.",
    details: "We handle company registration with the Office of Company Registrar, PAN/VAT registration, industry registration, foreign investment approvals, and ongoing regulatory compliance. We make starting a business in Nepal seamless.",
  },
  {
    icon: BookOpen, title: "Accounting & Bookkeeping",
    desc: "Professional accounting and bookkeeping services to keep your financial records accurate and up-to-date.",
    details: "Our services include day-to-day bookkeeping, financial statement preparation, payroll processing, accounts receivable/payable management, and management reporting. We use modern accounting software for efficiency and accuracy.",
  },
  {
    icon: BarChart3, title: "Risk Management",
    desc: "Identifying, assessing, and mitigating financial and operational risks for your business.",
    details: "We provide enterprise risk management, internal control assessments, fraud risk assessments, regulatory risk advisory, and business continuity planning. Our proactive approach helps safeguard your organization.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card-elevated overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
          <service.icon className="text-accent" size={24} />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          {expanded ? "Show Less" : "Learn More"}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-0 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed pt-4">{service.details}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => (
  <Layout>
    <section className="page-hero pt-32 pb-16">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl sm:text-5xl font-bold mb-4"
        >
          Our Services
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Comprehensive financial solutions designed to help your business thrive.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
