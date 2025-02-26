type StrapiItem = {
  id: string;
  documentId: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export interface MediaData {
  url: string;
  alternativeText?: string;
  caption?: string;
}

export type Tag = { id?: string; title: string; documentId?: string };

type content = [
  {
    body: string;
  }
];

type MediaType = "note" | "snippet" | "image" | "video";

export interface BlogPost extends StrapiItem {
  title: string;
  slug: string;
  blocks: content;
  category?: {
    name: string;
  };
  cover: MediaData;
  tags: Tag[];
}

export interface BlogPostsResponse {
  data: BlogPost[];
}

export interface MediaItem extends StrapiItem {
  title: string;
  tags: Tag[];
  type: MediaType;
  content?: string;
  image?: MediaData;
  video?: MediaData;
  source?: string; // url
}

export interface MediaItemsResponse {
  data: MediaItem[];
}

// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   // status: "started" | "archived" | "done";
//   tags: Tag[];
//   links: {
//     live?: string;
//     github?: string;
//   };
// }
