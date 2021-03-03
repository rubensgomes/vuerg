const gulp        = require('gulp');
const del         = require('del');
const merge       = require('merge-stream');
const sass        = require('gulp-sass');

// --- >>> Clean Tasks <<< ---

function clean() {
    return del([
        'static/css'
    ]);
}
clean.description = 'Delete generated files.';

function scss() {
    return gulp.src('./static/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./public/css'))
               .pipe(gulp.dest('./static/css'));
}
scss.description = 'Saas transpiles SCSS files to CSS.';

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

exports.clobber = gulp.series(cleanProj, clean);
exports.install = gulp.series(installImg, installJs, scss);
