/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
    extensionAlias: {
      '.js': ['.tsx', '.ts', '.jsx', '.js'],
    },
  },
  swcMinify: false,
  webpack: (config) => {
      config.resolve.alias.canvas = false;  
      return config;
    },
  output: "export",
};

export default nextConfig;
