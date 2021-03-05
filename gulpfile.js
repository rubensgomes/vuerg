const gulp        = require('gulp');
const del         = require('del');
const browsersync = require('browser-sync');
const merge       = require('merge-stream');
const sass        = require('gulp-sass');

// --- >>> Clean Tasks <<< ---
function clean() {
    return del([
        'static/css', 'static/dist'
    ]);
}
clean.description = 'Delete generated files.';

// --- >>> Sass Tasks <<< ---

function scss() {
    return gulp.src('./static/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./static/dist/css'))
               .pipe(gulp.dest('./static/css'));
}
scss.description = 'Saas transpiles SCSS files to CSS.';

function scssWatch() {
    return gulp.watch('./static/sass/**/*.scss', scss);
}
scssWatch.description = 'Watches for SCSS files and transpile changed SCSS files.';

// --- >>> Browsersync Tasks <<< ---

function browser() {
    const BROWSERSYNC_FILES = ['./**/*'];
    var sync = browsersync.create();

    sync.init({
        browser: 'chrome',
        files: BROWSERSYNC_FILES,
        server: {
            baseDir: './static'
        }
    });

    return gulp.watch('./static/*.html', sync.reload);
}
browser.description = 'Watches static file changes and reloads browser.';

// --- >>> Copy Tasks <<< ---

const FILE_MODE = { mode: 0644 };

function copyImg() {
    var stream1 =  gulp.src('./static/favicon.ico')
                       .pipe(gulp.dest('./static/dist', FILE_MODE));
    var stream2 = gulp.src('./static/img/hero-img.png')
                      .pipe(gulp.dest('./static/dist/img', FILE_MODE));

    return merge(stream1, stream2);
}
copyImg.description = 'Copies the image files to the static dist folder.';

function copyJs() {
    return gulp.src('./static/js/*.js')
               .pipe(gulp.dest('./static/dist/js', FILE_MODE));
}
copyJs.description = 'Copies the Javascript files to the static dist folder.';

function copyHtml() {
    return gulp.src('./static/index.html')
               .pipe(gulp.dest('./static/dist', FILE_MODE));
}
copyHtml.description = 'Copies the HTML files to the static dist folder.';

// ----------------------------------------------------------------- //
exports.browser = browser;
exports.sass    = scss;
exports.watch   = scssWatch;
exports.clean   = clean;
exports.install = gulp.series(clean, scss, copyImg, copyJs, copyHtml);
