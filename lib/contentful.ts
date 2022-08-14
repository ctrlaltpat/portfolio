import { ContentfulClientApi, createClient } from 'contentful';

export class ContentfulApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
    });
  }

  async fetchEntries(contentType: string) {
    return await this.client
      .getEntries({
        content_type: contentType,
      })
      .then((entries) => {
        if (entries && entries.items && entries.items.length > 0) {
          const content = entries.items;

          return content;
        }
        return [];
      });
  }

  async fetchBySlug(contentType: string, slug: string) {
    return await this.client
      .getEntries({
        content_type: contentType,
        'fields.slug[in]': slug,
      })
      .then((entries) => {
        if (entries && entries.items && entries.items.length > 0) {
          return entries.items[0];
        }
        return null;
      });
  }
}
