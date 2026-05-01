import React from 'react';
import { Navbar } from './components/Navbar';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseSection } from './components/WhyChooseSection';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CinematicFooter } from './components/ui/motion-footer';
import { Chatbot } from './components/Chatbot';

export function App() {
  return (
    <div className="bg-black text-neutral-50 min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Main wrapper must be relative with a high z-index and background to scroll over the fixed footer */}
      <main className="relative z-10 bg-black rounded-b-[40px] shadow-2xl border-b border-white/10 pb-10">
        <section id="hero" className="min-h-screen w-full flex items-center justify-center p-6 pt-20">
          <div className="w-full max-w-6xl">
            <SplineSceneBasic />
          </div>
        </section>

        <About />

        {/* Services Section */}
        <Services />
      </main>

      {/* Cinematic Curtain Reveal for Why Choose */}
      <WhyChooseSection />

      {/* Second main wrapper for the rest of the page, sliding over WhyChoose */}
      <main className="relative z-10 bg-black rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/10 pt-10 rounded-b-[40px] border-b pb-10">
        {/* Projects Section */}
        <Projects />

        {/* FAQ Section */}
        <FAQ />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Cinematic Curtain Reveal Footer */}
      <CinematicFooter />
      
      <Chatbot />
    </div>
  );
}
