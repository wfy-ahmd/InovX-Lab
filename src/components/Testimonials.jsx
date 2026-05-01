import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Alex Carter',
    role: 'Product Manager',
    text: '"InovX Lab transformed our workflow efficiency with intelligent automation. The results were beyond expectations."',
  },
  {
    name: 'Sarah Lee',
    role: 'Data Analyst',
    text: '"The predictive analytics tools provided deep insights that helped us make smarter business decisions."',
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    text: '"The AI chatbot system improved our customer engagement significantly. Highly recommended!"',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-black">
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
              Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Discover how our AI-powered solutions have helped businesses
            transform and grow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => {
            const initial = item.name.charAt(0);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="text-white/40"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/70 text-base leading-relaxed flex-1 mb-8 italic">
                  {item.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white shadow-inner">
                    {initial}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-white/50 text-xs mt-0.5">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
