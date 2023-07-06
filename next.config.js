/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    serverRuntimeConfig: {
        port: process.env.PORT || 3000,// default: 3000
    }
}
