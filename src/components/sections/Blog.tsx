"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, Hash } from "lucide-react";
import { Button } from "@/components/ui/Button";

const blogPosts = [
  {
    title: "Mastering Next.js 15 for Enterprise Portfolios",
    date: "March 15, 2026",
    readTime: "8 min read",
    excerpt: "Exploring the best practices for building high-performance, SEO-optimized portfolios using the latest Next.js features.",
    tags: ["Next.js", "WebPerf", "SEO"],
    slug: "mastering-nextjs-15",
  },
  {
    title: "The Future of 3D on the Web with Three.js",
    date: "March 10, 2026",
    readTime: "12 min read",
    excerpt: "How WebGL and React Three Fiber are revolutionizing user engagement through immersive 3D experiences.",
    tags: ["Three.js", "WebGL", "UX"],
    slug: "future-of-3d-on-web",
  },
  {
    title: "Glassmorphism vs Neumorphism: A 2026 Perspective",
    date: "March 5, 2026",
    readTime: "6 min read",
    excerpt: "Diving deep into modern UI trends and how to balance aesthetics with accessibility in premium designs.",
    tags: ["UI/UX", "Design", "CSS"],
    slug: "glassmorphism-vs-neumorphism",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h2 className="text-secondary font-mono tracking-widest uppercase text-sm">Insights</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase italic">Thought <span className="text-primary italic">Leadership</span></h3>
        </div>
        <Button variant="outline" className="rounded-full">Visit Blog Archive</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-8 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary/40 transition-all duration-500"
          >
            <div className="space-y-6">
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center text-[10px] font-mono text-primary/80 uppercase tracking-widest">
                    <Hash size={10} className="mr-0.5" /> {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-foreground/50 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-foreground/40 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={14} /> {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} /> {post.readTime}
                </div>
              </div>
              
              <Button variant="ghost" className="w-full justify-between group/btn text-sm font-bold">
                Read Article
                <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
