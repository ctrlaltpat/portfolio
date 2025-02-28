import qs from "qs";
import { BlogPostsResponse, MediaItemsResponse, ProjectsResponse } from "./types";

interface StrapiData {
  id: number;
  [key: string]: any;
}

interface StrapiResponse {
  data: StrapiData | StrapiData[];
}

export const strapiURL = () => process.env.NEXT_PUBLIC_STRAPI_URL;

export function spreadStrapiData(data: StrapiResponse): StrapiData | null {
  if (Array.isArray(data.data) && data.data.length > 0) {
    return data.data[0];
  }
  if (!Array.isArray(data.data)) {
    return data.data;
  }
  return null;
}

export default async function fetchContentType(
  contentType: string,
  params: Record<string, unknown> = {},
  spreadData?: boolean
): Promise<any> {
  try {
    const queryParams = { ...params };

    const url = new URL(`api/${contentType}`, strapiURL());

    const response = await fetch(`${url.href}?${qs.stringify(queryParams)}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Strapi (url=${url.toString()}, status=${
          response.status
        })`
      );
    }
    const jsonData: StrapiResponse = await response.json();
    return spreadData ? spreadStrapiData(jsonData) : jsonData;
  } catch (error) {
    console.error("FetchContentTypeError", error);
  }
}

export async function fetchAllPosts(): Promise<BlogPostsResponse> {
  return await fetchContentType(
    "articles",
    {
      populate: "*",
    },
    false
  );
}

export async function fetchPostBySlug(slug: string | string[] | undefined) {
  if(!slug) throw new Error('No slug provided!');
  return await fetchContentType(
    "articles",
    {
      filters: {
        slug,
      },
      populate: "*",
    },
    true
  );
}

export async function fetchMediaItems(): Promise<MediaItemsResponse> {
  return await fetchContentType(
    "media-items",
    {
      populate: "*",
    },
    false
  );
}

export async function fetchProjects(): Promise<ProjectsResponse> {
  return await fetchContentType(
    "projects",
    {
      populate: "*",
    },
    false
  );
}
