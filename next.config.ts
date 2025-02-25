import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: `${URL.parse(process.env.NEXT_PUBLIC_API_URL as string)?.hostname}`,
      },
    ],
  },
  sassOptions: {}
};

export default nextConfig;
