var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var fs = require('fs');
var typescript = require('gulp-typescript');
require('babel-polyfill');

var config = {
  port: 9008,
  devBaseUrl: 'http://localhost',
  paths: {
    appDirectory: '.',
    tsConfig: './tsconfig.json',
    html: './index.html',
    js: './app/src/**/*.js',
    ts: './app/src/**/*.ts',
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

//could compile TypeScript to ES6 and then
// transpile to ES5 using babel by changing
// target to 'ES6'
gulp.task('ts', function() {
  //pulling tsConfig in here to mirror settings between inspection and compile
  var tsConfig = JSON.parse(fs.readFileSync(config.paths.tsConfig,'utf8'));  
    
  var newTsConfig = Object.assign(    
    tsConfig.compilerOptions, 
    { out: config.paths.bundle }
  );
  
  gulp.src(config.paths.ts)
    .pipe(typescript(newTsConfig))
    .pipe(gulp.dest(config.paths.appDirectory));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.ts, ['ts']);
});

gulp.task('default', ['ts', 'open', 'watch']);



