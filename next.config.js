module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd2sofvawe08yqg.cloudfront.net',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
                pathname: '**'
            }
        ]
    },
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.watchOptions = {
                ...config.watchOptions,
                poll: 1000, // Check for changes every second
                aggregateTimeout: 300, // Delay before rebuilding
            };
        }
        return config;
    },
    experimental: {
        turbo: {
            rules: {
                '*.scss': {
                    loaders: ['sass-loader'],
                    as: '*.css'
                }
            }
        }
    }
};
