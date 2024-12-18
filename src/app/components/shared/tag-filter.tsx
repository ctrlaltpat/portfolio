import { motion } from 'framer-motion';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

const buttonBaseClass = "relative inline-block px-2 py-0.5 text-xs font-bold font-mono uppercase cursor-pointer overflow-hidden rounded-md border border-[#3b83f6] transition-all duration-50 ease-in-out";

const buttonAnimations = {
  // whileHover: {
  //   boxShadow: '0 3px 0 4px #060606, -1px 4px 4px 4px rgba(0, 0, 0, 0.95)',
  //   top: '0px'
  // },
  whileTap: {
    top: '2px',
    boxShadow: '0 1px 0 4px rgba(6, 6, 6, 0.71), -1px 2px 4px 4px rgba(5, 90, 181, 0.19)',
    transition: { duration: 0.15, ease: 'easeInOut' }
  }
};

const FilterButton = ({ tag, isSelected, onClick, children }: {
  tag: string;
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.button
    onClick={onClick}
    className={buttonBaseClass}
    style={{
      background: 'radial-gradient(at top right, #141515, #000)',
      color: '#3b83f6',
      boxShadow: isSelected
        ? '0 1px 0 4px rgba(6, 6, 6, 0.71), -1px 2px 4px 4px rgba(5, 90, 181, 0.19)'
        : '0 3px 0 4px #060606, -1px 4px 4px 4px rgba(0, 0, 0, 0.9)',
      top: isSelected ? '2px' : '0',
    }}
    {...buttonAnimations}
  >
    {children}
  </motion.button>
);

export function TagFilter({ tags, selectedTags, onTagSelect }: TagFilterProps) {
  const isSelected = (tag: string) => selectedTags.includes(tag) || (tag === 'all' && selectedTags.length === 0);

  return (
    <motion.div 
      className="flex flex-wrap gap-2 mb-6 ctrlaltfilter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <FilterButton
        tag="all"
        isSelected={isSelected('all')}
        onClick={() => onTagSelect('all')}
      >
        All
      </FilterButton>
      
      {tags.map((tag) => (
        <FilterButton
          key={tag}
          tag={tag}
          isSelected={isSelected(tag)}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </FilterButton>
      ))}
    </motion.div>
  );
}
