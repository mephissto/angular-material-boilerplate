const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');
require('./tasks/clean');
require('./tasks/html');
require('./tasks/assets');
require('./tasks/scripts');
require('./tasks/service-worker.js');

gulp.task('watch', ['watch:scripts', 'watch:html', 'watch:assets']);
gulp.task('build', $.sequence('clean', 'build:scripts', 'build:assets', 'build:html', 'build:service-worker'));

gulp.task('serve', ['build', 'watch'], () => {
  $.connect.server({
    root: config.html.dest,
    livereload: !config.production,
    port: config.port,
  });
});

gulp.task('default', ['build']);
