"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Terminal, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="text-primary" />,
    skills: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 85 },
    ],
  },
  {
    title: "Frameworks & Cloud",
    icon: <Shield className="text-secondary" />,
    skills: [
      { name: "AWS (Lambda, S3, RDS)", level: 85 },
      { name: "Node.js / Express", level: 88 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Docker & Kubernetes", level: 82 },
      { name: "Jenkins & CI/CD", level: 80 },
      { name: "Linux / Shell Scripting", level: 85 },
    ],
  },
  {
    title: "Tools & Soft Skills",
    icon: <Settings className="text-accent" />,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code & Postman", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-primary font-mono tracking-[0.3em] uppercase text-sm">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white italic">Technical <span className="text-primary">Mastery</span></h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] space-y-8 hover:shadow-[0_0_50px_rgba(139,92,246,0.1)] transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, si) => (
                  <div key={si} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={i === 0 ? "h-full bg-primary" : i === 1 ? "h-full bg-secondary" : "h-full bg-accent"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
