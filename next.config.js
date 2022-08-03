const withNextra = require('nextra')({
    theme: './src/index.tsx',
    themeConfig: './theme.config.tsx',
});

module.exports = withNextra();

module.exports.images = {
    loader: 'akamai',
    path: '',
};
