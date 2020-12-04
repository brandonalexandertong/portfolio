var gulp = require('gulp')
var cleanCss = require("gulp-clean-css")
var sourceMaps = require('gulp-sourcemaps')
var imageMin = require('gulp-imagemin')
var concat = require('gulp-concat')

gulp.task("css", function () {
  return gulp.src([
    "src/css/base.css",
    "src/css/typography.css",
    "src/css/style.css",
    "src/css/responsive.css",
    "src/css/ball.css"
  ])
  .pipe(sourceMaps.init())
  .pipe(concat("style.css"))
  .pipe(
    cleanCss({
      compatibility: 'ie8'
    })
  )
  .pipe(sourceMaps.write())
  .pipe(gulp.dest("dist"))
})

gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
})

gulp.task("fonts", function () {
  return gulp.src("src/fonts/*")
    .pipe(gulp.dest("dist/fonts"))
})

gulp.task("images", function () {
  return gulp.src("src/images/*")
    .pipe(imageMin())
    .pipe(gulp.dest("dist/images"))
})

gulp.task("javascript", function () {
  return gulp.src("src/js/*")
    .pipe(gulp.dest("dist"))
})



gulp.task('default', ["html", "fonts", "javascript", "images", "css"])
