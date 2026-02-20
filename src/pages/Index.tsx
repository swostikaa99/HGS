import { Link } from "react-router-dom";
import { Shield, TrendingUp, Users, Building2, Award, ChevronRight, Star, FileText, BarChart3, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";
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
      <div className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-2">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm">{label}</div>
    </div>
  );
};

const Index = () => {
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Kathmandu skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
        </div>
        <div className="relative container-custom pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Chartered Accountants • Kathmandu, Nepal
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Trusted Chartered Accountants in Kathmandu
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Delivering excellence in audit, tax, and financial advisory services. We help businesses navigate complexity with confidence and integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent flex items-center gap-2">
                Get Consultation <ChevronRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-gradient section-padding">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="Comprehensive financial solutions tailored to your business needs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={s.title}
                  ref={ref}
                  className={`card-elevated p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <s.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Why Choose Us" subtitle="What sets HGS & Associates apart from the rest." />
          <div
            ref={whyRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { icon: Award, title: "18+ Years Experience", desc: "Deep industry expertise and proven track record." },
              { icon: Users, title: "Dedicated Team", desc: "30+ qualified professionals at your service." },
              { icon: Shield, title: "Trusted & Reliable", desc: "Committed to integrity and confidentiality." },
              { icon: TrendingUp, title: "Growth Focused", desc: "Strategies that drive measurable results." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Client Testimonials" subtitle="Hear from businesses we've helped succeed." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={t.name}
                  ref={ref}
                  className={`card-elevated p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Let our experts help you navigate financial complexities with confidence.
            </p>
            <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
              Schedule a Consultation <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
