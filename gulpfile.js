var gulp = require('gulp');  //first step
var sass = require('gulp-sass');

//gulp task creation
gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'));
});

