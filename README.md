# Gulp.js
This Repo is created in the process of learning Gulp.js

# Install Gulp Using commands from https://gulpjs.com/

npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js
gulp --help

# Install Gulp to your working directory as a development dependancy

npm install gulp --save-dev

#gulp basics

var gulp = require('gulp');  //first step

#gulp task creation

gulp.task('task-name', function() {
    //do something
});

#For running the task use 

gulp task-name // in terminal

# For Sass plugin use 

npm install gulp-sass --save-dev

# Creating Sass task in Gulp

gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss') //sass directory
            .pipe(sass())
            .pipe(gulp.dest('app/css')); // destination css directory
});

# Watch task

// named task 'scripts'
gulp.task('scripts', function(){
     // code 
}); 
 
// watch folder 'js' for all files ending in .js.  On change runs 'scripts' task
gulp.task('watch', function(){
     gulp.watch( 'app/js/**/*.js', ['scripts'] ); 
});

# Default task

gulp.task( 'default', [‘scripts’, ‘watch’] );

now just do "gulp"
