'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from './project-card';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface ProjectSliderProps {
  title: string;
  projects: Project[];
}

export function ProjectSlider({ title, projects }: ProjectSliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const newPage = direction === 'left' ? currentPage - 1 : currentPage + 1;
    
    if (newPage >= 0 && newPage < totalPages) {
      const itemWidth = sliderRef.current.offsetWidth / itemsPerPage;
      const newPosition = itemWidth * itemsPerPage * newPage;
      sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setCurrentPage(newPage);
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (!sliderRef.current) return;
    
    const itemWidth = sliderRef.current.offsetWidth / itemsPerPage;
    const newPosition = itemWidth * itemsPerPage * pageIndex;
    sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    setCurrentPage(pageIndex);
  };

  // Handle scroll snap on mobile touch end
  const handleTouchEnd = () => {
    if (!sliderRef.current) return;
    
    const container = sliderRef.current;
    const itemWidth = container.offsetWidth / itemsPerPage;
    const newPage = Math.round(container.scrollLeft / (itemWidth * itemsPerPage));
    setCurrentPage(newPage);
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      
      <div className="relative touch-pan-y">
        <div
          ref={sliderRef}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 overflow-x-hidden scrollbar-hide scroll-smooth max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] snap-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden group/card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-white/10 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-black/50 rounded-full text-white/80 hover:text-white transition-colors disabled:opacity-50"
            disabled={currentPage === 0}
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-2 bg-black/50 rounded-full text-white/80 hover:text-white transition-colors disabled:opacity-50"
            disabled={currentPage === totalPages - 1}
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
