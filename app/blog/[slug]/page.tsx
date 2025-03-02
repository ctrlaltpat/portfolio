import { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/blog-post";
import Loader from "@/components/ui/loader";
import { fetchPostBySlug } from "@/lib/strapi";

async function fetcher(slug: string) {
  const post = await fetchPostBySlug(slug);
  if (!post) notFound();

  return post;
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = fetcher(slug);

  return (
    <Suspense fallback={<Loader />}>
      <BlogPost post={post} />;
    </Suspense>
  );
}
