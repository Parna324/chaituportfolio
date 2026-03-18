"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-12 rounded-[3rem] w-full max-w-md space-y-8 border-white/10"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 rounded-3xl bg-primary/10 text-primary border border-primary/20">
            <Shield size={40} />
          </div>
          <h1 className="text-3xl font-black text-white italic">Admin <span className="text-primary italic">Terminal</span></h1>
          <p className="text-foreground/40 text-sm uppercase tracking-widest font-mono">Restricted Access Zone</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-[0.2em] ml-2">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-foreground/20" size={20} />
              <input
                type="password"
                placeholder="Enter secret key..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
              />
            </div>
          </div>

          <Button variant="primary" size="lg" className="w-full rounded-2xl group">
            Authenticate
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>

        <p className="text-center text-[10px] text-foreground/20 font-mono">
          Unauthorized attempts are logged and monitored.
        </p>
      </motion.div>
    </div>
  );
}
