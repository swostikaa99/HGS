import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { Reveal, StaggerContainer, StaggerItem, MagneticButton } from "@/components/AnimationWrappers";
import { Briefcase, GraduationCap, Heart, TrendingUp, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Clear pathways for professional advancement and leadership development." },
  { icon: GraduationCap, title: "Continuous Learning", desc: "Sponsored certifications, training programs, and industry conferences." },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible schedules, wellness programs, and a supportive team culture." },
  { icon: Briefcase, title: "Meaningful Work", desc: "Work on impactful projects with Nepal's leading businesses and organizations." },
];

const openings = [
  { title: "Senior Audit Associate", dept: "Audit & Assurance", type: "Full-time", location: "Kathmandu" },
  { title: "Tax Consultant", dept: "Tax Advisory", type: "Full-time", location: "Kathmandu" },
  { title: "Accounting Intern", dept: "Accounting", type: "Internship", location: "Kathmandu" },
];

const Careers = () => (
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
          Join Our Team
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Careers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
        >
          Join a team of passionate professionals shaping the future of finance in Nepal.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Why Work With Us" subtitle="We invest in our people because they are our greatest asset." />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {benefits.map((b) => (
            <StaggerItem key={b.title} direction="scale">
              <div className="card-elevated p-7 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:shadow-lg flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                  <b.icon className="text-accent group-hover:text-accent-foreground transition-colors duration-300" size={30} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading title="Open Positions" subtitle="Explore current opportunities at HGS & Associates." />
        <div className="max-w-3xl mx-auto space-y-5">
          {openings.map((job, i) => (
            <Reveal key={job.title} direction="up" delay={i * 0.1}>
              <div className="card-elevated p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div>
                  <h3 className="font-heading text-xl font-semibold group-hover:text-accent transition-colors duration-300">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase size={12} />{job.dept}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                  </div>
                </div>
                <MagneticButton>
                  <button className="btn-accent text-sm flex items-center gap-2 shrink-0">
                    <span>Apply Now</span> <ArrowRight size={14} />
                  </button>
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
