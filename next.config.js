/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: false,
  },
  // Enable source maps in development
  productionBrowserSourceMaps: true,
  
  // Enable webpack 5
  webpack5: true,
  
  // Enable Fast Refresh
  fastRefresh: true,
  
  // Enable concurrent features
  concurrentFeatures: true,
  
  // Enable server components
  serverComponents: true,
  
  // Custom webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable hot reloading for components
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        // Faster rebuilds in development
        aggregateTimeout: 200,
        poll: 1000,
        ignored: ['**/.git/**', '**/node_modules/**', '**/.next/**'],
      };
      
      // Enable HMR
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
      
      // Add source maps in development
      config.devtool = 'eval-source-map';
    }
    
    // Add any additional webpack configuration here
    
    return config;
  },
  
  // Development server configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Enable React 18 concurrent features
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    reactRoot: true,
    // Enable React 18 concurrent features
    reactMode: 'concurrent',
    // Enable CSS optimization
    optimizeCss: true,
    // Enable module federation
    externalDir: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
