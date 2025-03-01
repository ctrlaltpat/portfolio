import { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchMediaItems } from "@/lib/strapi";
import MediaGrid from "@/components/media/media-grid";
import Loader from "@/components/ui/loader";

async function fetcher() {
  const { data } = await fetchMediaItems();
  if (data.length === 0) notFound();

  return data;
}

export default function Media() {
  const mediaItems = fetcher();

  return (
    <div className="media">
      <h2>Media</h2>
      <h3>
        A collection of my creative work, including videos, images, code
        snippets and other media.
      </h3>
      <Suspense fallback={<Loader />}>
        <MediaGrid items={mediaItems} />
      </Suspense>
    </div>
  );
}
