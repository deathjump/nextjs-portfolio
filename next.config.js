/** @type {import('next').NextConfig} */
const nextConfig = {webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevents npm packages from crashing if they look for 'encoding'
      config.resolve.fallback = {
        ...config.resolve.fallback,
        encoding: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
