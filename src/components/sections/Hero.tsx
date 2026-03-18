"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { HeroScene } from "@/components/3d/HeroScene";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <HeroScene />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-secondary font-mono tracking-[0.3em] uppercase text-sm md:text-base">
            Exploring the Digital Frontier
          </h2>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-6">
            P.L.N. CHAITANYA <span className="block text-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">BHAGYAKIRAN</span>
          </h1>

          <div className="text-base md:text-2xl font-light text-foreground/80 h-12">
            I am a{" "}
            <span className="text-primary font-bold border-r-2 border-primary pr-1">
              <Typewriter
                words={[
                  "DevOps Engineer",
                  "Full-Stack Developer",
                  "AWS Enthusiast",
                  "Cloud Architect",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="max-w-xl mx-auto text-foreground/60 leading-relaxed text-xs md:text-base">
            Crafting premium, production-level digital solutions where high-end design meets robust engineering. Specializing in modern web stacks and immersive user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#projects">
              <Button variant="primary" size="lg" className="group rounded-full px-8">
                View Work
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <Link href="/resume">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Download CV
                <Download className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-16 md:mt-24 grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto"
        >
          {[
            { label: "Projects", value: "25+" },
            { label: "Tech Stack", value: "15+" },
          ].map((stat, i) => (
            <div key={i} className="glass p-5 rounded-[2rem] text-center space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{stat.value}</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-foreground/40 font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0" />
    </section>
  );
};
