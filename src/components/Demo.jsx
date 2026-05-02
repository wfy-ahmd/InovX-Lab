import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Cpu, Shield, Zap } from 'lucide-react';

export const Demo = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Grid & Fades */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Top Left Home Button */}
      <div className="absolute top-8 left-6 md:left-12 z-50">
        <a 
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Core
        </a>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/50 text-[10px] font-mono tracking-widest uppercase mb-6">
            Interactive Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            EXPERIENCE THE <br /> FUTURE OF AI.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Step into the InovX neural interface. See how our intelligent systems 
            transform raw data into autonomous decisions in real-time.
          </p>
        </motion.div>

        {/* Demo Video/Interface Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-5xl aspect-video rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-3xl overflow-hidden group shadow-2xl"
        >
          {/* Mock UI Elements */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-white rounded-full blur-3xl opacity-20"
                />
                <button className="relative w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                  <Play size={32} fill="currentColor" />
                </button>
             </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/10 bg-black/40 backdrop-blur-md px-6 flex items-center justify-between">
            <div className="flex gap-8">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Cpu size={14} /> Processing: <span className="text-white/80">98.4 TFLOPS</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Zap size={14} /> Latency: <span className="text-white/80">1.2ms</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Shield size={14} /> Security: <span className="text-green-400">ACTIVE</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl">
          {[
            { icon: Cpu, title: "Neural Core", desc: "Next-gen processing power for complex automation." },
            { icon: Zap, title: "Live Sync", desc: "Instant data reflection across all neural nodes." },
            { icon: Shield, title: "Secure AI", desc: "Enterprise-grade protection for sensitive models." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
            >
              <item.icon className="text-white mb-4" size={24} />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Subtle Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_51%)] bg-[length:100%_4px]" />
    </div>
  );
};
