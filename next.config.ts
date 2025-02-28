import type { NextConfig } from "next";
import { strapiURL } from "./lib/strapi";

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
        hostname: `${URL.parse(strapiURL() as string)?.hostname}`,
      },
    ],
  },
  sassOptions: {}
};

export default nextConfig;
