'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MasonryGrid } from '../components/media/masonry-grid';
import { mediaItems } from './data';
import { TagFilter } from '../components/shared/tag-filter';

export default function Media() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = Array.from(
    new Set(mediaItems.flatMap(item => item.tags))
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

  const filteredItems = selectedTags.length === 0
    ? mediaItems
    : mediaItems.filter(item => selectedTags.some(tag => item.tags.includes(tag)));

  return (
    <div className="space-y-12">
      <section>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Media
        </motion.h1>
        
        <motion.p 
          className="text-lg text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A collection of my creative work, including videos, images, code snippets and other media.
        </motion.p>

        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />

        <MasonryGrid items={filteredItems} />
      </section>
    </div>
  );
}
