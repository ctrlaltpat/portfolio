import { Suspense } from "react";
import { notFound } from "next/navigation";
import MediaGrid from "@/components/media/media-grid";
import Loader from "@/components/ui/loader";
import { fetchFromStrapi, strapiContent } from "@/lib/strapi";
import { MediaItem } from "@/lib/strapi/types";

export const dynamic = "force-dynamic";

async function fetcher() {
  const { data } = await fetchFromStrapi<MediaItem>(strapiContent.media);
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
