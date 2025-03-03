interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

const FilterButton = ({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`cap-btn filter-btn ${isSelected ? "active" : ""}`}
  >
    {children}
  </button>
);

export default function TagFilter({
  tags,
  selectedTags,
  onTagSelect,
}: TagFilterProps) {
  const isSelected = (tag: string) =>
    selectedTags.includes(tag) || (tag === "all" && selectedTags.length === 0);

  return (
    <div className="tag-filter">
      <FilterButton
        isSelected={isSelected("all")}
        onClick={() => onTagSelect("all")}
      >
        All
      </FilterButton>

      {tags.map((tag) => (
        <FilterButton
          key={`${tag}-tag`}
          isSelected={isSelected(tag)}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </FilterButton>
      ))}
    </div>
  );
}
