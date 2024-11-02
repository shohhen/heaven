import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['admin.svsc.uz', 'secure.gravatar.com'],
        // Optionally, you can also use remotePatterns for more specific control
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'admin.svsc.uz',
                pathname: '/storage/images/**',
            },
            {
                protocol: 'http',
                hostname: 'secure.gravatar.com',
                pathname: '/avatar',
            },
        ],
    },
};

export default nextConfig;
