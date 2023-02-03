import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import browserSync from "browser-sync";
import concat from "gulp-concat";
const { src, dest } = gulp;
const sass = gulpSass(dartSass);

export function scss() {
    return src("src/styles/**.scss")
        .pipe(sass())
        .pipe(
            autoPrefixer({
                overrideBrowserslist: ["last 3 versions"],
            })
        )
        .pipe(csso())
        .pipe(concat("index.css"))
        .pipe(dest("dist/styles"))
        .pipe(browserSync.stream());
}
