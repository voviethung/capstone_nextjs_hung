/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix:'https://cdn.jsdelivr.net'
    images:{
        remotePatterns: [
            {
                protocol:'https',
                port:'',
                hostname:'apistore.cybersoft.edu.vn',
                pathname:'**'
            },
            {
                protocol: 'https',
                port: '',
                hostname: 'fiverrnew.cybersoft.edu.vn', // Thêm tên miền này
                pathname: '**'
            }
        ],
        formats:['image/avif','image/webp']
    }
};

export default nextConfig;
