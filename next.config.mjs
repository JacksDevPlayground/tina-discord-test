/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
        ];
    }
};

export default nextConfig;
