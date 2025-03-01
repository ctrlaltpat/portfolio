import { strapiURL } from "@/lib/strapi";
import { MediaItem } from "@/lib/strapi/types";
import { Suspense } from "react";

export interface VideoProps {
  item: MediaItem;
}

export default function Video({ item }: VideoProps) {
  return (
    <article className="media-item-vid">
      <Suspense>
        <video autoPlay loop muted preload="none" style={{ maxWidth: "100%" }}>
          <source
            src={`${strapiURL()}${item.video?.url}`}
            type="video/mp4"
          />
        </video>
      </Suspense>
    </article>
  );
}
