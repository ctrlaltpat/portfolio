"use client";

import { useEffect, useMemo } from "react";
import { useState } from "react";

import { TagFilter } from "@/components/ui/tagFilter";
import { Modal } from "@/components/ui/modal/modal";
import Snippet from "@/components/media/snippet";
import Video from "@/components/media/video";
import Img from "@/components/media/img";
import Note from "@/components/media/note";
import Loader from "@/components/ui/loader";
import { MediaItem } from "@/lib/strapi/types";
import useElementSize from "@/hooks/useElementSize";
import { BREAKPOINTS } from "@/utils/styles";
import { fetchMediaItems } from "@/lib/strapi";

export default function Media() {
  const [ref, size] = useElementSize();
  const [columns, setColumns] = useState<MediaItem[][]>([]);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const diff = 76;

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

  // TODO: udpate buttons to remove etc, refactor

  useEffect(() => {
    async function fetchMedia() {
      const mediaItems = await fetchMediaItems();

      setMediaItems(mediaItems.data);
      setFilteredItems(mediaItems.data);
      setTags(
        Array.from(
          new Set(
            mediaItems.data
              .map((item) => item.tags)
              .flat()
              .map((tag) => tag.title)
          )
        ).sort()
      );
    }

    fetchMedia();
  }, []);

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

  if (!mediaItems) return <Loader />; // TODO

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
                <figure className="debug" key={item.documentId}>
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
      ></Modal>
    </div>
  );
}
