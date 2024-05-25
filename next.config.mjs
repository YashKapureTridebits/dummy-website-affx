/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "octaneapps.com",
      "tbs-website-live.s3.ap-south-1.amazonaws.com",
      "classhub-devloper-bucket.s3.ap-south-1.amazonaws.com",
      "bucket-chat-classhub.s3.ap-south-1.amazonaws.com",
    ],
  },
  eslint: {
    // Fix: Replace '=' with ':'
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
