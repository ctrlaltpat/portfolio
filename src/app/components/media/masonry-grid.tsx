'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MediaItem, StandardMediaItem, SnippetMediaItem } from '@/app/media/types';
import Image from 'next/image';
import { FiCode } from 'react-icons/fi';
import { MediaModal } from './media-modal';
import { SnippetModal } from './snippet-modal';

interface MasonryGridProps {
  items: MediaItem[];
}

export function MasonryGrid({ items }: MasonryGridProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const columns = useMemo(() => {
    const cols = [[], [], []] as MediaItem[][];
    items.forEach((item, i) => {
      cols[i % 3].push(item);
    });
    return cols;
  }, [items]);

  const getRandomHeight = () => {
    const heights = ['h-48', 'h-64', 'h-72', 'h-96'];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`relative overflow-hidden rounded-lg bg-zinc-900 group cursor-pointer ${getRandomHeight()}`}
                onClick={() => setSelectedItem(item)}
              >
                {item.type === 'snippet' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCode className="w-12 h-12 text-zinc-600" />
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/40 px-2 py-0.5 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {selectedItem?.type === 'snippet' ? (
        <SnippetModal
          snippet={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      ) : selectedItem && (
        <MediaModal
          item={selectedItem as StandardMediaItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
