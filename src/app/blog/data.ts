import { BlogPost } from '../components/blog/blog-card';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-3d-portfolio',
    title: 'Building a 3D Portfolio with React Three Fiber',
    date: '2023-12-15',
    excerpt: 'Learn how to create engaging 3D animations and interactions using React Three Fiber and Three.js in a Next.js application.',
    coverImage: '/images/blog/3d-portfolio.jpg',
    tags: ['React', 'Three.js', 'WebGL'],
  },
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques for Better Web Design',
    date: '2023-12-10',
    excerpt: 'Explore modern CSS features like Container Queries, CSS Grid, and new viewport units to create responsive and dynamic layouts.',
    coverImage: '/images/blog/modern-css.jpg',
    tags: ['CSS', 'Web Design', 'Responsive'],
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices in 2024',
    date: '2023-12-05',
    excerpt: 'A comprehensive guide to TypeScript best practices, including strict mode, utility types, and advanced type inference.',
    coverImage: '/images/blog/typescript.jpg',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
  },
  {
    slug: 'web-performance',
    title: 'Optimizing Web Performance: A Deep Dive',
    date: '2023-11-30',
    excerpt: 'Learn how to measure and improve web performance using modern tools and techniques like Core Web Vitals and lazy loading.',
    coverImage: '/images/blog/performance.jpg',
    tags: ['Performance', 'Web Development', 'SEO'],
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    date: '2023-11-25',
    excerpt: 'A detailed look at React Server Components and how they change the way we build React applications.',
    coverImage: '/images/blog/server-components.jpg',
    tags: ['React', 'Next.js', 'Performance'],
  },
  {
    slug: 'creative-coding',
    title: 'Getting Started with Creative Coding',
    date: '2023-11-20',
    excerpt: 'An introduction to creative coding using JavaScript, including generative art, animations, and interactive experiences.',
    coverImage: '/images/blog/creative-coding.jpg',
    tags: ['Creative Coding', 'JavaScript', 'Art'],
  },
];
