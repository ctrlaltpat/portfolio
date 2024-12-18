'use client';

import { motion } from 'framer-motion';
import { projects } from './data';
import { ProjectSlider } from '../components/projects/project-slider';

// Group projects by primary tag
const groupedProjects = projects.reduce((acc, project) => {
  const primaryTag = project.tags[0];
  if (!acc[primaryTag]) {
    acc[primaryTag] = [];
  }
  acc[primaryTag].push(project);
  return acc;
}, {} as Record<string, typeof projects>);

export default function Projects() {
  return (
    <div className="space-y-12">
      <section>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h1>
        
        <motion.p 
          className="text-lg text-white/80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A collection of my work in web development, creative coding, and software engineering.
        </motion.p>

        <div className="space-y-16">
          {Object.entries(groupedProjects).map(([category, categoryProjects], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectSlider
                title={category}
                projects={categoryProjects}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
