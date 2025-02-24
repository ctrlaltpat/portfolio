"use client";

import { useMemo } from "react";
import { useState } from "react";
import { TagFilter } from "@/components/ui/tag-filter";
import { useTagFilter } from "@/hooks/useTagFilter";

import { mediaItems } from "./data";
import { Modal } from "@/components/ui/modal/modal";
import { MediaItem } from "./types";
import useElementSize from "@/hooks/useElementSize";
import { BREAKPOINTS } from "@/utils/styles";

export default function Media() {
  const { filteredItems, tags, selectedTags, handleSelectTag } =
    useTagFilter(mediaItems);
  const [ref, size] = useElementSize();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const diff = 96;

  const columns = useMemo(() => {
    const cols = [[], [], [], []] as MediaItem[][];
    if (size.width < BREAKPOINTS.lg - diff) cols.pop();
    if (size.width < BREAKPOINTS.md - diff) cols.pop();
    filteredItems.forEach((item, i) => {
      cols[i % cols.length].push(item);
    });
    return cols;
  }, [size, filteredItems]);

  return (
    <div ref={ref} className="media">
      <h2>Media</h2>
      <h3>
        A collection of my creative work, including videos, images, code
        snippets and other media.
      </h3>
      <section>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleSelectTag}
        />
        <div className="media-items">
          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              {column.map((item) => (
                <figure
                  className="debug"
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                >
                  <h5>{item.id}</h5>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Modal
        content={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      ></Modal>
    </div>
  );
}
