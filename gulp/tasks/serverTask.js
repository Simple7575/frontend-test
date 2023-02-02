import browserSync from "browser-sync";

export function server() {
    return browserSync.init({
        server: {
            baseDir: "./dist",
        },
        notify: false,
        port: 3001,
    });
}
