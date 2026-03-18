"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, Search, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Web App", "UI/UX", "Mobile", "Blockchain"];

const projectsData = [
  {
    title: "Scalable Event Management System",
    category: "Cloud Architecture",
    description: "Designed a serverless backend using AWS Lambda + API Gateway. Stored event data in DynamoDB with optimized read/write capacity. Implemented Cognito authentication for secure user login.",
    image: "/project1.png",
    tech: ["AWS Lambda", "DynamoDB", "Cognito", "Node.js"],
    link: "https://github.com/chaithu255525",
    github: "https://github.com/chaithu255525",
  },
  {
    title: "Stay Scouter – Accommodation Platform",
    category: "Full-Stack Web App",
    description: "Developed a responsive accommodation discovery platform using React + TypeScript. Built secure backend APIs with Node.js & Express.js, enabling property listings and efficient filtering logic.",
    image: "/project2.png",
    tech: ["React", "TypeScript", "Node.js", "Express.js"],
    link: "https://github.com/chaithu255525",
    github: "https://github.com/chaithu255525",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h2 className="text-primary font-mono tracking-widest uppercase text-sm">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white italic">Featured <span className="text-secondary">Creations</span></h3>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 glass rounded-full overflow-hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "text-foreground/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="glass" size="sm" className="rounded-full">
                        <Github size={18} className="mr-2" /> Code
                    </Button>
                    <Button variant="primary" size="sm" className="rounded-full">
                        <ExternalLink size={18} className="mr-2" /> Demo
                    </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{project.category}</span>
                    <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                  </div>
                  <Layers className="text-foreground/20 group-hover:text-primary/50 transition-colors" size={24} />
                </div>
                
                <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-foreground/80 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="rounded-full">
          Browse All Projects
        </Button>
      </div>
    </section>
  );
};
