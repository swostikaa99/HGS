import Layout from "@/components/Layout";
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
      <section className="page-hero pt-32 pb-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Get in touch with our team for a consultation or inquiry.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-2xl font-bold">Get In Touch</h2>
              <div className="gold-divider" />
              {[
                { icon: MapPin, label: "Address", value: "Putalisadak, Kathmandu, Nepal" },
                { icon: Phone, label: "Phone", value: "+977-1-4XXXXXX" },
                { icon: Mail, label: "Email", value: "info@hgsassociates.com" },
                { icon: Clock, label: "Office Hours", value: "Sun – Fri: 10:00 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-muted-foreground text-sm">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="w-full h-48 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">📍 Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card-elevated p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Full Name *</label>
                    <input
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition ${errors.name ? "border-destructive" : "border-input"}`}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <input
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition ${errors.email ? "border-destructive" : "border-input"}`}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      type="email"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone</label>
                    <input
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+977-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Subject</label>
                    <input
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <textarea
                    className={`w-full px-4 py-2.5 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-accent/50 transition resize-none ${errors.message ? "border-destructive" : "border-input"}`}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-accent flex items-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
