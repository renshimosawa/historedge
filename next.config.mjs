/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: "/map/hachinohe",
        destination: "/maps/hachinohe",
        permanent: true,
      },
      {
        source: "/map/kyoto",
        destination: "/maps/kyoto",
        permanent: true,
      },
      {
        source: "/map/morioka",
        destination: "/maps/morioka",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
