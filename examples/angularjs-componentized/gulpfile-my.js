'use strict';

var gulp = require('gulp');
var connect = require('connect');
var connectLivereload = require('connect-livereload');
var opn = require('opn');
var gulpLivereload = require('gulp-livereload');
var shell = require('gulp-shell');

/*
 * ---------->  Main Config  <-------------
 */
var config = {
	rootDir: __dirname + '/dist',
	servingPort: 5050,

	// the files you want to watch for changes for live reload
	mainPage: ['dist/index.html'],
  sourceFiles: ['src/**']
};

// The default task - called when you run `gulp` from CLI
gulp.task('default', ['watch', 'serve']);

gulp.task('watch', ['connect'], function () {
  gulpLivereload.listen();
  gulp.watch(config.sourceFiles, ['build'], function(file) {
    console.log(file.path + " changed!");
  });
  gulp.watch(config.mainPage, function(file) {
    gulp.src(file.path)
      .pipe(gulpLivereload());
  });
});

gulp.task('serve', ['connect'], function () {
  return opn('http://localhost:' + config.servingPort);
});

gulp.task('connect', function(){
  return connect()
    .use(connectLivereload())
    .use(connect.static(config.rootDir))
    .listen(config.servingPort);
});

gulp.task('build', shell.task(['grunt after-test']));
