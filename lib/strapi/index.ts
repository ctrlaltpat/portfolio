import qs from "qs";
import { StrapiItem, StrapiResponse } from "./types";

export const strapiURL = () => process.env.NEXT_PUBLIC_STRAPI_URL;
export const strapiAuthToken = () => process.env.STRAPI_AUTH_TOKEN;

export const strapiContent = {
  blog: "articles",
  media: "media-items",
  projects: "projects",
} as const;

type ContentType = (typeof strapiContent)[keyof typeof strapiContent];

export const fetchFromStrapi = async <T extends StrapiItem>(
  contentType: ContentType,
  params: Record<string, unknown> = {}
): Promise<StrapiResponse<T>> => {
  const queryParams = {
    populate: "*",
    ...params,
  };

  const url = new URL(`api/${contentType}`, strapiURL());

  const response = await fetch(`${url.href}?${qs.stringify(queryParams)}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${strapiAuthToken()}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from Strapi (url=${url.toString()}, status=${
        response.status
      })`
    );
  }

  const jsonData: StrapiResponse<T> = await response.json();

  return jsonData;
};
