import gulp from "gulp";
import browserSync from "browser-sync";
const { src, dest } = gulp;

export function js() {
    return src("src/**/*.js").pipe(dest("dist")).pipe(browserSync.stream());
}
