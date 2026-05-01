import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';

export function App() {
  return (
    <>
      {/* Logo - Top Left Corner */}
      <div className="fixed top-6 left-6 z-50">
        <img
          src="/assets/logo.png"
          alt="InovX-Lab"
          className="h-12 w-auto object-contain"
        />
      </div>

      <main className="min-h-screen w-full bg-black text-neutral-50 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <SplineSceneBasic />
        </div>
      </main>
    </>
  );
}
