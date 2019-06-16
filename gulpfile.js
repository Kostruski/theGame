const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
sass.compiler = require("node-sass");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');

const server = function(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}

function showError(err){

    console.log("-------------------------------------------------------")
    console.log(err.messageFormatted);    
       notifier.notify({
      title: 'Gulp error',
      message: err.messageFormatted
    });
    this.emit("end");
}

const css = function() {
  return gulp
    .src("./scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed" //expanded, nested, compact - i typy w do jakich generowany jest css
      }).on("error", showError)
    )
    .pipe(autoprefixer({}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
};

const watcher = function(cb){
    gulp.watch("./scss/**/*.scss", gulp.series(css))
    gulp.watch("./*.html").on('change', browserSync.reload)
    cb();
}

exports.css = css;
exports.default = gulp.parallel(server, css, watcher); // nazwy tasków które maja się równoczesnie odpalić


