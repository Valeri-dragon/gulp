const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const browserSync = require("browser-sync").create();
gulp.task("default", function () {
  return gulp.src("src/**/*.html").pipe(gulp.dest("dist/"));
});
gulp.task("concat", function () {
  return gulp
    .src("src/assets/css/*.css")
    .pipe(concatCss("assets/css/style.css"))
    .pipe(gulp.dest("dist/"));
});
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
  gulp.watch("src/assets/css/*.css").on("change", browserSync.reload);
  gulp.watch("src/*.html").on("change", browserSync.reload);
});
