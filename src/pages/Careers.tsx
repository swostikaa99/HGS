import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section className="page-hero pt-32 pb-16">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl sm:text-5xl font-bold mb-4"
        >
          Careers
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Join a team of passionate professionals shaping the future of finance in Nepal.
        </p>
      </div>
    </section>

    {/* Why Work With Us */}
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Why Work With Us" subtitle="We invest in our people because they are our greatest asset." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={b.title}
                ref={ref}
                className={`card-elevated p-6 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading title="Open Positions" subtitle="Explore current opportunities at HGS & Associates." />
        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((job, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={job.title}
                ref={ref}
                className={`card-elevated p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase size={12} />{job.dept}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                  </div>
                </div>
                <button className="btn-accent text-sm flex items-center gap-2 shrink-0">
                  Apply Now <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
