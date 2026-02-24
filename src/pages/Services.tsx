import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimationWrappers";
import {
  Shield,
  FileText,
  TrendingUp,
  Building2,
  BookOpen,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: Shield,
    title: "Audit & Assurance",
    desc: "Our audit and assurance services provide stakeholders with the confidence that financial statements are accurate and reliable.",
    details:
      "We conduct statutory audits, internal audits, compliance audits, and special purpose audits. Our team follows International Standards on Auditing (ISA) and Nepal Standards on Auditing (NSA) to deliver comprehensive and reliable assurance services.",
  },
  {
    icon: FileText,
    title: "Tax Advisory & Compliance",
    desc: "Strategic tax planning and compliance services to optimize your tax position and ensure regulatory compliance.",
    details:
      "Our tax services include corporate tax planning, VAT compliance, transfer pricing, tax dispute resolution, and international tax advisory. We help businesses minimize tax liabilities while staying fully compliant with Nepal's tax laws.",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    desc: "Expert financial guidance to help businesses make informed decisions and achieve sustainable growth.",
    details:
      "We offer financial feasibility studies, business valuation, mergers & acquisitions advisory, financial restructuring, and capital raising support. Our consultants bring deep industry expertise to every engagement.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    desc: "End-to-end company incorporation and registration services for domestic and international businesses.",
    details:
      "We handle company registration with the Office of Company Registrar, PAN/VAT registration, industry registration, foreign investment approvals, and ongoing regulatory compliance. We make starting a business in Nepal seamless.",
  },
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    desc: "Professional accounting and bookkeeping services to keep your financial records accurate and up-to-date.",
    details:
      "Our services include day-to-day bookkeeping, financial statement preparation, payroll processing, accounts receivable/payable management, and management reporting. We use modern accounting software for efficiency and accuracy.",
  },
  {
    icon: BarChart3,
    title: "Risk Management",
    desc: "Identifying, assessing, and mitigating financial and operational risks for your business.",
    details:
      "We provide enterprise risk management, internal control assessments, fraud risk assessments, regulatory risk advisory, and business continuity planning. Our proactive approach helps safeguard your organization.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-elevated overflow-hidden group relative h-full flex flex-col">
      {/* Golden gradient top line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-accent to-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-7 flex flex-col flex-grow">
        <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-all duration-300">
          <service.icon
            className="text-accent group-hover:scale-110 transition-transform duration-300"
            size={26}
          />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {service.desc}
        </p>
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ x: 3 }}
          className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-auto"
        >
          {expanded ? "Show Less" : "Learn More"}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="overflow-hidden"
      >
        <div className="px-7 pb-7 pt-0 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed pt-5">
            {service.details}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => (
  <Layout>
    <section className="page-hero pt-32 pb-16 relative">
      <FloatingShapes shapes={pageHeroShapes} />
      <div className="container-custom text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block bg-gold/15 backdrop-blur-sm text-gold px-5 py-2 rounded-full text-sm font-medium mb-6 border border-gold/20"
        >
          What We Offer
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
        >
          Comprehensive financial solutions designed to help your business
          thrive.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {services.map((s, i) => (
            <StaggerItem key={s.title}>
              <ServiceCard service={s} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </Layout>
);

export default Services;
