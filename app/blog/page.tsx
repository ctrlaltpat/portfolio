import { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchAllPosts } from "@/lib/strapi";
import BlogPosts from "@/components/blog/blog-posts";
import Loader from "@/components/ui/loader";

export const dynamic = "force-dynamic";

async function fetcher() {
  const { data } = await fetchAllPosts();
  if (data.length === 0) notFound();

  return data;
}

export default function Blog() {
  const posts = fetcher();

  return (
    <div className="blog">
      <h2>Blog</h2>
      <h3>
        Thoughts, tutorials and insights about web/software development,
        creative coding, and technology.
      </h3>
      <Suspense fallback={<Loader />}>
        <BlogPosts blogPosts={posts} />
      </Suspense>
    </div>
  );
}
