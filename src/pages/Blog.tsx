import { useState } from "react";
import Layout from "@/components/Layout";
import FloatingShapes, { pageHeroShapes } from "@/components/FloatingShapes";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/AnimationWrappers";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Tax Updates", "Audit", "Business Advisory", "Regulatory", "Industry Insights"];

const posts = [
  {
    title: "Nepal Budget 2024-25: Key Tax Implications for Businesses",
    category: "Tax Updates",
    date: "Jan 15, 2025",
    excerpt: "An in-depth analysis of the major tax changes in the latest national budget and how they affect your business.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Understanding the New Audit Standards in Nepal",
    category: "Audit",
    date: "Dec 20, 2024",
    excerpt: "A comprehensive guide to the recently adopted Nepal Standards on Auditing and what they mean for your organization.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "5 Financial Strategies for Startups in Nepal",
    category: "Business Advisory",
    date: "Nov 10, 2024",
    excerpt: "Essential financial planning strategies every startup founder in Nepal should know.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "VAT Compliance: Common Mistakes to Avoid",
    category: "Tax Updates",
    date: "Oct 5, 2024",
    excerpt: "Learn about the most frequent VAT compliance errors and how to ensure your business stays on the right side of regulations.",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Risk Management Framework for SMEs",
    category: "Business Advisory",
    date: "Sep 18, 2024",
    excerpt: "A practical guide to implementing an effective risk management framework for small and medium enterprises.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "INGO Financial Reporting Best Practices",
    category: "Industry Insights",
    date: "Aug 22, 2024",
    excerpt: "Best practices for financial reporting and donor compliance in the non-profit sector in Nepal.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

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
          Knowledge Hub
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
        >
          Insights &amp; Updates
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
            {filteredPosts.length === 0 ? (
              <div className="card-elevated p-12 text-center text-muted-foreground">
                No posts found in this category.
              </div>
            ) : (
              <>
                {/* Featured */}
                <Reveal direction="up">
                  <div className="card-elevated mb-8 group overflow-hidden">
                    <div className="relative h-56 sm:h-72 overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                      <span className="absolute top-4 left-4 text-xs font-semibold bg-accent/90 text-accent-foreground px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                    <div className="p-7">
                      <h2 className="font-heading text-2xl lg:text-3xl font-bold mt-1 mb-4">{featuredPost.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-5">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {featuredPost.date}
                        </div>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-1 text-sm font-medium text-accent"
                        >
                          Read More <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {gridPosts.length > 0 && (
                  <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
                    {gridPosts.map((post) => (
                      <StaggerItem key={post.title}>
                        <div className="card-elevated h-full group overflow-hidden flex flex-col">
                          <div className="relative h-44 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                            <span className="absolute top-3 left-3 text-xs font-medium text-accent bg-card/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-accent/20">
                              {post.category}
                            </span>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar size={12} />
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <Reveal direction="right" delay={0.3}>
              <div className="card-elevated p-6">
                <h3 className="font-heading text-lg font-semibold mb-5 flex items-center gap-2">
                  <Tag size={16} className="text-accent" /> Categories
                </h3>
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left text-sm px-4 py-2.5 rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? "bg-accent text-accent-foreground font-medium"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
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
};

export default Blog;
