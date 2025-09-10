import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    const postHogBaseURL = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!postHogBaseURL) {
      return [];
    }

    const assetPath =
      postHogBaseURL === "https://us.i.posthog.com"
        ? "https://us-assets.i.posthog.com"
        : postHogBaseURL === "https://eu.i.posthog.com"
        ? "https://eu-assets.i.posthog.com"
        : process.env.NEXT_PUBLIC_POSTHOG_ASSET_HOST || "";

    return [
      {
        source: "/ingest/static/:path*",
        destination: assetPath + "/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: postHogBaseURL + "/:path*",
      },
      {
        source: "/ingest/decide",
        destination: postHogBaseURL + "/decide",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/schedule",
        destination: "https://pycon-kenya-2025.sessionize.com/schedule",
        permanent: true, // Use true for 308 permanent redirect, false for 307 temporary
      },
            {
        source: "/speakers",
        destination: "https://pycon-kenya-2025.sessionize.com/speakers",
        permanent: true, // Use true for 308 permanent redirect, false for 307 temporary
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
