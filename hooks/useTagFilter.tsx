import { useState } from "react";

type ItemWithTags = unknown & {
    tags: string[]
}

export const useTagFilter = <T extends ItemWithTags>(items: T[]) => {

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    
      const tags = Array.from(
        new Set(items.flatMap((item) => item.tags))
      ).sort();
    
      const handleSelectTag = (tag: string) => {
        if (tag === "all") {
          setSelectedTags([]);
        } else {
          setSelectedTags((prev) => {
            if (prev.includes(tag)) {
              return prev.filter((t) => t !== tag);
            }
            return [...prev, tag];
          });
        }
      };
    
      const filteredItems =
        selectedTags.length === 0
          ? items
          : items.filter((item) =>
              selectedTags.some((tag) => item.tags.includes(tag))
            );

    return {filteredItems, tags, selectedTags, handleSelectTag}
}
