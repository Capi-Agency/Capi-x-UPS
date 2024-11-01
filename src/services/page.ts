import httpRequest from '../utils/httpRequest';

export const getDataPage = async (slug: string) => {
    return await httpRequest.post(`/${slug}`);
};

export const fnGetHomePage = async () => {
    const query = `
        query {
            pages_by_id(id: "trang-chu-R5") {
                raw_content
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetProductBySlug = async (slug: string, limit: number = 9, page: number = 1) => {
    const query = `
        query {
            products(
                limit: ${limit}, 
                page: ${page}, 
                sort: "date_created", 
                filter: {
                    categories: {
                        category: {
                            slug: {
                                _eq: "${slug}"
                            }
                        }
                    }
                }
            ) {
                slug
                name
                blurb
                address
                cover {
                    id
                }
            }

            category_detail: product_categories(
                filter: {
                    slug: {
                        _eq: "${slug}"
                    }
                }
            ) {
                name
                slug
                description
                meta_title
                meta_keyword
                meta_description
                cover {
                    id
                }
            }

            categories_orther: product_categories(
                filter: {
                    slug: {
                        _neq: "${slug}"
                    }
                }
            ) {
                name
                slug
                cover {
                    id
                }
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetProductDetailBySlug = async (slug: string, _slug: string) => {
    const query = `
        query {
            product_detail: products(
                filter: {
                    slug: {
                        _eq: "${_slug}"
                    }
                }
            ) {
                raw_content
            }
            
            other_products: products(
                sort: "date_created", 
                filter: {
                    _and: [
                        {
                            categories: {
                                category: {
                                    slug: {
                                        _eq: "${slug}"
                                    }
                                }
                            },
                        },
                        {
                            slug: {
                                _neq: "${_slug}"
                            }
                        }
                    ]
                    
                }
            ) {
                slug
                name
                blurb
                address
                cover {
                    id
                }
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnNewPage = async (limit = 12, page = 1) => {
    const query = `
        query {
                news(limit: ${limit}, page: ${page}, sort: "-from_date") {
                slug
                name
                blurb
                cover {
                    id
                }
                from_date
                is_trendy_new
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetTags = async () => {
    const query = `
        query {
            new_tags (limit: 10) {
            slug
            name
        }
    }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetCategoriesNew = async () => {
    const query = `
        query {
            new_categories (limit: 10) {
            slug
            name
            cover {
                id
            }
        }
    }
    `;
    return await httpRequest.post('', { query });
};
export const fnGetCategoriesNewDetail = async (slug: string) => {
    const query = `
        query {
            new_categories_by_id(id: "${slug}") {
            slug
            name
            cover {
                id
            }
        }
    }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetRecruitment = async (keyword = "", slug = "") => {
    const query = `
        query {
            recruitment(
                sort: "-from_date", 
                filter: { 
                    ${keyword ? `name: { _icontains: "${keyword}"}` : ''},
                    ${slug ? `position: { slug: { _icontains: "${slug}" } }` : ''}
                }
            ) {
                slug
                name
                from_date
                to_date
                location
            }
        }
    `;

    return await httpRequest.post('', { query });
};

export const fnGetPositionsRecruitment = async () => {
    const query = `
        query {
        positions {
        slug
        name
        }
    }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetProducts = async () => {
    const query = `
        query {
            products(limit: 10, sort: "date_created") {
                slug
                name
                blurb
                cover {
                    id
                },
                address
                meta_title
                meta_keyword
                meta_description
            }
        }
    `;

    return await httpRequest.post('', { query });
};

export const fnGetNewTags = async (limit: number = 10) => {
    const query = `
        query {
            new_tags (limit: ${limit}) {
                slug
                name
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetAboutUs = async () => {
    const query = `
        query {
            pages_by_id(id: "gioi-thieu-Ps") {
                name
                slug
                blurb
                raw_content
                cover {
                    id
                }
                meta_title
                meta_keyword
                meta_description
            }
        }
    `;

    return await httpRequest.post('', { query });
};

export const fnGetNewDetail = async (slug: string) => {
    const query = `
            query {
                news_by_id(id: "${slug}") {
                slug
                name
                blurb
                cover {
                    id
                }
                date_created
                from_date
                content
                keywords
                meta_title_tag
                meta_description_tag
                categories {
                    category {
                        name
                        cover {
                            id
                        }
                    }
                }
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetNews = async (limit: number) => {
    const query = `
        query {
            news(limit: ${limit}, page: 1, sort: "-from_date") {
                slug
                name
                blurb
                cover {
                    id
                }
                is_hot_new
                is_trendy_new
                from_date
                date_created
            }
    }

    `;
    return await httpRequest.post('', { query });
};

export const fnGetNewsbyCategory = async (slug: string) => {
    const query = `
        query {
            news(limit: 100, page: 1, sort: "-from_date", filter: {
                categories: {
                    category: {
                        slug: {
                            _eq: "${slug}"
                        }
                    }
                }
            }) {
                slug
                name
                blurb
                cover {
                    id
                }
                is_hot_new
                is_trendy_new
                from_date
                date_created
            }
    }

    `;
    return await httpRequest.post('', { query });
};

export const fnHotGetNewsbyCategory = async (slug: string) => {
    const query = `
        query {
            news(limit: 1, page: 1, sort: "-from_date", filter: {
                is_hot_new: {
                    _eq: true
                }
                categories: {
                    category: {
                        slug: {
                            _eq: "${slug}"
                        }
                    }
                }
            }) {
                slug
                name
                blurb
                cover {
                    id
                }
                is_hot_new
                is_trendy_new
                from_date
                date_created
            }
    }

    `;
    return await httpRequest.post('', { query });
};

export const fnGetRelatedNews = async (slug: string) => {
    const query = `
        query {
            # Bước 1: Lấy thông tin danh mục của bài viết hiện tại dựa trên slug
            news(filter: { slug: { _eq: "${slug}" } }) {
                categories {
                    category {
                        slug
                    }
                }
            }
        }
    `;

    // Bước 2: Gọi API để lấy danh mục của bài viết hiện tại
    const response = await httpRequest.post('', { query });
    const categories = response.data.data.news[0]?.categories || [];

    // Nếu không tìm thấy danh mục, trả về mảng rỗng
    if (categories.length === 0) {
        return [];
    }

    // Lấy slug của danh mục đầu tiên (hoặc có thể xử lý nhiều danh mục nếu cần)
    const categorySlug = categories[0].category.slug;

    // Bước 3: Truy vấn các bài viết khác cùng danh mục
    const relatedQuery = `
        query {
            news(limit: 4, page: 1, sort: "date_created", filter: {
                categories: {
                    category: {
                        slug: {
                            _eq: "${categorySlug}"
                        }
                    }
                },
                slug: {
                    _neq: "${slug}" # Lọc ra bài viết hiện tại
                }
            }) {
                slug
                name
                blurb
                cover {
                    id
                }
                date_created
            }
        }
    `;

    // Gọi API lần thứ hai để lấy các bài viết liên quan
    const relatedResponse = await httpRequest.post('', { query: relatedQuery });
    return relatedResponse;
};

export const fnGetLatestNewsByCategory = async (slug: string, limit = 3) => {
    const query = `
        query {
            news(limit: ${limit}, page: 1, sort: "-from_date", filter: {
                categories: {
                    category: {
                        slug: {
                            _eq: "${slug}"
                        }
                    }
                }
            }) {
                slug
                name
                blurb
                cover {
                    id
                }
                from_date
                date_created
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetPage = async (slug: string) => {
    const query = `
        query {
            pages_by_id(id: "${slug}") {
                raw_content
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const sendContact = async (data: any) => {
    const query = `
        mutation {
            create_contact_ticket_item(data: {
                full_name: "${data?.full_name}",
                email: "${data?.email}",
                phone: "${data?.phone}",
                content: "${data?.content}"
            })
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetCampaigns = async () => {
    const query = `
    query {
        campaigns(limit: 2, sort: "-date_created") {
            cover {
            id
            }
            url
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnSearch = async (keyword: string, categorySlug = "", tagSlug = "") => {
    const filters = [];

    if (keyword) {
        filters.push(`name: { _icontains: "${keyword}" }`);
    }

    if (categorySlug) {
        filters.push(`categories: { category: { slug: { _eq: "${categorySlug}" } } }`);
    }

    if (tagSlug) {
        filters.push(`tags: { tag: { slug: { _eq: "${tagSlug}" } } }`);
    }

    const query = `
      query {
        news(sort: "date_created", filter: { ${filters.join(", ")} }) {
          slug
          name
          blurb
          from_date
          cover {
            id
          }
        }
      }
    `;

    return await httpRequest.post('', { query });
};

export const fnGetRecumentDetail = async (slug: string) => {
    const query = `
       query {
        recruitment_by_id(id: "${slug}") {
        name
        salary
        location
        experience
        content
        from_date
        to_date
    }
}
    `;
    return await httpRequest.post('', { query });
};
