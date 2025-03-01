"use client";
import { use, useMemo, useState } from "react";

import { TagFilter } from "@/components/ui/tagFilter";
import { Modal } from "@/components/ui/modal/modal";
import Snippet from "@/components/media/snippet";
import Video from "@/components/media/video";
import Img from "@/components/media/img";
import Note from "@/components/media/note";
import { MediaItem } from "@/lib/strapi/types";
import useElementSize from "@/hooks/useElementSize";
import { BREAKPOINTS } from "@/utils/styles";

export default function MediaGrid({ items }: { items: Promise<MediaItem[]> }) {
  const mediaItems = use(items);
  const tags = Array.from(
    new Set(
      mediaItems
        .map((item) => item.tags)
        .flat()
        .map((tag) => tag.title)
    )
  ).sort();

  const [ref, size] = useElementSize();
  const [columns, setColumns] = useState<MediaItem[][]>([]);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>(mediaItems);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const diff = 56;

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
    setColumns(() => {
      const cols = [[], [], [], []] as MediaItem[][];
      if (size.width < BREAKPOINTS.lg - diff) cols.pop();
      if (size.width < BREAKPOINTS.md - diff) cols.pop();

      filteredItems.forEach((item, i) => {
        cols[i % cols.length].push(item);
      });
      return cols;
    });
  }, [size, filteredItems]);

  useMemo(() => {
    setFilteredItems(
      selectedTags.length === 0
        ? mediaItems
        : mediaItems?.filter(({ tags }) =>
            selectedTags.some((tag) => tags.map((t) => t.title).includes(tag))
          )
    );
  }, [selectedTags]);

  return (
    <>
      <section ref={ref}>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleSelectTag}
        />
        <div className="media-items">
          {columns.map((column, colIndex) => (
            <div className="media-col" key={colIndex}>
              {column.map((item) => (
                <figure key={item.documentId}>
                  <div className="top">
                    <div>
                      <span>&#10005;</span>
                      <span>—</span>
                      <span onClick={() => setSelectedItem(item)}>
                        &#10094;&#10095;
                      </span>
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                  {item.type === "snippet" && (
                    <Snippet content={item.content!} />
                  )}
                  {item.type === "note" && <Note content={item.content!} />}
                  {item.type === "image" && <Img item={item} />}
                  {item.type === "video" && <Video item={item} />}
                  <div className="tags">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag.id}>{tag.title}</span>
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Modal
        item={selectedItem as MediaItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
