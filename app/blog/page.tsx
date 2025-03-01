"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
// import Image from "next/image";

import { TagFilter } from "@/components/ui/tagFilter";
import Loader from "@/components/ui/loader";
import { fetchAllPosts, strapiURL } from "@/lib/strapi";
import { formatTimeAgo } from "@/utils/intl";
import { BlogPost } from "@/lib/strapi/types";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>();
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  useEffect(() => {
    async function fetchPosts() {
      const posts = await fetchAllPosts();

      setPosts(posts.data);
      setFilteredPosts(posts.data);
      setTags(
        Array.from(
          new Set(
            posts.data
              .map((item) => item.tags)
              .flat()
              .map((tag) => tag.title)
          )
        ).sort()
      );
    }

    fetchPosts();
  }, []);

  useMemo(() => {
    setFilteredPosts(
      selectedTags.length === 0
        ? posts
        : posts?.filter(({ tags }) =>
            selectedTags.some((tag) => tags.map((t) => t.title).includes(tag))
          )
    );
  }, [selectedTags]);

  if (!posts) return <Loader/>; // TODO

  return (
    <div className="blog">
      <h2>Blog</h2>
      <h3>
        Thoughts, tutorials and insights about web/software development,
        creative coding, and technology.
      </h3>
      <section>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleSelectTag}
        />
        <div className="posts">
          {filteredPosts?.map((post) => (
            <figure key={post.slug}>
              <h4>{post.title}</h4>
              <Suspense fallback={<div className="blog-img-fb"></div>}>
                {/* <Image src={`${strapiURL()}${post.cover.url}`} alt={post.cover.alternativeText || `post-${post.id}`} style={{objectFit: 'cover', fill: 'true'}}/> */}
                <img
                  src={`${strapiURL()}${post.cover.url}`}
                  alt={`post-${post.id}`}
                />
              </Suspense>
              <figcaption>
                <span>
                  {/* {post.category ? `${post.category.name} - ` : ""} */}
                  {formatTimeAgo(new Date(post.createdAt))}
                </span>
                <p className="description">{post.description}</p>
                <p className="excerpt">
                  {post.blocks[0].body.slice(0, 140)}...
                </p>
                <Link className="cap-btn" href={`/blog/${post.slug}`}>
                  Read more
                </Link>
                <div className="tags">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag.id}>{tag.title}</span>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
