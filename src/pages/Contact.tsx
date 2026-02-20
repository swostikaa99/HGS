import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { Reveal, StaggerContainer, StaggerItem, MagneticButton } from "@/components/AnimationWrappers";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
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
            Get in Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Get in touch with our team for a consultation or inquiry.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal direction="left">
                <h2 className="font-heading text-3xl font-bold">Let's Talk</h2>
                <div className="gold-divider mt-3" />
              </Reveal>
              <StaggerContainer staggerDelay={0.1} className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Putalisadak, Kathmandu, Nepal" },
                  { icon: Phone, label: "Phone", value: "+977-1-4XXXXXX" },
                  { icon: Mail, label: "Email", value: "info@hgsassociates.com" },
                  { icon: Clock, label: "Office Hours", value: "Sun – Fri: 10:00 AM – 6:00 PM" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-all duration-300">
                        <item.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Reveal direction="left" delay={0.4}>
                <div className="w-full h-48 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <span className="text-muted-foreground text-sm">📍 Kathmandu, Nepal</span>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal direction="right" delay={0.2} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                    <input
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${errors.name ? "border-destructive" : "border-input"}`}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email *</label>
                    <input
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${errors.email ? "border-destructive" : "border-input"}`}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      type="email"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+977-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message *</label>
                  <textarea
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none ${errors.message ? "border-destructive" : "border-input"}`}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <MagneticButton>
                  <button type="submit" className="btn-accent flex items-center gap-2">
                    <span>Send Message</span> <Send size={16} />
                  </button>
                </MagneticButton>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
