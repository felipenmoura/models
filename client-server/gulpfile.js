"use strict";

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    fs = require('fs'),
    nunjucksRender = require('gulp-nunjucks-render');

gulp.task('build-js', function(done){
    browserify({
        entries: ['./client/app/scripts/main.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest('./dist'));

    setTimeout(done, 1000);

});

gulp.task('build-css', function(){
    gulp.src('./client/app/styles/main.styl')
        .pipe(stylus({linenos: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function(){

    var data = require('gulp-data');

    function getDataForFile(file){
        return {
            data: require('./portable/bindings/' + file.relative.replace(/\..+$/, '.json')),
            meta: {
              dateCreated: (new Date()).toISOString()
            }
        };
    }

    var tplSrc = 'portable/templates/**/*.html';

    nunjucksRender.nunjucks.configure([tplSrc], {watch: false});
    return gulp.src(tplSrc)
        .pipe(data(getDataForFile))
        .pipe(nunjucksRender())
        .pipe(gulp.dest('dist'));

});

gulp.task('watch', function(){
    gulp.watch('client/**/*.js', ['build-js', 'compress']);
    gulp.watch(['client/**/*.css', 'client/**/*.styl'], ['build-css']);
    gulp.watch('portable/**/*.html', ['copy']);
});

gulp.task('compress', ['build-js'], function() {
  return gulp.src('dist/app.bundle.js')
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({
      mangle: false,
      preserveComments: "license",
      outSourceMap: true
    }))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('dev-mode', function(){
    var spawn  = require('child_process').spawn,
        server = spawn('node', ['server']),
        watch  = spawn('gulp', ['watch']);

    server.stdout.on('data', function (data) {
      console.log(""+data);
    });

    server.stderr.on('data', function (data) {
      console.log(""+data);
    });

    server.on('close', function (code) {
      console.log('child process (server) exited with code ' + code);
    });

    watch.stdout.on('data', function (data) {
      console.log(""+data);
    });

    watch.stderr.on('data', function (data) {
      console.log(""+data);
    });

    watch.on('close', function (code) {
      console.log('child process (watch) exited with code ' + code);
    });
});

gulp.task('default', ['copy', 'build-js', 'build-css', 'compress']);
gulp.task('dev', ['default', 'dev-mode']);
