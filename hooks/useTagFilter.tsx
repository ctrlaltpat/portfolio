import { Tag } from "@/lib/strapi/types";
import { useMemo, useState } from "react";

type ItemWithTags = unknown & {
  tags: Tag[];
};

export const useTagFilter = <T extends ItemWithTags[]>(items: T) => {
  const [filteredItems, setFilteredItems] = useState<ItemWithTags[]>(items);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = Array.from(
    new Set(
      items
        .map((item) => item.tags)
        .flat()
        .map((tag) => tag.title)
    )
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

  useMemo(() => {
    setFilteredItems(
      selectedTags.length === 0
        ? items
        : items?.filter(({ tags }) =>
            selectedTags.some((tag) => tags.map((t) => t.title).includes(tag))
          )
    );
  }, [selectedTags]);

  return {
    filteredItems,
    tags,
    selectedTags,
    handleSelectTag,
  };
};
