var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    copy = require('gulp-copy'),
    del = require('del');

// default task to run watch task on gulp command
gulp.task('default', ['watch']);
// run build to just run gulp tasks without watching
gulp.task('build', ['jshint', 'build-css', 'build-js', 'copy']);

// check for javscript errors in server and client
gulp.task('jshint', function() {
  return gulp.src(['./client/**/*.js',
                   './server/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// build css from sass
gulp.task('build-css', function() {
  return gulp.src('./client/assets/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/styles'));
});

// bundle js into one file on client, uglify if production is set
gulp.task('build-js', function() {
  // return gulp.src(['./client/app/**/*.js',
  //                  './client/components/**/*.js',
  //                  './client/*.js'])
  //   .pipe(sourcemaps.init())
  //   .pipe(concat('bundle.js'))
  //   // only uglify if gulp is ran with '--type production'
  //   .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
  //   .pipe(sourcemaps.write())
  //   .pipe(gulp.dest('./public/js'));
});

// delete all files in public folder
gulp.task('clean:public', function(cb) {
  del(['./public/**/*', '!./public/vendor', '!./public/vendor/**/*', '!./public/assets', '!./public/assets/styles', '!./public/assets/styles/**/*'], cb);
});

// copy client folder to public folder
gulp.task('copy', ['clean:public'], function() {
  return gulp.src(['./client/**/*', '!./client/assets/styles/**/*'])
    .pipe(copy('./public', {prefix: 1}));
});

// watch task
gulp.task('watch', function() {
  gulp.watch(['./client/**/*.js'], ['build-js']);
  gulp.watch(['./client/**/*.js', './server/**/*.js'], ['jshint']);
  gulp.watch('./client/assets/styles/**/*.scss', ['build-css']);
  gulp.watch(['./client/**/*', '!./client/assets/styles/**/*'], ['copy']);
});
