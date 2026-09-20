/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@cosmas/ui"],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;