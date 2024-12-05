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
