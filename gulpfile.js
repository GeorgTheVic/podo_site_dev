import gulp from "gulp";
import sass from "gulp-sass";
import dartSass from "sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import terser from "gulp-terser";
import babel from "gulp-babel";
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import newer from "gulp-newer";
import concat from "gulp-concat";
import rename from "gulp-rename";
import clean from "gulp-clean";
import gulpIf from "gulp-if";
import size from "gulp-size";
import browserSync from "browser-sync";

// Создаем объект с методами gulp
const { src, dest, watch, series, parallel } = gulp;

// Инициализируем gulp-sass
const sassCompiler = sass(dartSass);

// Флаги для режимов (dev/prod)
const isProd = process.argv.includes("--prod");

// Пути
const paths = {
  html: "src/**/*.html",
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
  img: "src/img/**/*.{jpg,jpeg,png,svg,gif}",
  dist: "dist/",
};

// Очистка папки dist
export function clear() {
  return src(paths.dist, { allowEmpty: true }).pipe(clean());
}

// Обработка HTML
export function html() {
  return src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ title: "HTML" }))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

// Обработка SCSS
export function styles() {
  return src(paths.scss)
    .pipe(sassCompiler().on("error", sassCompiler.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(size({ title: "CSS" }))
    .pipe(dest(paths.dist + "css"))
    .pipe(browserSync.stream());
}

// Обработка JavaScript
export function scripts() {
  return src(paths.js)
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(size({ title: "JS" }))
    .pipe(dest(paths.dist + "js"))
    .pipe(browserSync.stream());
}

// Оптимизация изображений
export function images() {
  return src(paths.img)
    .pipe(newer(paths.dist + "img"))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(size({ title: "Images" }))
    .pipe(dest(paths.dist + "img"));
}

// Конвертация изображений в WebP
export function webpImages() {
  return src(paths.img)
    .pipe(newer(paths.dist + "img"))
    .pipe(webp())
    .pipe(size({ title: "WebP" }))
    .pipe(dest(paths.dist + "img"));
}

// Локальный сервер
export function serve() {
  browserSync.init({
    server: { baseDir: paths.dist },
    notify: false,
    open: true,
  });

  watch(paths.html, html);
  watch(paths.scss, styles);
  watch(paths.js, scripts);
  watch(paths.img, images);
}

// Сборка проекта
export const build = series(clear, parallel(html, styles, scripts, images, webpImages));
export const dev = series(build, serve);
export default build;
