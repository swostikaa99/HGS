import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
} from "@/components/AnimationWrappers";
import {
  Shield,
  FileText,
  TrendingUp,
  Building2,
  BookOpen,
  BarChart3,
  ChevronDown,
  Target,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import serviceImage from "@/assets/service.png";

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

    {/* Featured Services Image Section */}
    <section className="section-padding ">
      <div className="container-custom">
        <Reveal direction="left" delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-gold/20 pointer-events-none z-10" />

            {/* Golden border effect */}
            <div className="absolute inset-0 border-2 border-gradient-to-r from-gold via-accent to-gold opacity-40 rounded-2xl pointer-events-none z-20" />

            {/* Image */}
            <motion.img
              src={serviceImage}
              alt="Our Services"
              className="w-full h-90 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />

            {/* Floating accent shapes */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/30 to-gold/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-gold/30 to-accent/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-padding -mt-20">
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

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </div>
      <FloatingShapes
        shapes={[
          {
            variant: "circle",
            size: 100,
            x: 10,
            y: 20,
            delay: 0,
            duration: 9,
            className: "opacity-10",
          },
          {
            variant: "ring",
            size: 150,
            x: 85,
            y: 50,
            delay: 1,
            duration: 11,
            className: "opacity-10",
          },
          {
            variant: "diamond",
            size: 40,
            x: 70,
            y: 15,
            delay: 2,
            duration: 8,
          },
        ]}
      />
      <div className="container-custom text-center relative z-10">
        <Reveal direction="scale">
          <motion.h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
            Ready to Transform Your{" "}
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-orange-400">
              Financial Future?
            </motion.span>
          </motion.h2>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg font-light tracking-wide">
            Our expert team is ready to provide tailored solutions for your
            business needs.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <MagneticButton>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="btn-accent inline-flex items-center gap-2 shadow-2xl hover:shadow-3xl hover:shadow-accent/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Target size={18} />
                  Get Started Today
                </span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Services;
