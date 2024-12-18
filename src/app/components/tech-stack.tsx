'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'HTML5', icon: '/icons/html5.svg' },
  { name: 'CSS3', icon: '/icons/css3.svg' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'VS Code', icon: '/icons/vscode.svg' },
  { name: 'Three.js', icon: '/icons/threejs.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
] as const;

export function TechStack() {
  return (
    <motion.div 
      className="grid grid-cols-4 md:grid-cols-6 gap-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {technologies.map(({ name, icon }, index) => (
        <motion.div
          key={name}
          className="glass-panel p-2 aspect-square flex items-center justify-center group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src={icon}
              alt={name}
              fill
              className="object-contain filter group-hover:brightness-125 transition-all"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
