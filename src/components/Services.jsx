import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '../utils/motion';

const services = [
  {
    image: '/assets/services/ai-automation.png',
    title: 'AI Automation',
    description:
      'Automate repetitive workflows and optimize operations with intelligent systems.',
  },
  {
    image: '/assets/services/predictive-analytics.png',
    title: 'Predictive Analytics',
    description:
      'Use data-driven insights to forecast trends and make smarter decisions.',
  },
  {
    image: '/assets/services/ai-chat.png',
    title: 'AI Chat Systems',
    description:
      'Build conversational AI tools that enhance customer interaction.',
  },
  {
    image: '/assets/services/data-intelligence.png',
    title: 'Data Intelligence',
    description:
      'Transform complex data into actionable business insights.',
  },
];

/* ── Spotlight Card ── */
const SpotlightCard = ({ image, title, description, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-60px' }}
      className="group relative rounded-2xl overflow-visible"
    >
      {/* Shooting Star Border — spinning light trail on hover */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'conic-gradient(from var(--border-angle), transparent 60%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0.8) 90%, transparent 100%)',
          animation: 'border-spin 3s linear infinite',
        }}
      />

      {/* Card body — sits on top of the spinning border */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06] transition-colors duration-300 group-hover:border-transparent">
        {/* Spotlight Glow — follows cursor */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: isHovered
              ? `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 40%)`
              : 'none',
          }}
        />

        {/* Card Content */}
        <div className="relative z-10">
          {/* Image */}
          <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover opacity-70 transition duration-700 group-hover:opacity-90 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed transition-colors duration-300 group-hover:text-white/60">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Services Section ── */
export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-black">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
            What We Do
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl font-bold text-center mb-5"
        >
          <span className="text-white">Our AI</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Services
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUpVariant}
          className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-16"
        >
          We provide intelligent solutions that help businesses automate
          processes, analyze data, and scale efficiently using cutting-edge AI
          technologies.
        </motion.p>

        {/* Spotlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <SpotlightCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
