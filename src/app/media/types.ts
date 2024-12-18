export interface BaseMediaItem {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface StandardMediaItem extends BaseMediaItem {
  type: 'image' | 'video' | 'audio';
  url: string;
  coverImage: string;
}

export interface SnippetMediaItem extends BaseMediaItem {
  type: 'snippet';
  code: string;
  language: string;
  coverImage?: string;
}

export type MediaItem = StandardMediaItem | SnippetMediaItem;
