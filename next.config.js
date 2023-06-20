module.exports = {
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '16.16.211.34',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }