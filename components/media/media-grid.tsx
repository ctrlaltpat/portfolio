"use client";

import { use, useLayoutEffect, useState } from "react";

import Img from "@/components/media/img";
import Note from "@/components/media/note";
import Snippet from "@/components/media/snippet";
import Video from "@/components/media/video";
import Modal from "@/components/ui/modal";
import TagFilter from "@/components/ui/tagFilter";
import { useTagFilter } from "@/hooks/useTagFilter";
import useElementSize from "@/hooks/useElementSize";
import { BREAKPOINTS } from "@/utils/styles";
import { MediaItem } from "@/lib/strapi/types";

export default function MediaGrid({ items }: { items: Promise<MediaItem[]> }) {
  const mediaItems = use(items);
  const { filteredItems, tags, selectedTags, handleSelectTag } =
    useTagFilter<MediaItem[]>(mediaItems);

  // TODO: add "pagination" with scroll (use server action)

  const diff = 56;
  const [ref, size] = useElementSize();
  const [columns, setColumns] = useState<MediaItem[][]>([]);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  useLayoutEffect(() => {
    setColumns(() => {
      const cols = [[], [], [], []] as MediaItem[][];
      if (size.width < BREAKPOINTS.lg - diff) cols.pop();
      if (size.width < BREAKPOINTS.md - diff) cols.pop();

      (filteredItems as MediaItem[]).forEach((item, i) => {
        cols[i % cols.length].push(item);
      });
      return cols;
    });
  }, [size, filteredItems]);

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
