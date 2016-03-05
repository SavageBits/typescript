var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var fs = require('fs');
var typescript = require('gulp-typescript');
require('babel-polyfill'); //for Object.assign()

var config = {
  port: 9008,
  devBaseUrl: 'http://localhost',
  paths: {
    rootDirectory: '.',
    appDirectory: './app',
    distDirectory: './app/dist',    
    app: './app/src',
    tsConfig: './tsconfig.json',
    html: './index.html',
    js: './app/src/**/*.js',
    ts: './app/src/**/*.ts'
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
    root: [config.paths.rootDirectory],
    port: config.port,
    base: config.devBaseUrl + config.parentDirectory,
    fallback: 'index.html',
    livereload: true
  });
});

gulp.task('ts', function() {
  var tsConfig = JSON.parse(fs.readFileSync(config.paths.tsConfig,'utf8'));  
    
  var newTsConfig = Object.assign(    
    tsConfig.compilerOptions
  );
    
  gulp.src(config.paths.ts)
    .pipe(typescript(newTsConfig))
    .pipe(gulp.dest(config.paths.distDirectory));     
});

gulp.task('watch', function() {
  gulp.watch(config.paths.ts, ['ts']);
});

gulp.task('default', ['ts', 'open', 'watch']);



