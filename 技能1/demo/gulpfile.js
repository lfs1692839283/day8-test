const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server',()=>{
    gulp.src('.').pipe(server({
        port : 8080,
        open :true,
        livereload :true,
        // porxies :[{
        //     source :'/list',target : 'http://localhost:3000/list',
        // }]
    }));
});