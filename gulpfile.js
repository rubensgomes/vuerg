const gulp = require('gulp');
const del = require('del');
const merge = require('merge-stream');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');

// --- >>> Clean Tasks <<< ---

function clean() {
    return del([
        'build',
        'public/phpinfo.php',
        'report.*.json',
        'static/css'
    ]);
}

clean.description = 'Delete generated files.';

function cleanProj() {
    return del([
        '.buildpath',
        '.project',
        '.settings/'
    ]);
}

cleanProj.description = 'Delete NPM modules, IDE and vendor files.';

// --- >>> Sass Tasks <<< ---

function scss() {
    return gulp.src('./static/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./public/css'))
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

function installImg() {
    var stream1 =  gulp.src('./static/favicon.ico')
                       .pipe(gulp.dest('./public', FILE_MODE));
    var stream2 = gulp.src('./static/img/hero-img.png')
                      .pipe(gulp.dest('./public/img', FILE_MODE));

    return merge(stream1, stream2);
}

installImg.description = 'Installs the image files in the public folder.';

function installJs() {
    return gulp.src('./static/js/*.js')
               .pipe(gulp.dest('./public/js', FILE_MODE));
}

installJs.description = 'Installs the Javascript files in the public folder.';

// ----------------------------------------------------------------- //

exports.browser = browser;
exports.clean = clean;
exports.clobber = gulp.series(cleanProj, clean);
exports.install = gulp.series(installImg, installJs, scss);
exports.sass = scss;
exports.watch = scssWatch;
