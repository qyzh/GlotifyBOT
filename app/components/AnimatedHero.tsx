'use client';

import React, { useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import { animate, stagger, inView } from 'motion';

interface Feature {
  title: string;
  description: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "/kataharini",
    description: "Get your daily dose of motivation with Kataharini quotes",
    link: "/docs#commands"
  },
  {
    title: "/whois",
    description: "View detailed information about a player's profile",
    link: "/docs#commands"
  },
  {
    title: "/recentmatch",
    description: "Check out the latest match details and statistics",
    link: "/docs#commands"
  },
  {
    title: "/notes",
    description: "Access and manage your personal match notes",
    link: "/docs#commands"
  },
  {
    title: "/match",
    description: "Get comprehensive information about a specific match",
    link: "/docs#commands"
  }
];

const TerminalButton: React.FC<{ href: string; onClick?: () => void; children: React.ReactNode }> = ({ 
  href, 
  onClick, 
  children 
}) => (
  <div className="pt-4">
    <Button href={href} onClick={onClick}>
      {children}
    </Button>
  </div>
);

export default function AnimatedHero() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToInstallation = React.useCallback(() => {
    const installationSection = document.getElementById('installation');
    if (installationSection) {
      installationSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const memoizedFeatures = useMemo(() => features, []);

  useEffect(() => {
    if (terminalRef.current) {
      const elements = Array.from(terminalRef.current.children);
      animate(
        elements,
        { opacity: [0, 1], y: [20, 0] } as any,
        { duration: 0.8, delay: stagger(0.2) }
      );
    }
  }, []);

  useEffect(() => {
    if (featuresRef.current) {
      const elements = Array.from(featuresRef.current.children);
      inView(elements, () => {
        animate(
          elements,
          { opacity: [0, 1], y: [20, 0] } as any,
          { duration: 0.8, delay: stagger(0.2) }
        );
      }, { amount: 0.5 } as any);
    }
  }, []);

  useEffect(() => {
    if (ctaRef.current) {
      const elements = Array.from(ctaRef.current.children);
      inView(elements, () => {
        animate(
          elements,
          { opacity: [0, 1], y: [20, 0] } as any,
          { duration: 0.8, delay: stagger(0.2) }
        );
      }, { amount: 0.5 } as any);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Terminal Window */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden p-4">
        <div className="w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden border border-white/20">
          {/* Terminal Header */}
          <div className="bg-black px-4 py-2 flex items-center border-b border-white/20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6">
            <div ref={terminalRef} className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-white">$</span>
                <span className="text-white">welcome_to_glotifybot</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white">
                Welcome to GlotifyBOT
              </h1>
              
              <p className="text-white/80">
                Your Discord Language Learning Assistant
              </p>
              
              <TerminalButton href="#installation" onClick={scrollToInstallation}>
                $ ./start.sh
              </TerminalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            $ ./features.sh
          </h2>
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {memoizedFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-black border border-white/20 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Link href={feature.link} className="block transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="installation" className="py-20 px-4 bg-black border-t border-white/20">
        <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            $ ./get_started.sh
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get started with GlotifyBOT in minutes. Follow our simple installation guide and start learning languages today.
          </p>
          <div
            onMouseEnter={(e) => animate(e.currentTarget, { scale: 1.05 }, { duration: 0.2 })}
            onMouseLeave={(e) => animate(e.currentTarget, { scale: 1 }, { duration: 0.2 })}
            onMouseDown={(e) => animate(e.currentTarget, { scale: 0.95 }, { duration: 0.1 })}
            onMouseUp={(e) => animate(e.currentTarget, { scale: 1 }, { duration: 0.1 })}
          >
            <Button href="/docs">
              $ ./install.sh
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 