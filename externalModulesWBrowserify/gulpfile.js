var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var fs = require('fs');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
require('babel-polyfill'); //for Object.assign()

var config = {
  port: 9008,
  devBaseUrl: 'http://localhost',
  paths: {
    rootDirectory: '.',
    appDirectory: './app',
    app: './app/src',
    tsConfig: './tsconfig.json',
    html: './index.html',
    js: './app/src/**/*.js',
    ts: './app/src/**/*.ts',
    mainTs: './app/src/index.ts',
    bundle: './bundle.js'    
  }
}

gulp.task('open', ['connect'], function() {
  gulp.src('')
    .pipe(open({
        app: 'chrome',
        uri: config.devBaseUrl + ':' + config.port + '/'
    }));
});

gulp.task('connect', function() {
  connect.server({
    root: ['.'],
    port: config.port,
    base: config.devBaseUrl,
    fallback: 'index.html',
    livereload: true
  });
});

gulp.task('ts', function() {
  var tsConfig = JSON.parse(fs.readFileSync(config.paths.tsConfig,'utf8'));  
    
  browserify({
    basedir: config.paths.rootDirectory,
    debug: false  
  })    
    .add(config.paths.mainTs)
    .plugin(tsify, tsConfig.compilerOptions)
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(source(config.paths.bundle))
    .pipe(gulp.dest(config.paths.rootDirectory));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.ts, ['ts']);
});

gulp.task('default', ['ts', 'open', 'watch']);



