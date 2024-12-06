/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/assets/:slug*',
          destination: '/public/assets/:slug*',
        },
      ];
    },
  };
  
  export default nextConfig;
  