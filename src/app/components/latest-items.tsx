'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

interface Item {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  category: 'project' | 'blog' | 'media';
}

interface SectionProps {
  title: string;
  items: Item[];
  link: string;
}

function Section({ title, items, link }: SectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link 
          href={link}
          className="text-primary hover:text-primary-hover flex items-center gap-2 group"
        >
          View All
          <HiArrowRight className="" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="perspective-1000"
          >
            <Link href={item.link} className="block group">
              <motion.div 
                className="glass-panel overflow-hidden"
                style={{
                  transform: 'rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg)',
                  boxShadow: '2em 4em 6em -2em rgba(0,0,0,0.5), 1em 2em 3.5em -2.5em rgba(0,0,0,0.5)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  borderRadius: '0.5em',
                }}
                whileHover={{
                  transform: 'rotate3d(0, 0, 0, 0deg) rotate(0deg)',
                }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-white/60 line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function LatestItems() {
  const latestProjects: Item[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js, React, and TypeScript.',
      image: '/projects/portfolio.jpg',
      link: '/projects/portfolio',
      date: '2023-12-01',
      category: 'project'
    },
    {
      title: 'AI Code Assistant',
      description: 'An AI-powered code assistant that helps developers write better code.',
      image: '/projects/ai-code.jpg',
      link: '/projects/ai-code',
      date: '2023-11-15',
      category: 'project'
    },
    {
      title: 'Game Development',
      description: 'A collection of games built with various technologies.',
      image: '/projects/games.jpg',
      link: '/projects/games',
      date: '2023-10-01',
      category: 'project'
    }
  ];

  const latestBlogPosts: Item[] = [
    {
      title: 'Building a Modern Portfolio',
      description: 'Learn how to build a modern portfolio website with Next.js and React.',
      image: '/blog/portfolio.jpg',
      link: '/blog/building-portfolio',
      date: '2023-12-15',
      category: 'blog'
    },
    {
      title: 'Creative Coding',
      description: 'Exploring creative coding with Three.js and WebGL.',
      image: '/blog/creative-coding.jpg',
      link: '/blog/creative-coding',
      date: '2023-11-30',
      category: 'blog'
    },
    {
      title: 'Web Development Tips',
      description: 'Tips and tricks for modern web development.',
      image: '/blog/web-dev.jpg',
      link: '/blog/web-dev-tips',
      date: '2023-11-01',
      category: 'blog'
    }
  ];

  const latestMedia: Item[] = [
    {
      title: 'Audio Visualizer',
      description: 'An interactive audio visualizer built with Three.js and Web Audio API.',
      image: '/media/audio-viz.jpg',
      link: '/media/audio-visualizer',
      date: '2023-12-10',
      category: 'media'
    },
    {
      title: 'Skateboarding',
      description: 'Skateboarding videos and photos from London.',
      image: '/media/skate.jpg',
      link: '/media/skateboarding',
      date: '2023-11-20',
      category: 'media'
    },
    {
      title: 'Pixel Art',
      description: 'A collection of pixel art animations.',
      image: '/media/pixel-art.jpg',
      link: '/media/pixel-art',
      date: '2023-10-15',
      category: 'media'
    }
  ];

  return (
    <div className="space-y-12">
      <Section title="Latest Projects" items={latestProjects} link="/projects" />
      <Section title="Latest Blog Posts" items={latestBlogPosts} link="/blog" />
      <Section title="Latest Media" items={latestMedia} link="/media" />
    </div>
  );
}
