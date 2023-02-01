import gulp from "gulp";
const { src, dest } = gulp;

function build() {
    return src("src/**.html").pipe(dest("dist"));
}

export { build };
