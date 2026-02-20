import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section className="page-hero pt-32 pb-16">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl sm:text-5xl font-bold mb-4"
        >
          Insights & Updates
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Stay informed with the latest financial news, regulatory updates, and expert analysis.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Posts */}
          <div className="flex-1">
            {/* Featured */}
            <div className="card-elevated p-6 mb-8">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Featured</span>
              <h2 className="font-heading text-2xl font-bold mt-2 mb-3">{posts[0].title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {posts[0].date}
                </div>
                <button className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {posts.slice(1).map((post, i) => {
                const { ref, isVisible } = useScrollAnimation();
                return (
                  <div
                    key={post.title}
                    ref={ref}
                    className={`card-elevated p-5 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="text-xs font-medium text-accent">{post.category}</span>
                    <h3 className="font-heading text-lg font-semibold mt-1 mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="card-elevated p-5 sticky top-24">
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Tag size={16} className="text-accent" /> Categories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="text-left text-sm px-3 py-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
