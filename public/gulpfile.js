'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const plumber = require('gulp-plumber')
const minify = require('gulp-minify')
const del = require('del')
const concatCss = require('gulp-concat-css')

// Clean assets
function clean() {
  return del(['dist'])
}

// Css tasks
function styles(done) {
  gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(concatCss('style.min.css'))
    .pipe(gulp.dest('dist/css'))
  done()
}

// Watch files
function watchFiles(done) {
  gulp.watch('scss/**/*.scss', styles)
  done()
}

// define complex tasks
const build = gulp.series(clean, gulp.parallel(styles))
const watch = gulp.series(build, watchFiles)

// export tasks
exports.clean = clean
exports.styles = styles
exports.build = build
exports.watch = watch
exports.default = watch
