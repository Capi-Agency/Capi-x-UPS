import httpRequest from '../utils/httpRequest';

export const fnGetListNews = async (
  page: number = 1,
  limit: number = 10,
  categorySlug: string | null = null,
  tagSlug: string | null = null,
  date: string | null = null,
  keyword: string | null = null,
  sort: any = true,
) => {
  let filterConditions = [];

  if (categorySlug) {
    filterConditions.push(
      `{ categories: { category: { slug: { _eq: "${categorySlug}" } } } }`,
    );
  }

  if (tagSlug) {
    filterConditions.push(`{ tags: { tag: { slug: { _eq: "${tagSlug}" } } } }`);
  }

  if (date) {
    filterConditions.push(`{ date_published: { _eq: "${date}" } }`);
  }

  if (keyword) {
    filterConditions.push(`{ title: { _contains: "${keyword}" } }`);
  }

  let filterString = filterConditions.length
    ? `filter: { _and: [${filterConditions.join(', ')}] }`
    : '';

  let query = `
        query {
            posts (page: ${page}, limit: ${limit}, sort: "${sort == true ? '-date_published' : 'date_published'}" ${filterString ? `, ${filterString}` : ''}) {
                short_content
            }
            posts_aggregated ${filterString ? `(${filterString})` : ''} {
                count {
                    slug
                }
            }
        }
    `;
  return await httpRequest.post(``, { query });
};

export const fnGetNewDetail = async (slug: string) => {
  let query = `
        query {
            posts_by_id(id: "${slug}") {
                raw_content
            }
        }
    `;

  return await httpRequest.post(``, { query });
};

export const fnGetCateAndTags = async () => {
  let query = `
    query {
      a_tags {
        slug
        title
        raw
      }
      a_categories {
        slug
        title
        raw
      }
    }
  `;

  return await httpRequest.post(``, { query });
};
