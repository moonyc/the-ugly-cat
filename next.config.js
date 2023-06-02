/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: "yt3.ggpht.com", 
              port: ''
            },
            {
              protocol: 'https',
              hostname: "i.ytimg.com", 
              port: ''
            }
          ],
    }
}


module.exports = nextConfig
