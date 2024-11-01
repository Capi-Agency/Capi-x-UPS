import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_MODULE_URL,
    headers: {
        // channel: ,
    },
});

//xu ly data truoc khi gui server
request.interceptors.request.use(
    async (config: any) => {
        const url: string = config.url || '';

        //k can kiem tra token neu la dang nhap
        // if (url.indexOf('/dang-nhap') >= 0) {
        //     return config;
        // }

        // config.headers.Authorization =
        //     Cookies.get('token') != (null || undefined) ? `Bearer ${Cookies.get('token')}` : '';

        // const req = new NextRequest(new URL('http://localhost:3000/')); // Provide a valid URL
        // config.headers[COOKIE_LANGUAGE] = req.cookies.get('NEXT_LOCALE');

        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export const get = async (path: string, req?: any) => {
    const response = await request.get(path, req);
    return response;
};

export const post = async (path: string, req?: any, headers?: any) => {
    const response = await request.post(path, req, headers);
    return response;
};

export const put = async (path: any, req?: any, headers?: any) => {
    const response = await request.put(path, req, headers);
    return response;
};

export const update = async (path: any, req?: any, headers?: any) => {
    const response = await request.post(path, req, headers);
    return response;
};

export const del = async (path: any) => {
    const response = await request.delete(path);
    return response;
};

export default request;
