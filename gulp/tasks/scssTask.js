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
    // if you put here /**.scss gulp will change files order and we dont want that
    return src(["src/styles/index.scss", "src/styles/extra.scss"])
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
