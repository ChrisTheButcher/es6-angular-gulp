const gulp = require('gulp');
const browserSync = require('browser-sync');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const $ = require("gulp-load-plugins")({ lazy: true });

const config = {
    bower: './bower_components',
    node: './node_modules',
    src: './Assets/src',
    dist: './Assets/dist'
};

gulp.task('styles', ()=> {
    return gulp.src(`${config.src}/scss/app.scss`)
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer(['last 2 version', 'ie 9']))
        .pipe($.csso())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(`${config.dist}/css/`))
        .pipe($.filter(['**/*.css']))  
        .pipe(browserSync.stream())
});

gulp.task('scripts', ()=> {
    const bundler = watchify(browserify({
        entries: [`${config.src}/js/app.js`],
        debug: true
    }).transform(babel.configure({ presets: ["es2015-ie"] })));

    return bundler.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.uglify())               
        .on('error', $.util.log)
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(`${config.dist}/js/`))
        .pipe(browserSync.stream());
});

gulp.task('watch', ()=> {
    $.watch(`${config.src}/scss/**/*.scss`, ()=> gulp.start('styles'));
    $.watch(`${config.src}/js/**/*.js`, ()=> gulp.start('scripts'));
    $.watch('./**/*.html', browserSync.reload);
});

gulp.task('sync', ['watch'], ()=> {
    browserSync({ 
        server: { baseDir: "./" },
        open: false,  
    })
});

gulp.task('default', ['styles', 'scripts', 'sync']);