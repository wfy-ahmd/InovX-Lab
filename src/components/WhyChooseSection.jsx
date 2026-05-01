"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WhyChooseSection = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 0.4,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Content Reveal
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );

      // Cards Reveal
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 50%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-screen w-full"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <section className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-black -z-10 flex flex-col justify-center items-center">
        {/* 🌌 FIXED BACKGROUND LAYER (CINEMATIC EFFECT) */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"
        />

        {/* 🧠 CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
          <div ref={contentRef}>
            <p className="text-sm tracking-widest text-white/50 mb-4 uppercase">
              • Why Choose Us
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose InovX Lab
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              We build intelligent AI systems designed to optimize performance,
              enhance decision-making, and scale seamlessly with your business
              needs.
            </p>
          </div>

          {/* 🧩 CARDS */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "Smart Automation",
                desc: "Automate complex workflows with AI-driven efficiency.",
              },
              {
                title: "Scalable Systems",
                desc: "Built to grow with your business and handle large-scale operations.",
              },
              {
                title: "Real-Time Insights",
                desc: "Access live data analytics for smarter decision-making.",
              },
              {
                title: "Secure & Reliable",
                desc: "Advanced security and stable architecture for long-term performance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg text-left"
              >
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
