type StrapiItem = {
  id: string;
  documentId: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export interface MediaData {
  url: string;
  ext: string;
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

export interface Article extends StrapiItem {
  title: string;
  slug: string;
  blocks: content;
  category?: {
    name: string;
  };
  cover: MediaData;
  tags: Tag[];
}

export interface ArticlesResponse {
  data: Article[];
}

export interface MediaItem extends StrapiItem {
  title: string;
  tags: Tag[];
  type: MediaType;
  content?: string;
  image?: MediaData;
  video?: MediaData;
  source?: string;
}

export interface MediaItemsResponse {
  data: MediaItem[];
}

export interface Project extends StrapiItem {
  title: string;
  cover: MediaData;
  demo: MediaData;
  demoLink: string;
  repo: string;
  stage: string;
  tags: Tag[];
}

export interface ProjectsResponse {
  data: Project[];
}
