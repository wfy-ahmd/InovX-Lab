import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const wrapperRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 70%",
          },
        }
      );

      // Form Reveal
      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={wrapperRef} className="relative py-32 bg-black">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Text Area */}
        <div ref={textRef} className="flex flex-col items-center">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-white">Let's Build Something</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
              Intelligent
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-16">
            Have an idea or project in mind? Let's collaborate and create
            AI-powered solutions that drive innovation and efficiency.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-8 md:p-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/[0.02] blur-[50px] rounded-full pointer-events-none" />

          {/* Name */}
          <div className="mb-6 relative z-10">
            <label
              htmlFor="contact-name"
              className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2.5"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.02] focus:shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)]"
            />
          </div>

          {/* Email */}
          <div className="mb-6 relative z-10">
            <label
              htmlFor="contact-email"
              className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2.5"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.02] focus:shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)]"
            />
          </div>

          {/* Message */}
          <div className="mb-8 relative z-10">
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.02] focus:shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)]"
            />
          </div>

          {/* Submit Button */}
          <div className="relative z-10">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-black text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] active:scale-95"
            >
              Send Message
              <Send className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 text-center text-sm font-medium text-white/80 animate-pulse relative z-10">
              ✓ Message sent successfully. We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
