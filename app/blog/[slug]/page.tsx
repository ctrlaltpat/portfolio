import { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/blog-post";
import Loader from "@/components/ui/loader";
import { fetchFromStrapi, strapiContent } from "@/lib/strapi";
import { Article } from "@/lib/strapi/types";

async function fetcher(slug: string) {
  const { data } = await fetchFromStrapi<Article>(strapiContent.blog, {
    filters: {
      slug,
    },
  });
  if (!data) notFound();

  return data[0];
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
      <BlogPost post={post} />
    </Suspense>
  );
}
