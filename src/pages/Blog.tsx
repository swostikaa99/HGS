import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Tax Updates", "Audit", "Business Advisory", "Regulatory", "Industry Insights"];

const posts = [
  { title: "Nepal Budget 2024-25: Key Tax Implications for Businesses", category: "Tax Updates", date: "Jan 15, 2025", excerpt: "An in-depth analysis of the major tax changes in the latest national budget and how they affect your business." },
  { title: "Understanding the New Audit Standards in Nepal", category: "Audit", date: "Dec 20, 2024", excerpt: "A comprehensive guide to the recently adopted Nepal Standards on Auditing and what they mean for your organization." },
  { title: "5 Financial Strategies for Startups in Nepal", category: "Business Advisory", date: "Nov 10, 2024", excerpt: "Essential financial planning strategies every startup founder in Nepal should know." },
  { title: "VAT Compliance: Common Mistakes to Avoid", category: "Tax Updates", date: "Oct 5, 2024", excerpt: "Learn about the most frequent VAT compliance errors and how to ensure your business stays on the right side of regulations." },
  { title: "Risk Management Framework for SMEs", category: "Business Advisory", date: "Sep 18, 2024", excerpt: "A practical guide to implementing an effective risk management framework for small and medium enterprises." },
  { title: "INGO Financial Reporting Best Practices", category: "Industry Insights", date: "Aug 22, 2024", excerpt: "Best practices for financial reporting and donor compliance in the non-profit sector in Nepal." },
];

const Blog = () => (
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
          Knowledge Hub
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Insights & Updates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
        >
          Stay informed with the latest financial news, regulatory updates, and expert analysis.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Featured */}
            <Reveal direction="up">
              <div className="card-elevated p-7 mb-8 group">
                <span className="text-xs font-medium text-accent uppercase tracking-widest">Featured</span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mt-3 mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {posts[0].date}
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-sm font-medium text-accent"
                  >
                    Read More <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </Reveal>

            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {posts.slice(1).map((post) => (
                <StaggerItem key={post.title}>
                  <div className="card-elevated p-6 h-full group">
                    <span className="text-xs font-medium text-accent">{post.category}</span>
                    <h3 className="font-heading text-lg font-semibold mt-2 mb-3 group-hover:text-accent transition-colors duration-300">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <Reveal direction="right" delay={0.3}>
              <div className="card-elevated p-6 sticky top-24">
                <h3 className="font-heading text-lg font-semibold mb-5 flex items-center gap-2">
                  <Tag size={16} className="text-accent" /> Categories
                </h3>
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ x: 4 }}
                      className="text-left text-sm px-4 py-2.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
