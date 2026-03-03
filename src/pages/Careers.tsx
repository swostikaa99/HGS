import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
} from "@/components/AnimationWrappers";
import {
  Briefcase,
  GraduationCap,
  Heart,
  TrendingUp,
  MapPin,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Clear pathways for professional advancement and leadership development.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Sponsored certifications, training programs, and industry conferences.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "Flexible schedules, wellness programs, and a supportive team culture.",
  },
  {
    icon: Briefcase,
    title: "Meaningful Work",
    desc: "Work on impactful projects with Nepal's leading businesses and organizations.",
  },
];

const openings = [
  {
    title: "Senior Audit Associate",
    dept: "Audit & Assurance",
    type: "Full-time",
    location: "Kathmandu",
  },
  {
    title: "Tax Consultant",
    dept: "Tax Advisory",
    type: "Full-time",
    location: "Kathmandu",
  },
  {
    title: "Accounting Intern",
    dept: "Accounting",
    type: "Internship",
    location: "Kathmandu",
  },
];

const ApplicationModal = ({
  isOpen,
  onClose,
  jobTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setFormData({ name: "", email: "", phone: "", resume: "" });
      setSubmitted(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-secondary border border-primary-foreground/10 rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors z-20"
        >
          <X size={20} className="text-primary-foreground/60" />
        </button>

        <div className="p-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-gray-500 text-sm">
                We'll review your application and get back to you soon.
              </p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-1">Apply for Position</h2>
              {jobTitle && (
                <p className="text-primary text-sm font-semibold">{jobTitle}</p>
              )}
              <hr className=" mb-6" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+977 98..."
                    className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    required
                    value={formData.resume}
                    onChange={(e) =>
                      setFormData({ ...formData, resume: e.target.value })
                    }
                    placeholder="Tell us why you're interested in this position..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors duration-300"
                >
                  Submit Application
                </motion.button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>();

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />

      <section className="page-hero pt-32 pb-16 relative">
        <FloatingShapes shapes={pageHeroShapes} />
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-gold/15 backdrop-blur-sm text-gold px-5 py-2 rounded-full text-sm font-medium mb-6 border border-gold/20"
          >
            Join Our Team
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          >
            Careers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Join a team of passionate professionals shaping the future of
            finance in Nepal.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Why Work With Us"
            subtitle="We invest in our people because they are our greatest asset."
          />
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {benefits.map((b) => (
              <StaggerItem key={b.title} direction="scale">
                <div className="card-elevated p-7 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:shadow-lg flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                    <b.icon
                      className="text-accent group-hover:text-accent-foreground transition-colors duration-300"
                      size={30}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="Open Positions"
            subtitle="Explore current opportunities at HGS & Associates."
          />
          <div className="max-w-5xl mx-auto space-y-5">
            {openings.map((job, i) => (
              <Reveal key={job.title} direction="up" delay={i * 0.1}>
                <div className="card-elevated p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div>
                    <h3 className="font-heading text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} />
                        {job.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <MagneticButton>
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="btn-accent text-sm flex items-center gap-2 shrink-0"
                    >
                      <span>Apply Now</span> <ArrowRight size={14} />
                    </button>
                  </MagneticButton>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Careers;
