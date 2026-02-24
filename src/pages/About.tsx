import { useRef, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimationWrappers";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  ShieldCheck,
  Award,
  Globe,
  CheckCircle2,
  Star,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  { value: 45, suffix: "+", label: "Years of Excellence" },
  { value: 1979, suffix: "", label: "Year Established" },
  { value: 10, suffix: "+", label: "International Bodies" },
  { value: 170, suffix: "", label: "Countries via ACCA" },
];

const timeline = [
  {
    year: "1979",
    title: "Founded",
    desc: "HGS & Associates established, delivering accounting, auditing, taxation, and consulting services.",
  },
  {
    year: "1997",
    title: "ACCA Nepal Rep",
    desc: "Principal voluntarily began representing ACCA in Nepal to promote international CA standards.",
  },
  {
    year: "2000s",
    title: "International Trust",
    desc: "Listed as approved auditor by USAID, UNDP, UNFPA, DANIDA, DFID, Nepal Rastra Bank, HELVETAS & more.",
  },
  {
    year: "2010",
    title: "Expansion",
    desc: "Expanded into enterprise risk management and strategic financial consulting.",
  },
  {
    year: "2024",
    title: "Regional Leader",
    desc: "Recognized as one of Nepal's most trusted CA firms with decades of proven excellence.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Highest ethical standards in every engagement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Modern approaches for better client outcomes.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    desc: "Your success is the measure of our success.",
  },
  {
    icon: Heart,
    title: "Commitment",
    desc: "Long-term partnerships built on trust.",
  },
];

const approvedBy = [
  "Office of the Auditor General of Nepal",
  "USAID (United States Agency for International Development)",
  "Nepal Rastra Bank (Central Bank)",
  "UNDP",
  "UNFPA",
  "SNV / Nepal",
  "DANIDA",
  "DFID",
  "HELVETAS",
];

/* ─── Sub-components ─────────────────────────────────────────────────── */
const GoldDivider = () => (
  <div className="flex items-center gap-3 justify-center mb-6">
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/60" />
    <Star size={10} className="text-accent fill-accent" />
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60" />
  </div>
);

const CountUp = ({
  to,
  suffix = "",
  duration = 2000,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center group"
  >
    <div className="text-4xl sm:text-5xl font-bold text-gradient-gold font-heading mb-1 group-hover:scale-110 transition-transform duration-300">
      <CountUp to={value} suffix={suffix} />
    </div>
    <div className="text-primary-foreground/60 text-sm tracking-wide uppercase font-medium">
      {label}
    </div>
  </motion.div>
);

/* ─── Page ───────────────────────────────────────────────────────────── */
const About = () => {
  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero pt-32 pb-16 relative">
        <FloatingShapes shapes={pageHeroShapes} />
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-gold/15 backdrop-blur-sm text-gold px-5 py-2 rounded-full text-sm font-medium mb-6 border border-gold/20"
          >
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          >
            About HGS & Associates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Trusted since 1979. Building lasting partnerships through excellence
            and integrity.
          </motion.p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-50" />
        <div className="container-custom max-w-4xl text-center relative">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <div className="gold-divider mx-auto mb-6" />
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              HGS &amp; Associates is a long-standing Chartered Accountancy firm
              based in Kathmandu, Nepal. With the belief that the key to
              providing professional accounting and consulting services is to{" "}
              <span className="text-foreground font-semibold">
                match them with the client's specific needs
              </span>
              , the firm has been working closely with its clients — providing{" "}
              <span className="text-accent font-semibold">
                accounting, auditing, taxation, and consulting services
              </span>{" "}
              since its establishment in{" "}
              <span className="text-foreground font-bold">1979</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-40" />
        <div className="container-custom relative">
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            staggerDelay={0.1}
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center group"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-gradient-gold font-heading mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-muted-foreground text-sm tracking-wide uppercase font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────────── */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container-custom relative">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              Vision &amp; Mission
            </h2>
            <div className="gold-divider mx-auto mb-12" />
          </Reveal>
          <StaggerContainer
            className="grid md:grid-cols-2 gap-8"
            staggerDelay={0.2}
          >
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be the most trusted and respected Chartered Accountancy firm in Nepal, recognized for delivering exceptional value to our clients and the community.",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To empower businesses with expert financial guidance, ensuring compliance, growth, and sustainability through innovative solutions and unwavering integrity.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-elevated p-8 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-all duration-300 group">
                    <item.icon
                      className="text-accent group-hover:scale-110 transition-transform duration-300"
                      size={26}
                    />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              Credentials &amp; Accreditations
            </h2>
            <div className="gold-divider mx-auto mb-12" />
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
              Internationally recognised. Nationally trusted.
            </p>
          </Reveal>

          <StaggerContainer
            className="grid lg:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {/* Card 1 — National Audit License */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="card-elevated p-8 h-full group"
              >
                {/* Golden gradient top line */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-accent to-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Award className="text-accent" size={30} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  National Audit License
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  The firm holds the national audit license of:
                </p>
                <div className="bg-accent/8 border border-accent/15 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle2
                    className="text-accent mt-0.5 shrink-0"
                    size={16}
                  />
                  <p className="text-sm font-medium leading-relaxed">
                    The Institute of Chartered Accountants of Nepal (ICAN),
                    <br />
                    Babar Mahal, Kathmandu, Nepal
                  </p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 2 — Approved Auditor */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="card-elevated p-8 h-full group"
              >
                {/* Golden gradient top line */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-accent to-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="text-accent" size={30} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Approved Auditor
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  Included in the approved auditor list of:
                </p>
                <ul className="flex flex-col gap-2.5">
                  {approvedBy.map((org) => (
                    <li key={org} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="text-accent mt-0.5 shrink-0"
                        size={13}
                      />
                      <span className="text-sm text-muted-foreground leading-snug">
                        {org}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>

            {/* Card 3 — ACCA */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="card-elevated p-8 h-full group"
              >
                {/* Golden gradient top line */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-accent to-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Globe className="text-accent" size={30} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  International Associations
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  We act as{" "}
                  <span className="text-foreground font-semibold">
                    ACCA Nepal Representative
                  </span>
                  .
                </p>

                {/* ACCA info box */}
                <div className="bg-muted/60 border border-border/60 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs font-bold text-accent tracking-widest uppercase">
                      ACCA
                    </div>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The Association of Chartered Certified Accountants, based in
                    the UK, is recognised across{" "}
                    <strong className="text-foreground">170 countries</strong>{" "}
                    with{" "}
                    <strong className="text-foreground">
                      296,000 students
                    </strong>{" "}
                    and{" "}
                    <strong className="text-foreground">115,000 members</strong>{" "}
                    worldwide. A prestigious qualification for over 100 years.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Star
                    className="text-accent fill-accent mt-0.5 shrink-0"
                    size={13}
                  />
                  <p className="text-sm text-muted-foreground">
                    Representative since{" "}
                    <span className="text-foreground font-semibold">1997</span>{" "}
                    — promoting ACCA internationally recognised standards across
                    Nepal.
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              Our Core Values
            </h2>
            <div className="gold-divider mx-auto mb-12" />
          </Reveal>
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {values.map((v) => (
              <StaggerItem key={v.title} direction="scale">
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-elevated p-8 text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                    <v.icon
                      className="text-accent group-hover:scale-110 transition-transform duration-300"
                      size={28}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container-custom relative">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              Our Journey
            </h2>
            <div className="gold-divider mx-auto mb-12" />
          </Reveal>
          <div className="max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <Reveal key={t.year} direction="left" delay={i * 0.1}>
                <div className="flex gap-6 mb-10 last:mb-0 group">
                  {/* Year bubble + line */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center text-accent-foreground font-bold text-xs shrink-0 shadow-lg shadow-accent/20"
                    >
                      {t.year}
                    </motion.div>
                    {i < timeline.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-px flex-1 bg-gradient-to-b from-accent/40 to-border mt-2 origin-top"
                      />
                    )}
                  </div>
                  {/* Content */}
                  <motion.div whileHover={{ x: 4 }} className="pt-3 pb-4">
                    <h4 className="font-heading font-bold text-xl mb-1 group-hover:text-accent transition-colors duration-300">
                      {t.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.desc}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </section>

      {/* ── MANAGING PARTNER ─────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              Managing Partner
            </h2>
            <div className="gold-divider mx-auto mb-12" />
          </Reveal>
          <Reveal direction="scale">
            <motion.div
              whileHover={{ y: -4 }}
              className="max-w-3xl mx-auto rounded-2xl border border-border/60 hover:border-accent/25 bg-card shadow-md hover:shadow-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center ring-4 ring-accent/15 group-hover:ring-accent/30 transition-all">
                  <Users className="text-accent" size={44} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Star size={12} className="fill-white text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-1">
                  CA Hari Prasad Gyawali
                </h3>
                <p className="text-accent font-semibold mb-1 text-sm tracking-wide uppercase">
                  Managing Partner &amp; Principal
                </p>
                <div className="h-px w-12 bg-gradient-to-r from-accent to-accent/30 mb-4 rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Fellow Member of the Institute of Chartered Accountants of
                  Nepal (ICAN), with decades of expertise in auditing, taxation,
                  and financial advisory. Has voluntarily served as{" "}
                  <span className="text-foreground font-medium">
                    ACCA Nepal representative since 1997
                  </span>
                  , championing internationally recognised professional
                  standards across Nepal.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
