// Require gulp and plugins
var      gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
       stylus = require('gulp-stylus'),
  browserSync = require('browser-sync').create(),
       uglify = require('gulp-uglify'),
       concat = require('gulp-concat'),
       jshint = require('gulp-jshint'),
         jeet = require('jeet'),
         pump = require('pump')
       rename = require('gulp-rename')
     imagemin = require('gulp-imagemin')
      connect = require('gulp-connect'),
        watch = require('gulp-watch');

// Dest paths to build and src
var buildPaths = {
	  build : '../*',
	 images : 'assets/img/',
	scripts : 'assets/js/',
	    css : 'assets/css/'
};

var srcPaths = {
	 images : 'src/assets/img/**/*',
	scripts : 'src/assets/js/*.js',
	    css : 'src/assets/styl/**/*.styl'

};

//
gulp.task('html', function(){
  return gulp.src('src/index.html')
      .pipe(gulp.dest('../evemontalvao.github.io/'))
      .pipe(browserSync.reload({ stream: true}));
});

gulp.task('styles', function(){
  return gulp.src(srcPaths.css)
      .pipe(stylus())
      .pipe(minifycss())
      .pipe(gulp.dest(buildPaths.css))
      .pipe(browserSync.reload({ stream: true}));
});

gulp.task('js', function(){
  return gulp.src(srcPaths.scripts)
      .pipe(jshint())
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest(buildPaths.scripts))
      .pipe(browserSync.reload({ stream: true}))
});

gulp.task('images', function(){
  return gulp.src('src/assets/img/*')
      .pipe(imagemin({progressive: true}))
      .pipe(gulp.dest(buildPaths.images))
      .pipe(browserSync.reload({ stream: true}))
});

gulp.task('watch',['browser-sync'], function(){
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/assets/styl/*', ['styles']);
    gulp.watch('src/assets/js/*.js', ['js']);
    gulp.watch('src/assets/img/*', ['images']);

});

gulp.task('browser-sync', function(){
  var files = [
      buildPaths.build
  ];
  browserSync.init(files, {
    server: {
      baseDir: '../evemontalvao.github.io/'
    },
  });
    gulp.watch(srcPaths.css, ['styles']);
    gulp.watch('src/*').on('change', browserSync.reload);
});

gulp.task('default', ['html','styles','js','images','watch','browser-sync']);
gulp.task('build', ['html','styles','js','images']);
