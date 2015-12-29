"use strict";

var gulp = require('gulp');
var browserify = require('browserify'); // bundles JS
var reactify = require('reactify'); // transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // concatenates files
var uglify = require('gulp-uglify');

var config = {
	paths: {
        //html: './static/*.html', // don't need because we are using templates
        js: './static/src/js/**/*.js',              
        images: './static/src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css',
            './static/src/css/*.css'
        ],
        dist: './static/dist',
        mainJs: './static/src/js/main.js'
    }
}

// move html -> django templates will handle this
// gulp.task('html', function() {
//     gulp.src(config.paths.html)
//         .pipe(gulp.dest(config.paths.dist))
//         .pipe(connect.reload());
// });

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        //.on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        //.pipe(uglify)
        .pipe(gulp.dest(config.paths.dist + '/js'))
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

// can optimize images here as well
gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
    // when I have a favicon.ico
    //gulp.src('./src/favicon.ico')
    //    .pipe(gulp.dest(config.paths.dist));    
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['css']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['js', 'css', 'images', 'watch']);
