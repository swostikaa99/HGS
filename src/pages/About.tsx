import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers";
import { Target, Eye, Heart, Lightbulb, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2005", title: "Founded", desc: "HGS & Associates established in Kathmandu by CA Hari Prasad Gyawali." },
  { year: "2010", title: "Expansion", desc: "Expanded services to include financial consulting and risk management." },
  { year: "2015", title: "100+ Clients", desc: "Crossed the milestone of serving over 100 corporate clients." },
  { year: "2020", title: "Digital Transformation", desc: "Adopted cutting-edge technology for audit and advisory services." },
  { year: "2024", title: "Regional Leader", desc: "Recognized as one of the leading CA firms in Nepal." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We uphold the highest ethical standards in everything we do." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing new approaches to deliver better outcomes." },
  { icon: Users, title: "Client-Centric", desc: "Your success is the measure of our success." },
  { icon: Heart, title: "Commitment", desc: "Dedicated to excellence and long-term partnerships." },
];

const About = () => (
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
          About HGS & Associates
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
        >
          Building trust through expertise, integrity, and a relentless pursuit of excellence.
        </motion.p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <div className="container-custom max-w-3xl text-center">
        <SectionHeading title="Who We Are" />
        <Reveal direction="up" delay={0.2}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            HGS & Associates is a leading Chartered Accountants firm based in Kathmandu, Nepal. Since 2005, we have been providing comprehensive financial services to businesses of all sizes — from startups to multinational corporations. Our team combines deep local knowledge with international best practices.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
          {[
            { icon: Eye, title: "Our Vision", text: "To be the most trusted and respected Chartered Accountancy firm in Nepal, recognized for delivering exceptional value to our clients and the community." },
            { icon: Target, title: "Our Mission", text: "To empower businesses with expert financial guidance, ensuring compliance, growth, and sustainability through innovative solutions and unwavering integrity." },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-elevated p-8 h-full group">
                <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-all duration-300">
                  <item.icon className="text-accent group-hover:scale-110 transition-transform duration-300" size={26} />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Managing Partner */}
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Managing Partner" />
        <Reveal direction="scale">
          <div className="card-elevated max-w-2xl mx-auto p-8 flex flex-col sm:flex-row items-center gap-8 group">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:shadow-xl transition-all duration-500 ring-4 ring-accent/10">
              <Users className="text-muted-foreground" size={48} />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-1">CA Hari Prasad Gyawali</h3>
              <p className="text-accent font-medium mb-3">Managing Partner</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 18 years of experience in auditing, taxation, and financial advisory, CA Hari Prasad Gyawali leads HGS & Associates with a vision of excellence and integrity. He is a Fellow Member of the Institute of Chartered Accountants of Nepal.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading title="Our Core Values" />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {values.map((v) => (
            <StaggerItem key={v.title} direction="scale">
              <div className="text-center p-7 card-elevated group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                  <v.icon className="text-accent group-hover:text-accent-foreground transition-colors duration-300" size={30} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer" />
      <div className="container-custom relative">
        <SectionHeading title="Our Journey" />
        <div className="max-w-2xl mx-auto">
          {timeline.map((t, i) => (
            <Reveal key={t.year} direction="left" delay={i * 0.12}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0 shadow-lg"
                  >
                    {t.year}
                  </motion.div>
                  {i < timeline.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-px flex-1 bg-border mt-2 origin-top"
                    />
                  )}
                </div>
                <div className="pt-3">
                  <h4 className="font-heading font-semibold text-xl">{t.title}</h4>
                  <p className="text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
