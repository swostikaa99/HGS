import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimationWrappers";
import { motion } from "framer-motion";
import {
  FileText,
  AlertCircle,
  Shield,
  Link2,
  RefreshCw,
  Gavel,
  Mail,
  CheckCircle2,
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

const Terms = () => (
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
          Legal Information
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Terms & Conditions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-2xl mx-auto text-lg"
        >
          Please read these terms and conditions carefully before using our
          services.
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
                    <FileText className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                      Our Legal Agreement
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using this website and the services
                      provided by HGS & Associates ("Company," "we," "our," or
                      "us"), you accept and agree to be bound by the terms and
                      provisions of this agreement. Please read carefully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── TERMS SECTIONS ───────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section 1: Acceptance of Terms */}
          <Reveal direction="left" delay={0.1}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Acceptance of Terms
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using this website and the services
                    provided by HGS & Associates ("Company," "we," "our," or
                    "us"), you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by
                    the above, please do not use this service.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 2: Use License */}
          <Reveal direction="left" delay={0.2}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    Use License
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Permission is granted to temporarily download one copy of
                    the materials (information or software) on HGS & Associates'
                    website for personal, non-commercial transitory viewing
                    only. Under this license you may not:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Modifying or copying the materials",
                      "Using the materials for any commercial purpose or public display",
                      "Attempting to decompile or reverse engineer any software",
                      "Removing any copyright or proprietary notations",
                      "Transferring materials or 'mirroring' on other servers",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg border border-border/40 bg-card/50 hover:border-accent/40 hover:bg-card/80 transition-all duration-300 group/item"
                      >
                        <AlertCircle
                          className="text-accent shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300"
                          size={16}
                        />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 3: Disclaimer */}
          <Reveal direction="left" delay={0.3}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Disclaimer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on HGS & Associates' website are provided on
                    an 'as is' basis. HGS & Associates makes no warranties,
                    expressed or implied, and hereby disclaims and negates all
                    other warranties including merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 4: Limitations */}
          <Reveal direction="left" delay={0.4}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Limitations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall HGS & Associates or its suppliers be
                    liable for any damages (including damages for loss of data
                    or profit, or due to business interruption) arising out of
                    the use or inability to use the materials on HGS &
                    Associates' website, even if HGS & Associates or an
                    authorized representative has been notified of the
                    possibility of such damage.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 5: Accuracy of Materials */}
          <Reveal direction="left" delay={0.5}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Accuracy of Materials
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials appearing on HGS & Associates' website could
                    include technical, typographical, or photographic errors.
                    HGS & Associates does not warrant that any materials on its
                    website are accurate, complete, or current. HGS & Associates
                    may make changes to the materials at any time without
                    notice.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 6: Links */}
          <Reveal direction="left" delay={0.6}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">6</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Links
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HGS & Associates has not reviewed all of the sites linked to
                    its website and is not responsible for the contents of any
                    such linked site. The inclusion of any link does not imply
                    endorsement by HGS & Associates of the site. Use of any such
                    linked website is at the user's own risk.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 7: Modifications */}
          <Reveal direction="left" delay={0.7}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">7</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Modifications
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HGS & Associates may revise these terms of service at any
                    time without notice. By using this website, you are agreeing
                    to be bound by the then current version of these terms of
                    service.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Section 8: Governing Law */}
          <Reveal direction="left" delay={0.8}>
            <motion.div whileHover={{ x: 4 }} className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
                    <span className="text-accent font-bold text-lg">8</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    Governing Law
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in
                    accordance with the laws of Nepal, and you irrevocably
                    submit to the exclusive jurisdiction of the courts in that
                    location.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* ── CONTACT SECTION ──────────────────────────────────────── */}
        <div className="mt-16 max-w-6xl mx-auto">
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
                      Questions About Our Terms?
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Get in touch with us regarding this agreement
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
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
        <div className="mt-16 text-center max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="border-t border-border/40 pt-8">
              <p className="text-sm text-muted-foreground">
                Last Updated: {getLastUpdatedDate()}. For questions about these
                Terms & Conditions, please contact us at info@hgsassociates.com
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
