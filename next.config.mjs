/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "my-value",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://api.example.com/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
