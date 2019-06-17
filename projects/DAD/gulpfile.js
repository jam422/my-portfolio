const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function style() {
    // 1. Where is my scss file
    // 2. Pass that file through sass compiler
    // 3. where do I save the compiled CSS?
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))

        // 4. stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;