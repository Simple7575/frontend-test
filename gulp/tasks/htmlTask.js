import gulp from "gulp";
import include from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import browserSync from "browser-sync";
import { posts } from "../../src/posts.js";
const { src, dest } = gulp;

export function html() {
    return src("src/**.html")
        .pipe(include({ prefix: "@@", context: { posts } }))
        .pipe(
            htmlmin({
                collapseWhitespace: true,
            })
        )
        .pipe(dest("dist"))
        .pipe(browserSync.stream());
}
