import { notFound } from "next/navigation";

import { fetchPostBySlug } from "@/lib/strapi";
import BlogPost from "@/components/blog/blog-post";


async function fetcher(slug: string) {
  const post = await fetchPostBySlug(slug);
  if (!post) notFound();

  return post;
}

export default async function Post({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const post = fetcher(slug);

  return <BlogPost post={post}/>;
}

