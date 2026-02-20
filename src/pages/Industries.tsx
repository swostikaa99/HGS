import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { StaggerContainer, StaggerItem } from "@/components/AnimationWrappers";
import { Landmark, Factory, ShoppingCart, Heart, Rocket, Hotel } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: Landmark, title: "Banking & Finance", desc: "Specialized audit, compliance, and advisory services for financial institutions, banks, and microfinance companies." },
  { icon: Factory, title: "Manufacturing", desc: "Cost accounting, statutory audits, and operational efficiency consulting for manufacturing businesses." },
  { icon: ShoppingCart, title: "Retail", desc: "Inventory management advisory, tax planning, and financial reporting for retail enterprises." },
  { icon: Heart, title: "NGOs / INGOs", desc: "Project audits, donor compliance reporting, and financial management for non-profit organizations." },
  { icon: Rocket, title: "Startups", desc: "Business registration, financial structuring, and growth advisory for emerging businesses." },
  { icon: Hotel, title: "Hospitality", desc: "Revenue audit, tax compliance, and financial consulting for hotels, resorts, and tourism businesses." },
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

    <section className="section-padding">
      <div className="container-custom">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {industries.map((ind) => (
            <StaggerItem key={ind.title} direction="scale">
              <div className="card-elevated p-8 text-center group h-full">
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:shadow-lg flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                  <ind.icon className="text-accent group-hover:text-accent-foreground transition-colors duration-300" size={34} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </Layout>
);

export default Industries;
