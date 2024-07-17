/** @type {import('next').NextConfig} */

const allowedOrigins =
  typeof process.env.ALLOW_ORIGIN === "string"
    ? process.env.ALLOW_ORIGIN.split(",")
    : "http://localhost:3000";

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
        ],
      },
    ];
  },
};

export default nextConfig;
