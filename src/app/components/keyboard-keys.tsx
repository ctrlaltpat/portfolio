'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function KeyboardKeys() {
  const router = useRouter();

  const handleClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex gap-4">
      {['CTRL', 'ALT', 'PAT'].map((key, index) => (
        <motion.button
          key={key}
          onClick={handleClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative inline-block px-[1.2rem] pt-[0.4rem] pb-0 text-[1rem] font-bold font-mono uppercase cursor-pointer overflow-hidden rounded-[10px] border-[1.5px] border-[#3b83f6] transition-all duration-50 ease-in-out"
          style={{
            background: 'radial-gradient(at top right, #141515, #000)',
            color: '#3b83f6',
            boxShadow: '0 4px 0 6px #060606, -1px 6px 6px 6px rgba(0, 0, 0, 0.9)',
            top: 0,
          }}
          whileHover={{
            boxShadow: '0 4px 0 6px #060606, -1px 6px 6px 6px rgba(0, 0, 0, 0.95)',
          }}
          whileTap={{
            top: 2,
            boxShadow: '0 2px 0 6px rgba(6, 6, 6, 0.71), -1px 4px 6px 6px rgba(5, 90, 181, 0.19)',
            transition: { duration: 0.15, ease: 'easeInOut' }
          }}
        >
          {key}
        </motion.button>
      ))}
    </div>
  );
}
