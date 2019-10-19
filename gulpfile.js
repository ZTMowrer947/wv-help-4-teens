// Imports
const gulp = require("gulp");
const sm = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");

// Paths
const paths = {
    server: ["src/server/**/*.ts", "src/*.ts"],
    client: ["src/client/index.ts"],
};

// Tasks
const buildServer = () => {
    return gulp
        .src(paths.server, { base: "src" })
        .pipe(sm.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(sm.write("."))
        .pipe(gulp.dest("dist"));
};

const buildClient = () => {
    return gulp
        .src(paths.client)
        .pipe(sm.init())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(sm.write("."))
        .pipe(gulp.dest("public"));
};

const build = gulp.parallel(buildServer, buildClient);

// Exports
module.exports = {
    build,
};
