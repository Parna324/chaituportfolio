"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter italic group">
          <span className="text-white group-hover:text-primary transition-colors">PLN.C</span>
          <span className="text-primary group-hover:text-white transition-colors">.BHAGYAKIRAN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/resumes.pdf" target="_blank" rel="noreferrer">
            <Button variant="glass" size="sm" className="border-white/20">
              Resume
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-200 border-b border-white/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/chaithu255525" target="_blank" rel="noreferrer">
                  <Github size={20} className="text-foreground/60 hover:text-primary cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/chaithu2525" target="_blank" rel="noreferrer">
                  <Linkedin size={20} className="text-foreground/60 hover:text-primary cursor-pointer" />
                </a>
                <a href="mailto:punnamchaitanya92671@gmail.com">
                  <Mail size={20} className="text-foreground/60 hover:text-primary cursor-pointer" />
                </a>
              </div>
              <Link href="/resumes.pdf" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full rounded-full">
                  Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
