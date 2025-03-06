"use client";

import { use } from "react";

import BlogPostContent from "@/components/blog/blog-post-content";
import { strapiURL } from "@/lib/strapi";
import { Article } from "@/lib/strapi/types";
import { ClientDate } from "../ui/date";
import { TransitionLink } from "../ui/transitionLink";

const BackButton = () => (
  <TransitionLink href="/blog" {...{ className: "cap-btn" }}>
    Back
  </TransitionLink>
);

export default function BlogPost({ post }: { post: Promise<Article> }) {
  const { blocks, category, cover, createdAt, id, tags, title } = use(post);
  const content = blocks[0].body;

  return (
    <section className="blog-post">
      <h2>{title}</h2>
      <article>
        <img src={`${strapiURL()}${cover.url}`} alt={`post-${id}`} />
        <h3>
          <span>{category ? `${category.name} - ` : ""}</span>
          {ClientDate(createdAt)}
        </h3>
        <div className="tags" style={{ justifyContent: "center" }}>
          {tags.map((tag) => (
            <span key={tag.id}>{tag.title}</span>
          ))}
        </div>
      </article>
      <BlogPostContent content={content} />
      <BackButton />
    </section>
  );
}
