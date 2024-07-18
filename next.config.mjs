/** @type {import('next').NextConfig} */

const allowedOrigins = process.env.ALLOW_ORIGIN ?? "http://localhost:3000";

console.log(allowedOrigins);
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: allowedOrigins,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
