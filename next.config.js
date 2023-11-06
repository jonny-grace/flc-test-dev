const path = require('path');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/assets/:path*',
      },
    ];
  },
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  
  webpack: (config, { isServer }) => {
    // For videos in the assets folder
    config.module.rules.push({
      test: /\.(mp4|webm|ogv)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/chunks/',
            name: isServer ? '[name].[ext]' : 'static/chunks/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
