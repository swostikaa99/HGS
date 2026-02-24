import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { StaggerContainer, StaggerItem } from "@/components/AnimationWrappers";
import {
  Landmark,
  Factory,
  ShoppingCart,
  Heart,
  Rocket,
  Hotel,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Specialized audit, compliance, and advisory services for financial institutions, banks, and microfinance companies.",
    services: [
      "Regulatory Compliance Audits",
      "Risk Assessment",
      "Financial Reporting",
      "Internal Controls Review",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Cost accounting, statutory audits, and operational efficiency consulting for manufacturing businesses.",
    services: [
      "Cost Accounting",
      "Production Audits",
      "Supply Chain Advisory",
      "Quality Assurance",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail & Trade",
    desc: "Inventory management advisory, tax planning, and financial reporting for retail enterprises.",
    services: [
      "Inventory Audits",
      "Tax Planning",
      "Sales Analysis",
      "Expansion Strategy",
    ],
  },
  {
    icon: Heart,
    title: "NGOs / INGOs",
    desc: "Project audits, donor compliance reporting, and financial management for non-profit organizations.",
    services: [
      "Project Audits",
      "Donor Reporting",
      "Grant Management",
      "Compliance Audits",
    ],
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    desc: "Business registration, financial structuring, and growth advisory for emerging businesses.",
    services: [
      "Business Setup",
      "Financial Planning",
      "Growth Strategy",
      "Funding Support",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality & Tourism",
    desc: "Revenue audit, tax compliance, and financial consulting for hotels, resorts, and tourism businesses.",
    services: [
      "Revenue Audits",
      "Occupancy Analysis",
      "Tax Compliance",
      "Profitability Review",
    ],
  },
];

const Industries = () => (
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
          Sector Expertise
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Industries We Serve
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
        >
          Deep sector expertise across Nepal's diverse economic landscape.
        </motion.p>
      </div>
    </section>

    <section className="section-padding bg-primary-foreground/5">
      <div className="container-custom">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {industries.map((ind) => (
            <StaggerItem key={ind.title} direction="scale">
              <motion.div
                whileHover={{ y: -8 }}
                className="card-elevated p-8 group h-full flex flex-col relative overflow-hidden"
              >
                {/* Golden gradient top line */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-accent to-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent group-hover:to-accent/80 group-hover:shadow-lg flex items-center justify-center mx-auto mb-5 transition-all duration-500 relative z-10">
                  <ind.icon
                    className="text-accent group-hover:text-accent-foreground transition-colors duration-300"
                    size={34}
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 relative z-10">
                  {ind.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10 flex-grow">
                  {ind.desc}
                </p>

                <div className="space-y-2 relative z-10 pt-4 border-t border-accent/20">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                    Our Services
                  </p>
                  {ind.services.map((service, idx) => (
                    <motion.div
                      key={service}
                      className="flex items-start gap-2 text-sm text-primary group-hover:text-gold transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <CheckCircle
                        size={14}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      {service}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </Layout>
);

export default Industries;
