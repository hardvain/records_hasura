require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = withCSS({
  webpack: function (config) {
    config.plugins.push(
      new MonacoWebpackPlugin({
        // Add languages as needed...
        languages: ['javascript', 'typescript','markdown'],
        filename: 'static/[name].worker.js',
      })
    );

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: 'openid profile offline_access',
    REDIRECT_URI:
      process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    HASURA_GRAPHQL_URL: process.env.HASURA_GRAPHQL_URL,
    HASURA_GRAPHQL_URL_WSS: process.env.HASURA_GRAPHQL_URL_WSS,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
  },
});
