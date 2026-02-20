import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const About = () => {
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();

  return (
    <Layout>
      <section className="page-hero pt-32 pb-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Building trust through expertise, integrity, and a relentless pursuit of excellence.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <SectionHeading title="Who We Are" />
          <p className="text-muted-foreground leading-relaxed">
            HGS & Associates is a leading Chartered Accountants firm based in Kathmandu, Nepal. Since 2005, we have been providing comprehensive financial services to businesses of all sizes — from startups to multinational corporations. Our team combines deep local knowledge with international best practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Our Vision", text: "To be the most trusted and respected Chartered Accountancy firm in Nepal, recognized for delivering exceptional value to our clients and the community." },
            { icon: Target, title: "Our Mission", text: "To empower businesses with expert financial guidance, ensuring compliance, growth, and sustainability through innovative solutions and unwavering integrity." },
          ].map((item) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={item.title}
                ref={ref}
                className={`card-elevated p-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Managing Partner */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Managing Partner" />
          <div
            ref={profileRef}
            className={`card-elevated max-w-2xl mx-auto p-8 flex flex-col sm:flex-row items-center gap-6 transition-all duration-500 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Users className="text-muted-foreground" size={48} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-1">CA Hari Prasad Gyawali</h3>
              <p className="text-accent font-medium text-sm mb-3">Managing Partner</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With over 18 years of experience in auditing, taxation, and financial advisory, CA Hari Prasad Gyawali leads HGS & Associates with a vision of excellence and integrity. He is a Fellow Member of the Institute of Chartered Accountants of Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={v.title}
                  ref={ref}
                  className={`text-center p-6 card-elevated transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Our Journey" />
          <div className="max-w-2xl mx-auto">
            {timeline.map((t, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={t.year}
                  ref={ref}
                  className={`flex gap-6 mb-8 last:mb-0 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
                      {t.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-heading font-semibold text-lg">{t.title}</h4>
                    <p className="text-muted-foreground text-sm">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
