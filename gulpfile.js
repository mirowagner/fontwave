var gulp          = require( 'gulp' ),
    plumber       = require( 'gulp-plumber' ),
    sourcemaps    = require( 'gulp-sourcemaps' ),
    jade          = require( 'gulp-jade' ),
	sass          = require( 'gulp-sass' ),
	autoprefixer  = require( 'gulp-autoprefixer' ),
    concat        = require( 'gulp-concat' ),
    uglify        = require( 'gulp-uglify' ),
    deploy        = require( 'gulp-gh-pages' ),
    browserSync   = require( 'browser-sync' ).create();


// Compile Jade
gulp.task( 'jade', function() {
    return gulp.src( ['src/jade/**/*.jade', '!src/jade/partials/*'] )
        .pipe( plumber() )
        .pipe( jade() )
        .pipe( gulp.dest('./build/') );
});


// Compile Sass; Autoprefix; map source
gulp.task( 'sass', function () {
    return gulp.src( './src/sass/**/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass({ outputStyle: 'compressed' }) )
            .on( 'error', sass.logError )
        .pipe( autoprefixer({ browsers: 'last 2 versions' }) )
        .pipe( sourcemaps.write( 'sourcemaps' ) )
        .pipe( gulp.dest( 'build' ) );
});


// Concatenate Javascript; Uglify; map source
gulp.task( 'js', function() {
    return gulp.src( 'src/javascript/**/*.js' )
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( concat( 'scripts.js' ) )
        .pipe( uglify() )
        .pipe( sourcemaps.write( 'sourcemaps' ) )
        .pipe( gulp.dest( 'build' ) );
});


// Watch for changes to source files
gulp.task( 'watch', function() {
    gulp.watch( ['src/javascript/**/*.js'],  ['js'] );
    gulp.watch( ['src/jade/**/*.jade'],      ['jade']);
    gulp.watch( ['src/sass/**/*.scss'],      ['sass']);
});


// Serve and watch
gulp.task( 'serve', function() {
    browserSync.init({
        server:  'build',
        files:   ['build/*'],
        notify:  false,
        open:    false
    });
});


// Default task
gulp.task( 'default', ['jade', 'sass', 'js', 'watch', 'serve'] );

// Deploy to GitHub pages
gulp.task( 'deploy', ['jade', 'sass', 'js'], function() {
    return gulp.src( './build/**/*' )
    .pipe( deploy() );
});
