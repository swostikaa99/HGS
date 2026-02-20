import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section className="page-hero pt-32 pb-16">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl sm:text-5xl font-bold mb-4"
        >
          Industries We Serve
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Deep sector expertise across Nepal's diverse economic landscape.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={ind.title}
                ref={ref}
                className={`card-elevated p-8 text-center group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <ind.icon className="text-accent" size={32} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{ind.title}</h3>
                <p className="text-muted-foreground text-sm">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Industries;
