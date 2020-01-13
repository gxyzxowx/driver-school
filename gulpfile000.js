var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      port: 8888,
      livereload: true, // 实时重新加载
      open: './src/index.html', // 启动时默认浏览器打开的文件
      directoryListing: {
        enable: true,
        path: './'
      },
      proxies: [{
        source: '/api',
        target: 'http://49.234.69.205' // 代理的域名
      }]
    }))
});
// gulp4.0
gulp.task('default', gulp.series(['webserver'], function () {
  console.log('gulp webserver start successfully at localhost:8888');
}));