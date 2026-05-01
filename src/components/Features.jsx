import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, LineChart, ShieldCheck } from 'lucide-react';

const featuresData = [
  {
    icon: Zap,
    title: 'Smart Automation',
    description: 'Automate complex workflows with AI-driven efficiency.',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    description: 'Built to grow with your business and handle large-scale operations.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Insights',
    description: 'Access live data analytics for smarter decision-making.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Advanced security and stable architecture for long-term performance.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-black">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why Choose InovX Lab
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We build intelligent AI systems designed to optimize performance, enhance decision-making, and scale seamlessly with your business needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
