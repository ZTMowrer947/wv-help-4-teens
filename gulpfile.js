// Imports
const gulp = require("gulp");
const sm = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const del = require("del");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");

// Paths
const paths = {
    server: ["src/server/**/*.ts", "src/*.ts"],
    client: ["src/client/index.ts"],
    images: [
        "src/images/**/*.png",
        "src/images/**/*.jpg",
        "src/images/**/*.gif",
        "src/images/**/*.svg",
    ],
};

// Tasks
const buildServer = () => {
    return gulp
        .src(paths.server, { base: "src" })
        .pipe(sm.init())
        .pipe(babel())
        .pipe(terser())
        .pipe(sm.write("."))
        .pipe(gulp.dest("dist"));
};

const buildWebpackClient = () => {
    return gulp
        .src(paths.client)
        .pipe(sm.init())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(sm.write("."))
        .pipe(gulp.dest("public"));
};

const minifyImages = () => {
    return gulp
        .src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest("public/images"));
};

const buildClient = gulp.series(buildWebpackClient, minifyImages);

const build = gulp.parallel(buildServer, buildClient);

const clean = () => del(["public", "dist"]);

// Exports
module.exports = {
    build,
    clean,
    default: gulp.series(clean, build),
};
