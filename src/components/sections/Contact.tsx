"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully (Demo Mode)");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-primary font-mono tracking-[0.3em] uppercase text-sm">Get In Touch</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white italic">Let's Build Something <span className="text-primary">Legendary</span></h3>
        <p className="text-foreground/60 text-lg">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="grid gap-6">
            <div className="glass p-8 rounded-3xl flex gap-6 items-center">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <Mail className="text-primary" size={28} />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-mono text-foreground/40 uppercase tracking-widest">Email Me</div>
                <div className="text-white font-bold text-lg">punnamchaitanya92671@gmail.com</div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl flex gap-6 items-center">
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <Phone className="text-secondary" size={28} />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-mono text-foreground/40 uppercase tracking-widest">Mobile</div>
                <div className="text-white font-bold text-lg">+91-9346071153</div>
              </div>
            </div>
          </div>

          <div className="p-10 glass rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent border-primary/20 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 blur-[100px] rounded-full group-hover:bg-primary/50 transition-all duration-500" />
            <h4 className="text-3xl font-black text-white relative z-10">Available for <br/> <span className="text-primary italic">Global Ops & Dev</span></h4>
            <p className="text-foreground/60 mt-4 relative z-10 leading-relaxed uppercase text-xs tracking-widest">
              Current Status: Open to remote & onsite roles in DevOps, Cloud Architecture, and Full-Stack Engineering.
            </p>
            <div className="mt-8 relative z-10">
               <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                   Start a Conversation <ArrowRight size={20} />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass p-10 rounded-[3rem] space-y-6 border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Full Name</label>
              <input
                required
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Subject</label>
            <input
              required
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="What are you interested in?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your message goes here..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            className="w-full rounded-2xl"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={20} className="ml-2" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
