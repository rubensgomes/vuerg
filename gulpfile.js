const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browsersync = require('browser-sync');

// --- >>> Sass Tasks <<< ---

function scss() {
    return gulp.src('./static/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
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


// ----------------------------------------------------------------- //
exports.browser = browser;
exports.sass    = scss;
exports.watch   = scssWatch;
