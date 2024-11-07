/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['cms.upse.vn'],
        dangerouslyAllowSVG: true
    },
    env: {
        REACT_APP_API_MODULE_URL: process.env.REACT_APP_API_MODULE_URL,
        REACT_APP_API_ROOT_URL: process.env.REACT_APP_API_ROOT_URL,
        REACT_APP_ROOT_URL: process.env.REACT_APP_ROOT_URL,
        REACT_APP_IMG_URL: process.env.REACT_APP_IMG_URL,
    },
    experimental: {
        scrollRestoration: true,
    },
    compress: true,
};

export default nextConfig;
