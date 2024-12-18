'use client';

import { motion } from 'framer-motion';
import { SkillsSection } from '../components/about/skills-section';
import { ExperienceSection } from '../components/about/experience-section';
import { ContactSection } from '../components/about/contact-section';

function About() {
  return (
    <div className="space-y-12">
      <section className="py-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h1>

        <motion.div 
          className="glass-panel p-6 space-y-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p>
            Hi! I&apos;m Patrick, a passionate full-stack developer based in London with a deep love for creating 
            beautiful and functional web experiences..
          </p>
          
          <p>
            My journey in tech started with an interest in creating a multiplayer game in Unity. Over time, 
            I&apos;ve honed my skills in web development, and 
            worked on a range of projects, from simple landing pages to complex web applications.
          </p>

          <p>
            When I&apos;m not coding, you can find me rollerskating through London&apos;s streets, gaming, or 
            experimenting with new web technologies. I&apos;m always excited to collaborate on interesting 
            projects and learn new things.
          </p>
        </motion.div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default About;
