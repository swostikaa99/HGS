import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section className="page-hero pt-32 pb-16">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl sm:text-5xl font-bold mb-4"
        >
          Our Team
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Meet the professionals behind HGS & Associates.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((m, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={m.name}
                ref={ref}
                className={`card-elevated p-6 text-center group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <Users className="text-muted-foreground" size={36} />
                </div>
                <h3 className="font-heading text-lg font-semibold">{m.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{m.bio}</p>
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={14} className="text-muted-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors" aria-label="Email">
                    <Mail size={14} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
