module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('./postcss-breakpoints.cjs'),
    require('postcss-custom-media'),
    require('autoprefixer'),
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ],
};
