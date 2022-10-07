/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['cdn.sanity.io', 'cdn.jsdelivr.net'],
    },
}

module.exports = nextConfig
