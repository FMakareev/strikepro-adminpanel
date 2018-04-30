const gulp = require('gulp');
const sftp = require('gulp-sftp');
// export PATH=./node_modules/.bin:$PATH
/*
host: strikepro.ru
user: admin
password: RnSkllNaTK
*/

gulp.task('default', function () {
    return gulp.src('build/**')
        .pipe(sftp({
            host: 'strikepro.ru',
            user: 'admin',
            pass: 'RnSkllNaTK',
            remotePath: '/web/admin.strikepro.ru/public_html'
        }));
});