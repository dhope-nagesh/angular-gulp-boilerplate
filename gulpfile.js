var gulp = require('gulp');
var concat = require('gulp-concat');
var bs = require('browser-sync').create(); // create a browser sync instance.
var libraries = [
'./bower_components/angular/angular.min.js',
'./bower_components/angular-route/angular-route.min.js'
];



gulp.task('lib', function(){
	return gulp.src(libraries)
	.pipe(concat('libraries.js'))
	.pipe(gulp.dest('./dist/lib/'));
});

gulp.task('html', function(){
	return gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('server',['lib', 'html'], function() {
    bs.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch("src/*.html", ["html"]).on('change', bs.reload);
});                                                                                               
