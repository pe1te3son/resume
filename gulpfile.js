var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync   = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/////////////////
//// Style tasks
////////////////

gulp.task('sass', function () {
 return gulp.src(['./sass/**/*.scss', './sass/**/*.sass'])
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 3 versions'],
		cascade: false
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
});

/////////////////
//// Watch tasks
////////////////

gulp.task('watch', function(){
  gulp.watch('sass/**/*', ['sass']);
});

/////////////////
//// Default tasks
////////////////
gulp.task('default', ['sass', 'watch']);
