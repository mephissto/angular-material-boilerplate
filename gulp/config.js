const package = require('../package.json');
const $ = require('gulp-load-plugins')();

module.exports = {
  scripts: {
    sources: './app/index.js',
    destinationName: package.name
  },
  sass: {
    sources: './app/**/*.scss',
    destinationName: package.name
  },
  html: {
    sources: './app/index.html',
  },
  vendors: [{
    cdn: '//cdnjs.cloudflare.com/ajax/libs/angularjs/1.5.8/angular.min.js'
  }],
  port: process.env.PORT || 3000,
  dist: 'dist',
  production: $.util.env.production !== undefined || $.util.env.prod !== undefined || process.env.NODE_ENV === 'production'
};