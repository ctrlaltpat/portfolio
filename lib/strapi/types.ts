export type Tag = { id?: string; title: string; documentId?: string };

type content = [
  {
    body: string;
  }
];

type MediaType = "note" | "snippet" | "image" | "video";

export interface MediaData {
  url: string;
  ext: string;
  alternativeText?: string;
  caption?: string;
}

export interface StrapiItem {
  id: string;
  title: string;
  documentId: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

export interface StrapiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Article extends StrapiItem {
  slug: string;
  blocks: content;
  category?: {
    name: string;
  };
  cover: MediaData;
}

export interface MediaItem extends StrapiItem {
  type: MediaType;
  content?: string;
  image?: MediaData;
  video?: MediaData;
  source?: string;
}

export interface Project extends StrapiItem {
  cover: MediaData;
  demo: MediaData;
  demoLink: string;
  repo: string;
  stage: string;
}

export interface StrapiResponse<T extends StrapiItem> extends Response {
  data: T[];
  meta: StrapiMeta;
}
