const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function() {
    return gulp.src("./scss/main.scss")
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css/"))
})

gulp.task("default", gulp.series("sass"))