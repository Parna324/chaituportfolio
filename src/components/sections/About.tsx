"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const timelineData = [
  {
    year: "Jun' 25 - Jul' 25",
    title: "Data Structures in CPP",
    organization: "Cipher Schools",
    description: "Completed an intensive DSA program, implementing foundational and advanced concepts to solve complex computational problems.",
    type: "education",
  },
  {
    year: "Aug' 23 - Present",
    title: "Bachelor of Technology (CSE)",
    organization: "Lovely Professional University",
    description: "Currently pursuing B.Tech with a focus on Computer Science and Engineering. Current CGPA: 6.8.",
    type: "education",
  },
  {
    year: "Apr' 22 - Mar' 23",
    title: "Intermediate Education",
    organization: "Sri Chaitanya Junior College",
    description: "Completed intermediate with a focus on MPC. Result: 92%.",
    type: "education",
  },
  {
    year: "Apr' 20 - Mar' 21",
    title: "Matriculation (10th)",
    organization: "Sri Chaitanya High School",
    description: "Achieved a perfect 100% score in matriculation board exams.",
    type: "education",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Top Section: Photo & Bio */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image with Glassmorphic Frame */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative group lg:pr-12"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass shadow-2xl">
            <Image
              src="/profile.jpg" 
              alt="P.L.N. Chaitanya Bhagyakiran" 
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" 
            />
          </div>
          
          <div className="absolute -bottom-8 -right-4 glass p-8 rounded-[2rem] border-primary/20 shadow-2xl hidden md:block">
             <div className="text-primary font-black text-3xl tracking-tighter italic leading-none text-right">PLN.CB</div>
             <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-[0.3em] mt-2 text-right">Digital Architect</div>
          </div>
        </motion.div>

        {/* Profile Info */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-mono tracking-widest uppercase text-sm">The Architect</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              Engineering <span className="text-secondary">Future-Ready</span> Solutions
            </h3>
          </div>
          
          <p className="text-foreground/70 leading-relaxed text-lg">
            I am <span className="text-white font-bold">P.L.N. Chaitanya Bhagyakiran</span>, a dedicated Computer Science Undergraduate at Lovely Professional University. I specialize in bridging the gap between robust DevOps pipelines and high-performance full-stack applications.
          </p>

          <p className="text-foreground/50 leading-relaxed text-sm">
            My journey at LPU and Cipher Schools has been focused on mastering Data Structures in C++, cloud orchestration with AWS, and building scalable event-driven systems. I thrive at the intersection of logic and aesthetics.
          </p>
          
          <div className="flex pt-4">
            <Link href="/resumes.pdf" target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full px-8 group">
                Detailed Resume <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass p-6 rounded-3xl flex flex-col gap-2 group hover:border-primary/50 transition-colors">
              <Award className="text-primary group-hover:rotate-12 transition-transform" size={32} />
              <div className="text-white font-bold tracking-tight">Cloud Expert</div>
              <div className="text-[10px] text-foreground/40 uppercase font-mono">AWS • Docker • K8s</div>
            </div>
            <div className="glass p-6 rounded-3xl flex flex-col gap-2 group hover:border-secondary/50 transition-colors">
              <Calendar className="text-secondary group-hover:scale-110 transition-transform" size={32} />
              <div className="text-white font-bold tracking-tight">Active Learner</div>
              <div className="text-[10px] text-foreground/40 uppercase font-mono">B.Tech @ LPU</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Milestones */}
      <div className="space-y-12">
        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter inline-flex items-center gap-4">
          <div className="w-16 h-[2px] bg-primary/50" />
          Academic & Technical Milestones
        </h3>
        
        <div className="relative space-y-8 max-w-4xl">
          <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-white/10" />
          
          {timelineData.map((item, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="relative pl-16 group"
            >
              <div className="absolute left-0 top-1 p-3 rounded-full glass border border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 z-10">
                {item.type === "experience" ? (
                  <Briefcase size={20} className="text-primary" />
                ) : (
                  <GraduationCap size={20} className="text-secondary" />
                )}
              </div>
              
              <div className="glass p-6 rounded-3xl hover:border-primary/20 transition-all duration-300">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">{item.year}</span>
                <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                <p className="text-foreground/40 text-sm italic">{item.organization}</p>
                <p className="text-foreground/60 text-sm mt-3 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
