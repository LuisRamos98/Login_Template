
// GULP 
const {src, watch, dest,parallel} = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//FUNCIONES
function css(done){
    src("src/sass/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"))
    done();
}

function dev(done) {
    watch("src/sass/**/*.scss",css);
    done();
}

exports.css = css;
exports.dev = parallel(css,dev);