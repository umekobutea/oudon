'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('build/ts', () => {
  browserify({
    entries: './src/index.ts',
  }).plugin(tsify)
  .bundle()
  .pipe(source('oudon.js'))
  .pipe(gulp.dest('./lib/'));
});

gulp.task('build', ['build/ts']);

gulp.task('default', ['build']);
