import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimationWrappers";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle2,
  AlertCircle,
  Mail,
} from "lucide-react";
const getLastUpdatedDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
};

const Privacy = () => (
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
          Your Privacy Matters
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary max-w-6xl mx-auto text-lg"
        >
          We are committed to protecting your privacy and ensuring transparency
          about how we handle your data.
        </motion.p>
      </div>
    </section>

    {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/4 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative">
        {/* ── INTRODUCTION SECTION ─────────────────────────────────── */}
        <div className="max-w-6xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="relative rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 sm:p-10 hover:border-accent/40 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
                    <Shield className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                      Your Privacy Is Our Priority
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      HGS & Associates ("Company," "we," "our," or "us") is
                      committed to protecting your privacy. This Privacy Policy
                      explains how we collect, use, disclose, and safeguard your
                      information when you visit our website and use our
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── INFORMATION COLLECTION SECTION ──────────────────────── */}
        <div className="mb-16">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We may collect information about you in a variety of ways to
                provide better services
              </p>
            </div>
          </Reveal>

          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                icon: FileText,
                title: "Personal Data",
                desc: "Personally identifiable information such as your name, email address, and telephone number that you voluntarily provide.",
              },
              {
                icon: Lock,
                title: "Financial Information",
                desc: "Financial data such as funds used for purchase may be collected when you engage in Site activities.",
              },
              {
                icon: Eye,
                title: "Browser Data",
                desc: "Information collected automatically through cookies, web beacons, and similar tracking technologies.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl border border-border/60 bg-card p-8 hover:border-accent/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 group-hover:scale-125 transition-all duration-300">
                      <item.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* ── USE OF INFORMATION SECTION ───────────────────────────── */}
        <div className="mb-16">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We use collected data to provide a smooth, efficient, and
                customized experience
              </p>
            </div>
          </Reveal>

          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="space-y-3" staggerDelay={0.05}>
              {[
                "Deliver requested services and send related information",
                "Email regarding your account or order",
                "Fulfill and manage purchases, orders, payments, and transactions",
                "Generate a personal profile for future visits",
                "Increase the efficiency and operation of the Site",
                "Monitor and analyze usage to improve your experience",
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-card/50 hover:border-accent/40 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <CheckCircle2
                      className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      size={20}
                    />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* ── OTHER SECTIONS ───────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto space-y-12">
          {[
            {
              num: "4",
              title: "Disclosure of Your Information",
              content:
                "We may share your information in situations outlined below. However, we do not sell, trade, or rent Users' personally identifiable information to others. We may disclose generic aggregated demographic information and share information in other circumstances if we have your permission or if the disclosure is required by law.",
            },
            {
              num: "5",
              title: "Security of Your Information",
              content:
                "We use administrative, technical, and physical security measures to protect your personal information. However, despite our efforts, no security measures are completely secure.",
            },
            {
              num: "7",
              title: "Changes to This Privacy Policy",
              content:
                "We reserve the right to modify this Privacy Policy at any time. Changes will take effect immediately upon posting to the Site. If we make material changes, we will notify you here so you are aware of what information we collect and how we use it.",
            },
          ].map((section, i) => (
            <Reveal key={i} direction="left" delay={i * 0.1}>
              <motion.div whileHover={{ x: 4 }} className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                      <span className="text-accent font-bold text-lg">
                        {section.num}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* ── CONTACT SECTION ──────────────────────────────────────── */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Reveal direction="scale">
            <motion.div
              whileHover={{ y: -8 }}
              className="relative rounded-2xl border border-border/60 bg-card p-10 hover:border-accent/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">
                      Have Questions?
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Get in touch with us about our Privacy Policy
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span className="text-accent font-semibold">Company:</span>
                    HGS & Associates
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span className="text-accent font-semibold">Location:</span>
                    Putalisadak, Kathmandu, Nepal
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span className="text-accent font-semibold">Email:</span>
                    <a
                      href="mailto:info@hgsassociates.com"
                      className="hover:text-accent transition-colors duration-300"
                    >
                      info@hgsassociates.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* ── FOOTER NOTE ──────────────────────────────────────────── */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <Reveal direction="up">
            <div className="border-t border-border/40 pt-8">
              <p className="text-sm text-muted-foreground">
                Last Updated: {getLastUpdatedDate()}. We encourage you to
                frequently check this page for any changes to stay informed
                about how we are helping to protect the personal information we
                collect.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
