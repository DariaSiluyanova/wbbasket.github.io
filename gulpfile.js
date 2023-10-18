const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function() {
    return gulp.src("./scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css/"))
})

gulp.task("default", gulp.series("sass"))