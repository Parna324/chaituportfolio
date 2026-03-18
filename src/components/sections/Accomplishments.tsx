"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";

const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Oct' 24",
    link: "#",
  },
  {
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    date: "Sep' 24",
    link: "#",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep' 24",
    link: "#",
  },
  {
    title: "Hack-lot Hackathon Winner",
    issuer: "Hack-lot",
    date: "Apr' 24",
    link: "#",
  },
];

const achievements = [
  {
    title: "Cloud Specialist",
    description: "Successfully deployed cloud-based applications using AWS, Docker, Kubernetes.",
    date: "Mar' 25",
    icon: <Trophy className="text-primary" />,
  },
  {
    title: "Algorithm Expert",
    description: "Solved 70+ Leetcode questions focusing on complex DSA patterns.",
    date: "Oct' 25",
    icon: <Target className="text-secondary" />,
  },
];

export const Accomplishments = () => {
  return (
    <section id="accomplishments" className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Certificates */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-primary font-mono tracking-widest uppercase text-sm">Credentials</h2>
            <h3 className="text-4xl font-bold text-white italic">Professional <span className="text-secondary">Certifications</span></h3>
          </div>

          <div className="grid gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border-white/5 flex items-center justify-between group hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{cert.title}</h4>
                    <p className="text-foreground/40 text-sm font-mono">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-secondary font-mono tracking-widest uppercase text-sm">Milestones</h2>
            <h3 className="text-4xl font-bold text-white italic">Key <span className="text-primary">Achievements</span></h3>
          </div>

          <div className="grid gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-[2rem] border-white/5 relative overflow-hidden group hover:border-secondary/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none scale-[4] translate-x-1/4 -translate-y-1/4">
                   {ach.icon}
                </div>
                
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5">
                      {ach.icon}
                    </div>
                    <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">{ach.date}</span>
                  </div>
                  <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">{ach.title}</h4>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
