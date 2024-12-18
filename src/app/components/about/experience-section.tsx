'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Developer',
    company: 'Multimedia Company',
    period: '2022 - 2024',
    description: 'Maintained thousands of templates using Typescipt, MJML and CSS',
    achievements: [
      'Reduced visual regression testing time by 50%',
      'Managed CI/CD Pipelines using Concourse and various scripts',
      'Increased test coverage by 20-30%',
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Networking Equipment and Services Company',
    period: '2019 - 2022',
    description: 'Developed and maintained multiple client projects using various technologies including React, Redux, TypeScript, and AngularJS.',
    achievements: [
      'Collaborated with cross-functional teams to deliver high-quality software',
      'Integrated various third-party APIs and services',
      'Co-facilitated interviews for successful new hires - Software Engineer, Product Owner'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Web Agency',
    period: '2017 - 2018',
    description: 'Built and maintained multiple accessible, responsive websites using PHP,HTML, CSS, and JavaScript.',
    achievements: [
      'Produced the intial UI for a brand launch, resulting in initial sales of over £80,000',
      'Successfully built 10+ pixel-perfect websites from bespoke designs',
      'Improved the accessibility score of websites by 20%'
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-12">
      <motion.h2 
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#0066ff]">{exp.title}</h3>
                <p className="text-white/80">{exp.company}</p>
              </div>
              <span className="text-sm text-white/60 mt-2 md:mt-0">{exp.period}</span>
            </div>
            
            <p className="text-white/80 mb-4">{exp.description}</p>
            
            <ul className="space-y-2">
              {exp.achievements.map((achievement, achievementIndex) => (
                <motion.li
                  key={achievementIndex}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                >
                  <span className="text-[#0066ff] mt-1">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
