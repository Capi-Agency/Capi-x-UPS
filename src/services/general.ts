import httpRequest from '../utils/httpRequest';

export const fnGetAllMenu = async () => {
    const query = `
        query {
            menu {
                raw_content
            }
        }
    `;
    return await httpRequest.post('', { query });
};

export const fnGetCompanyInfo = async () => {
    const query = `
        query {
            company_info {
                phone_number
                address
                email
                logo {
                    id
                }
                logo_negative {
                    id
                }
                link_facebook
                link_youtube
                link_instagram
            }
        }
    `;
    return await httpRequest.post('', { query });
};