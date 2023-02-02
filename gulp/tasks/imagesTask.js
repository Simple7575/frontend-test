import gulp from "gulp";
import browserSync from "browser-sync";
import newer from "gulp-newer";
// import imageMin from "gulp-imagemin";
const { src, dest } = gulp;

export function images() {
    return src("src/public/**/*.{jpg,jpeg,webp,gif,png,svg}")
        .pipe(newer("dist/image/**/*.{jpg,jpeg,webp,gif,png,svg}"))
        .pipe(dest("dist/public/"))
        .pipe(browserSync.stream());
}
