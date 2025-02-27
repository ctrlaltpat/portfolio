import { MediaItem } from "@/lib/types";

export interface ImgProps {
  item: MediaItem;
}

export default function Img({ item }: ImgProps) {
  return (
    <article className="media-item-img">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}${item.image?.url}`}
        alt={item.image?.alternativeText}
      />
    </article>
  );
}
