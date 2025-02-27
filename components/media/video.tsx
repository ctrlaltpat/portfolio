import { MediaItem } from "@/lib/types";
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
            src={`${process.env.NEXT_PUBLIC_API_URL}${item.video?.url}`}
            type="video/mp4"
          />
        </video>
      </Suspense>
    </article>
  );
}
