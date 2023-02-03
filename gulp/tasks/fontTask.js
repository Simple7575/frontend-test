import gulp from "gulp";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
const { src, dest } = gulp;

export function fonts() {
    return src("src/public/fonts/**/*.otf")
        .pipe(newer("dist/fonts/**/*.{ttf,woff}"))
        .pipe(
            fonter({
                subset: [66, 67, 68, 69, 70, 71],
                formats: ["woff"],
            })
        )
        .pipe(dest("dist/public/fonts"));
}
