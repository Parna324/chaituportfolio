import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-background/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-white">PLN</span>
            <span className="text-primary">CHAITANYA</span>
          </Link>
          <p className="text-foreground/60 max-w-xs uppercase text-xs tracking-[0.2em]">
            Senior Full-Stack Developer & UI Designer. Crafting futuristic digital experiences.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/chaithu255525" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chaithu2525" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:punnamchaitanya92671@gmail.com" className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-foreground/40 text-sm font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} P.L.N. Chaitanya Bhagyakiran.
        </div>
      </div>
    </footer>
  );
};
