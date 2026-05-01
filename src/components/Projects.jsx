import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatbot System',
    description:
      'Smart conversational AI for automating customer interactions.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Business Analytics Dashboard',
    description:
      'Real-time data visualization platform for insights and performance tracking.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Automation Engine',
    description:
      'AI-powered system to streamline repetitive processes and workflows.',
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Recommendation System',
    description:
      'Intelligent system that delivers personalized user experiences.',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&q=80',
  },
];

import {
  staggerContainer,
  fadeUpVariant,
  projectCardContainer,
  projectCardItem,
  projectCardHover,
} from '../utils/motion';

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative py-24 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none -translate-y-[1px]">
        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <motion.path
            fill="white"
            fillOpacity="0.04"
            animate={{
              d: [
                'M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,0 L0,0 Z',
                'M0,60 C360,40 720,100 1080,60 C1260,40 1380,80 1440,60 L1440,0 L0,0 Z',
                'M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,0 L0,0 Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            fill="white"
            fillOpacity="0.02"
            animate={{
              d: [
                'M0,90 C400,50 800,110 1200,70 C1350,55 1400,85 1440,70 L1440,0 L0,0 Z',
                'M0,70 C400,110 800,50 1200,90 C1350,105 1400,65 1440,90 L1440,0 L0,0 Z',
                'M0,90 C400,50 800,110 1200,70 C1350,55 1400,85 1440,70 L1440,0 L0,0 Z',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none translate-y-[1px] rotate-180">
        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <motion.path
            fill="white"
            fillOpacity="0.04"
            animate={{
              d: [
                'M0,70 C300,110 600,30 900,70 C1100,95 1300,50 1440,70 L1440,0 L0,0 Z',
                'M0,90 C300,50 600,110 900,70 C1100,45 1300,100 1440,80 L1440,0 L0,0 Z',
                'M0,70 C300,110 600,30 900,70 C1100,95 1300,50 1440,70 L1440,0 L0,0 Z',
              ],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            fill="white"
            fillOpacity="0.02"
            animate={{
              d: [
                'M0,60 C250,100 750,40 1100,80 C1300,95 1400,55 1440,75 L1440,0 L0,0 Z',
                'M0,85 C250,45 750,105 1100,65 C1300,50 1400,90 1440,70 L1440,0 L0,0 Z',
                'M0,60 C250,100 750,40 1100,80 C1300,95 1400,55 1440,75 L1440,0 L0,0 Z',
              ],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </div>

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
            Portfolio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl font-bold text-center mb-5"
        >
          <span className="text-white">Our</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Projects
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUpVariant}
          className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-16"
        >
          Explore how we build intelligent AI-powered systems that solve
          real-world business challenges.
        </motion.p>

        {/* Projects Grid — Staggered Reveal */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={projectCardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectCardItem}
              whileHover={projectCardHover}
              className="group rounded-2xl border border-white/[0.06] bg-[#111] overflow-hidden backdrop-blur-sm transition-shadow duration-300 hover:border-white/[0.12] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.06)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-xs uppercase tracking-[0.15em] text-white/60 font-medium transition-colors duration-300 hover:bg-white/[0.08] hover:text-white/80">
                  View Project
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
