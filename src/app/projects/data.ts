import { Project } from '../components/projects/project-card';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Modern Portfolio',
    description: 'A modern portfolio website built with React, TypeScript, and Three.js. Features 3D animations, glass morphism effects, and responsive design.',
    image: '/images/projects/portfolio.jpg',
    tags: ['React', 'TypeScript', 'Three.js', 'Next.js', 'Tailwind CSS'],
    links: {
      live: 'https://portfolio.example.com',
      github: 'https://github.com/example/portfolio',
    },
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with features like user authentication, product management, cart functionality, and payment integration.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    links: {
      live: 'https://shop.example.com',
      github: 'https://github.com/example/ecommerce',
    },
  },
  {
    id: 'project-3',
    title: '3D Game Engine',
    description: 'A WebGL-based 3D game engine with physics simulation, particle systems, and support for custom shaders.',
    image: '/images/projects/game-engine.jpg',
    tags: ['WebGL', 'Three.js', 'TypeScript', 'React Three Fiber'],
    links: {
      github: 'https://github.com/example/game-engine',
    },
  },
  {
    id: 'project-4',
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered features like message translation, sentiment analysis, and smart replies.',
    image: '/images/projects/chat-app.jpg',
    tags: ['React', 'Socket.io', 'TensorFlow.js', 'Express'],
    links: {
      live: 'https://chat.example.com',
      github: 'https://github.com/example/chat-app',
    },
  },
  {
    id: 'project-5',
    title: 'Music Visualizer',
    description: 'Interactive music visualizer that creates stunning visual effects based on audio frequency analysis.',
    image: '/images/projects/music-viz.jpg',
    tags: ['Web Audio API', 'Canvas', 'React', 'GSAP'],
    links: {
      live: 'https://viz.example.com',
      github: 'https://github.com/example/music-viz',
    },
  },
  {
    id: 'project-6',
    title: 'Productivity Dashboard',
    description: 'Personal productivity dashboard with task management, time tracking, and data visualization.',
    image: '/images/projects/dashboard.jpg',
    tags: ['React', 'D3.js', 'Firebase', 'Material-UI'],
    links: {
      live: 'https://dash.example.com',
      github: 'https://github.com/example/dashboard',
    },
  },
];
