import type { NextConfig } from "next";
import { strapiURL } from "./lib/strapi";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: `${URL.parse(strapiURL() as string)?.hostname}`,
      },
    ],
  },
  sassOptions: {},
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
