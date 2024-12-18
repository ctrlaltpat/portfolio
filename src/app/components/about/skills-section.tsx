'use client';

import { motion } from 'framer-motion';

const skills = {
  'Frontend': [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js',
    'HTML5', 'CSS3', 'JavaScript'
  ],
  'Backend': [
    'Node.js', 'Express', 'Python', 'Ruby', 'PostgreSQL', 'REST APIs'
  ],
  'Tools & Others': [
    'Git', 'Docker', 'Concourse', 'CI/CD', 'Jest',
    'Cypress', 'Figma'
  ]
};

export function SkillsSection() {
  return (
    <section className="py-12">
      <motion.h2 
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#0066ff]">
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-[#0066ff]/10 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
