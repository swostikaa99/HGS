import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { StaggerContainer, StaggerItem } from "@/components/AnimationWrappers";
import { Users, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "CA Hari Prasad Gyawali", role: "Managing Partner", bio: "Fellow member of ICAN with 18+ years of experience in audit, tax, and advisory." },
  { name: "CA Sita Devi Sharma", role: "Senior Partner", bio: "Specializes in tax advisory and compliance with expertise in international taxation." },
  { name: "CA Ramesh Adhikari", role: "Audit Director", bio: "Leads our audit practice with a focus on financial institutions and manufacturing." },
  { name: "CA Priya Basnet", role: "Tax Manager", bio: "Expert in corporate tax planning, VAT compliance, and transfer pricing." },
  { name: "Bikash Khadka", role: "Senior Associate", bio: "Experienced in financial consulting and business registration services." },
  { name: "Anita Gurung", role: "Associate", bio: "Focused on bookkeeping, payroll processing, and management reporting." },
];

const Team = () => (
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
          Our People
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Meet the Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
        >
          Meet the professionals behind HGS & Associates.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {teamMembers.map((m) => (
            <StaggerItem key={m.name} direction="scale">
              <div className="card-elevated p-7 text-center group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-28 h-28 rounded-full bg-muted flex items-center justify-center mx-auto mb-5 ring-4 ring-accent/10 group-hover:ring-accent/30 transition-all duration-500"
                >
                  <Users className="text-muted-foreground" size={40} />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold">{m.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
                <p className="text-muted-foreground text-sm mb-5">{m.bio}</p>
                <div className="flex justify-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={15} className="text-muted-foreground" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={15} className="text-muted-foreground" />
                  </motion.button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </Layout>
);

export default Team;
