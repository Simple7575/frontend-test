import gulp from "gulp";
import { deleteAsync } from "del";
import gulpZip from "gulp-zip";

import { html } from "./gulp/tasks/htmlTask.js";
import { scss } from "./gulp/tasks/scssTask.js";
import { server } from "./gulp/tasks/serverTask.js";

const { src, dest, series, parallel, watch } = gulp;
const mainTasks = parallel(scss, html);

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
}

export const build = series(clear, mainTasks);
export const dev = series(build, parallel(watcher, server));
