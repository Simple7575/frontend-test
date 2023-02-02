import gulp from "gulp";
import { deleteAsync } from "del";
import gulpZip from "gulp-zip";

import { html } from "./gulp/tasks/htmlTask.js";
import { scss } from "./gulp/tasks/scssTask.js";
import { server } from "./gulp/tasks/serverTask.js";
import { images } from "./gulp/tasks/imagesTask.js";
import { js } from "./gulp/tasks/jsTask.js";

const { src, dest, series, parallel, watch } = gulp;
const mainTasks = parallel(scss, html, images, js);

function clear() {
    return deleteAsync(["dist"]);
}

export function zip() {
    return src(["./**", "!./node_modules/**", "!./dist/**"])
        .pipe(gulpZip("front-militonyan.zip"))
        .pipe(dest("./"));
}

export function watcher() {
    watch("src/**/*.html", html);
    watch("src/**/*.scss", scss);
    watch("src/**/*.js", js);
}

export const build = series(clear, mainTasks);
export const dev = series(build, parallel(watcher, server));
