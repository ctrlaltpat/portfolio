"use client";

import { Suspense, use } from "react";
// import Image from "next/image";

import TagFilter from "@/components/ui/tagFilter";
import { strapiURL } from "@/lib/strapi";
import { formatTimeAgo } from "@/utils/intl";
import { Article } from "@/lib/strapi/types";
import { useTagFilter } from "@/hooks/useTagFilter";
import Link from "next/link";

export default function Articles({
  blogPosts,
}: {
  blogPosts: Promise<Article[]>;
}) {
  const posts = use(blogPosts);
  const { filteredItems, tags, selectedTags, handleSelectTag } =
    useTagFilter<Article[]>(posts);

  return (
    <>
      <section>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleSelectTag}
        />
        <div className="posts">
          {(filteredItems as Article[])?.map((post) => (
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
                <Link
                  href={`/blog/${post.slug}`}
                  {...{ className: "cap-btn" }}
                >
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
    </>
  );
}
