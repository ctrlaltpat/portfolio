import { strapiURL } from "@/lib/strapi";
import { MediaItem } from "@/lib/strapi/types";

export interface ImgProps {
  item: MediaItem;
}

// TODO: refactor for media page
export default function Img({ item }: ImgProps) {
  return (
    <article className="media-item-img">
      <img
        src={`${strapiURL()}${item.image?.url}`}
        alt={item.image?.alternativeText}
      />
    </article>
  );
}
