"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";

import { fetchPostBySlug } from "@/lib/strapi";
import { BlogPost } from "@/lib/types";
import { dateFormatter } from "@/utils/intl";
import { BlogPostContent } from "@/components/blog/blogPostContent";

const BackButton = () => (
  <Link href="/blog" className="cap-btn" style={{ margin: "20px" }}>
    Back
  </Link>
); // TODO

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const post = await fetchPostBySlug(slug);

      setLoading(false);
      setPost(post);
    }

    fetchPost();
  }, []);

  if (loading) return <div>Loading...</div>; // TODO
  if (!post) return notFound();

  const date = dateFormatter.format(new Date(post.createdAt));
  const content = post.blocks[0].body;

  return (
    <section className="blog-post">
      <h2>{post.title}</h2>
      <article>
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${post.cover.url}`}
          alt={`post-${post.id}`}
        />
        <h3>
          <span>{post.category ? `${post.category.name} - ` : ""}</span> {date}
        </h3>
        <div className="tags" style={{ justifyContent: "center" }}>
          {post.tags.map((tag) => (
            <span key={tag.id}>{tag.title}</span>
          ))}
        </div>
      </article>
      <BlogPostContent content={content} />
      <BackButton />
    </section>
  );
}

