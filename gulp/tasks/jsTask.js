import gulp from "gulp";
import browserSync from "browser-sync";
import webpackStream from "webpack-stream";
import debug from "gulp-debug";
const { src, dest } = gulp;

export function js() {
    return (
        src(["src/**/*.js", "!src/posts.js"])
            // .pipe(debug({ title: "unicorn" }))
            .pipe(
                webpackStream({
                    mode: "production",
                    entry: { extra: "./src/extra.js", index: "./src/index.js" },
                    output: { filename: "[name].js" },
                })
            )
            .pipe(dest("dist"))
            .pipe(browserSync.stream())
    );
}
