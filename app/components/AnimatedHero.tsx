'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

export default function AnimatedHero() {
  const scrollToInstallation = () => {
    const installationSection = document.getElementById('installation');
    if (installationSection) {
      installationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-2"
              >
                <span className="text-white">$</span>
                <span className="text-white">welcome_to_glotifybot</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl font-bold text-white"
              >
                Welcome to GlotifyBOT
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/80"
              >
                Your Discord Language Learning Assistant
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-4"
              >
                <Button href="#installation" onClick={scrollToInstallation}>
                  $ ./start.sh
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            $ ./features.sh
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-black border border-white/20 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Link href={feature.link} className="block hover:text-green-400 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="installation" className="py-20 px-4 bg-black border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-white"
          >
            $ ./get_started.sh
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/80 mb-8"
          >
            Get started with GlotifyBOT in minutes. Follow our simple installation guide and start learning languages today.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="/docs">
              $ ./install.sh
            </Button>
          </motion.button>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "/kataharini",
    description: "Get your daily dose of motivation with Kataharini quotes",
    link: "/commands#kataharini"
  },
  {
    title: "/whois",
    description: "View detailed information about a player's profile",
    link: "/commands#whois"
  },
  {
    title: "/recentmatch",
    description: "Check out the latest match details and statistics",
    link: "/commands#recentmatch"
  },
  {
    title: "/notes",
    description: "Access and manage your personal match notes",
    link: "/commands#notes"
  },
  {
    title: "/match",
    description: "Get comprehensive information about a specific match",
    link: "/commands#match"
  }
]; 