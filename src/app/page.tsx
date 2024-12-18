'use client';

import { motion } from 'framer-motion';
import { LatestItems } from './components/latest-items';

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading"
          >
            
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {"<Patrick/>"}
            </span>
          </motion.h1>
          <p className="text-lg text-white/80 mb-4">
            Software Engineer • Skater • Bajan
          </p>
          <p className="text-lg text-white/80 mb-4">
            London, UK
          </p>
          <p className="text-white/60">
            I build, maintain and improve modern web and software applications with a focus on user experience and performance.
            I love creative coding and enjoy exploring the latest technologies in the world of web development. 
          </p>
        </motion.div>
      </section>

      <LatestItems />
    </div>
  );
}
