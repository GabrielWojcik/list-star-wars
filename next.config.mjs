/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swapi.dev',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
