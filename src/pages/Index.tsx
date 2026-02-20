import { Link } from "react-router-dom";
import { Shield, TrendingUp, Users, Building2, Award, ChevronRight, Star, FileText, BarChart3, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { heroShapes } from "@/components/FloatingShapes";
import { Reveal, StaggerContainer, StaggerItem, MagneticButton } from "@/components/AnimationWrappers";
import { useCounter } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Years of Experience", value: 18, suffix: "+" },
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 1200, suffix: "+" },
  { label: "Team Members", value: 30, suffix: "+" },
];

const services = [
  { icon: Shield, title: "Audit & Assurance", desc: "Comprehensive audit solutions ensuring compliance and transparency." },
  { icon: FileText, title: "Tax Advisory", desc: "Strategic tax planning and compliance services." },
  { icon: TrendingUp, title: "Financial Consulting", desc: "Expert financial guidance for growth and sustainability." },
  { icon: Building2, title: "Business Registration", desc: "End-to-end company incorporation and registration." },
  { icon: BookOpen, title: "Accounting", desc: "Professional bookkeeping and accounting services." },
  { icon: BarChart3, title: "Risk Management", desc: "Identifying and mitigating financial risks effectively." },
];

const testimonials = [
  { name: "Rajesh Sharma", role: "CEO, Nepal Tech Pvt. Ltd.", text: "HGS & Associates transformed our financial operations. Their expertise in tax advisory saved us significantly." },
  { name: "Sunita Acharya", role: "Director, Himalayan Exports", text: "Professional, reliable, and always available. They've been our trusted partners for over 5 years." },
  { name: "Anil Thapa", role: "Founder, Thapa Group", text: "Their strategic financial consulting helped us expand into three new markets. Highly recommended." },
];

const StatCounter = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-2"
      >
        {count}{suffix}
      </motion.div>
      <div className="text-primary-foreground/60 text-sm tracking-wider uppercase">{label}</div>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroBg}
            alt="Kathmandu skyline"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>

        <FloatingShapes shapes={heroShapes} />

        <div className="relative container-custom pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-gold/15 backdrop-blur-sm text-gold px-5 py-2 rounded-full text-sm font-medium mb-6 border border-gold/20"
            >
              Chartered Accountants • Kathmandu, Nepal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
            >
              Trusted Chartered{" "}
              <span className="text-gradient-gold">Accountants</span>{" "}
              in Kathmandu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-primary-foreground/75 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl"
            >
              Delivering excellence in audit, tax, and financial advisory services. We help businesses navigate complexity with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link to="/contact" className="btn-accent flex items-center gap-2">
                  <span>Get Consultation</span> <ChevronRight size={16} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact" className="btn-outline-light flex items-center gap-2">
                  <span>Contact Us</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-navy-gradient section-padding relative overflow-hidden">
        <FloatingShapes shapes={[
          { variant: "dot", size: 6, x: 10, y: 30, delay: 0, duration: 5 },
          { variant: "dot", size: 10, x: 90, y: 60, delay: 1, duration: 7 },
          { variant: "ring", size: 60, x: 50, y: 20, delay: 2, duration: 10, className: "opacity-10" },
        ]} />
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary relative">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="Comprehensive financial solutions tailored to your business needs." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-elevated p-7 group">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <s.icon className="text-accent group-hover:scale-110 transition-transform duration-300" size={26} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal direction="up" delay={0.4}>
            <div className="text-center mt-10">
              <MagneticButton>
                <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                  <span>View All Services</span> <ChevronRight size={16} />
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer" />
        <div className="container-custom relative">
          <SectionHeading title="Why Choose Us" subtitle="What sets HGS & Associates apart from the rest." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { icon: Award, title: "18+ Years Experience", desc: "Deep industry expertise and proven track record." },
              { icon: Users, title: "Dedicated Team", desc: "30+ qualified professionals at your service." },
              { icon: Shield, title: "Trusted & Reliable", desc: "Committed to integrity and confidentiality." },
              { icon: TrendingUp, title: "Growth Focused", desc: "Strategies that drive measurable results." },
            ].map((item) => (
              <StaggerItem key={item.title} direction="scale">
                <div className="text-center p-8 rounded-2xl hover:bg-card hover:shadow-xl transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:shadow-lg flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                    <item.icon className="text-accent group-hover:text-accent-foreground transition-colors duration-300" size={30} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Client Testimonials" subtitle="Hear from businesses we've helped succeed." />
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="card-elevated p-7">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 italic leading-relaxed">"{t.text}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding relative overflow-hidden">
        <FloatingShapes shapes={[
          { variant: "circle", size: 100, x: 10, y: 20, delay: 0, duration: 9, className: "opacity-10" },
          { variant: "ring", size: 150, x: 85, y: 50, delay: 1, duration: 11, className: "opacity-10" },
          { variant: "diamond", size: 40, x: 70, y: 15, delay: 2, duration: 8 },
        ]} />
        <div className="container-custom text-center relative">
          <Reveal direction="scale">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
              Ready to Elevate Your Business?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-primary-foreground/65 mb-10 max-w-xl mx-auto text-lg">
              Let our experts help you navigate financial complexities with confidence.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <MagneticButton>
              <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
                <span>Schedule a Consultation</span> <ChevronRight size={16} />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
