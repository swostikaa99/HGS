import { Link } from "react-router-dom";
import {
  Shield,
  TrendingUp,
  Users,
  Building2,
  Award,
  ChevronRight,
  Star,
  FileText,
  BarChart3,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  Zap,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { heroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
} from "@/components/AnimationWrappers";
import { useCounter } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Years of Experience", value: 18, suffix: "+" },
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 1200, suffix: "+" },
  { label: "Team Members", value: 30, suffix: "+" },
];

const services = [
  {
    icon: Shield,
    title: "Audit & Assurance",
    desc: "Comprehensive audit solutions ensuring compliance and transparency.",
  },
  {
    icon: FileText,
    title: "Tax Advisory",
    desc: "Strategic tax planning and compliance services.",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    desc: "Expert financial guidance for growth and sustainability.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    desc: "End-to-end company incorporation and registration.",
  },
  {
    icon: BookOpen,
    title: "Accounting",
    desc: "Professional bookkeeping and accounting services.",
  },
  {
    icon: BarChart3,
    title: "Risk Management",
    desc: "Identifying and mitigating financial risks effectively.",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, Nepal Tech Pvt. Ltd.",
    text: "HGS & Associates transformed our financial operations. Their expertise in tax advisory saved us significantly.",
  },
  {
    name: "Sunita Acharya",
    role: "Director, Himalayan Exports",
    text: "Professional, reliable, and always available. They've been our trusted partners for over 5 years.",
  },
  {
    name: "Anil Thapa",
    role: "Founder, Thapa Group",
    text: "Their strategic financial consulting helped us expand into three new markets. Highly recommended.",
  },
];

const StatCounter = ({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) => {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center group">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300"
      >
        {count}
        {suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-primary-foreground/70 text-sm tracking-widest uppercase font-semibold"
      >
        {label}
      </motion.div>
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
            alt="KATHMANDU skyline"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/70 via-navy/50 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent" />
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-blue-600/10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <FloatingShapes shapes={heroShapes} />

        <div className="relative container-custom pt-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-gradient-to-r from-gold/20 to-yellow-300/20 backdrop-blur-md text-gold px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-gold/30 shadow-lg hover:shadow-gold/20 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="group-hover:animate-spin" />
                Chartered Accountants • KATHMANDU, Nepal
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="font-heading text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6"
            >
              Trusted Chartered{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-orange-400 inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Accountants
              </motion.span>{" "}
              in KATHMANDU
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-primary-foreground/80 text-lg mb-10 leading-relaxed font-light tracking-wide"
            >
              Delivering excellence in audit, tax, and financial advisory
              services. We help businesses navigate complexity with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn-accent flex items-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Zap size={18} />
                      Get Consultation
                    </span>
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </MagneticButton>
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn-outline-light flex items-center gap-2 backdrop-blur-md border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </MagneticButton>
            </motion.div>
          </div>
          <div className="hidden lg:flex relative h-96 lg:h-auto items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-yellow-400/10 rounded-3xl blur-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
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
      <section className="bg-gradient-to-r from-navy-dark via-navy to-navy-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>
        <FloatingShapes
          shapes={[
            { variant: "dot", size: 6, x: 10, y: 30, delay: 0, duration: 5 },
            { variant: "dot", size: 10, x: 90, y: 60, delay: 1, duration: 7 },
            {
              variant: "ring",
              size: 60,
              x: 50,
              y: 20,
              delay: 2,
              duration: 10,
              className: "opacity-10",
            },
          ]}
        />
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive financial solutions tailored to your business needs."
          />
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.12}
          >
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="card-elevated p-7 group relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent group-hover:to-accent/80 flex items-center justify-center mb-5 transition-all duration-300 shadow-lg group-hover:shadow-accent/30">
                    <s.icon
                      className="text-accent group-hover:text-accent-foreground group-hover:scale-125 transition-all duration-300"
                      size={26}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {s.desc}
                  </p>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-yellow-300 w-0 group-hover:w-full"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="btn-primary inline-flex items-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
                  >
                    <span>View All Services</span>{" "}
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-primary to-black/60">
        <div className="absolute inset-0 animate-shimmer" />
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Why Choose Us"
            subtitle="What sets HGS & Associates apart from the rest."
            light
          />
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                icon: Award,
                title: "18+ Years Experience",
                desc: "Deep industry expertise and proven track record.",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                desc: "30+ qualified professionals at your service.",
              },
              {
                icon: Shield,
                title: "Trusted & Reliable",
                desc: "Committed to integrity and confidentiality.",
              },
              {
                icon: TrendingUp,
                title: "Growth Focused",
                desc: "Strategies that drive measurable results.",
              },
            ].map((item) => (
              <StaggerItem key={item.title} direction="scale">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-card hover:to-accent/10 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 group-hover:from-accent group-hover:to-accent/70 group-hover:shadow-lg group-hover:shadow-accent/50 flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                    <item.icon
                      className="text-accent group-hover:text-accent-foreground group-hover:scale-125 transition-all duration-300"
                      size={30}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-accent to-yellow-300 rounded-full w-0 group-hover:w-12 mx-auto"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-secondary to-primary relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear from businesses we've helped succeed."
          />
          <StaggerContainer
            className="grid md:grid-cols-3 gap-6"
            staggerDelay={0.15}
          >
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-elevated p-7 group relative overflow-hidden border border-accent/10 hover:border-accent/40 transition-all duration-300 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex gap-1 mb-5 relative z-10">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: j * 0.1 }}
                      >
                        <Star size={16} className="fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 italic leading-relaxed relative z-10">
                    "{t.text}"
                  </p>
                  <motion.div className="border-t border-border pt-4 relative z-10">
                    <div className="font-semibold text-sm text-accent">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {t.role}
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
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
            <motion.h2
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Ready to Elevate Your{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-orange-400"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Business?
              </motion.span>
            </motion.h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg font-light tracking-wide">
              Let our experts help you navigate financial complexities with
              confidence.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <MagneticButton>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn-accent inline-flex items-center gap-2 shadow-2xl hover:shadow-3xl hover:shadow-accent/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Target size={18} />
                    Schedule a Consultation
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
};

export default Index;
