'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from '../components/blog/blog-card';
import { blogPosts } from './data';
import { TagFilter } from '../components/shared/tag-filter';

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const tags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();
  
  const handleTagSelect = (tag: string) => {
    if (tag === 'all') {
      setSelectedTags([]);
    } else {
      setSelectedTags(prev => {
        if (prev.includes(tag)) {
          return prev.filter(t => t !== tag);
        }
        return [...prev, tag];
      });
    }
  };

  const filteredPosts = selectedTags.length === 0
    ? blogPosts
    : blogPosts.filter(post => selectedTags.some(tag => post.tags.includes(tag)));

  return (
    <div className="space-y-8">
      <section className="py-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Blog
        </motion.h1>
        
        <motion.p 
          className="text-lg text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Thoughts, tutorials, and insights about web development, creative coding, and technology.
        </motion.p>

        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}