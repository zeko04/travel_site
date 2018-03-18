var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback){
    webpack(require('../../webpack.config.js'), function(err, stats){
      
        if(err){
            console.log('\x1b[33m%s\x1b[0m', err.toString());
        }
        console.log('****************STATS*************');
        console.log('\x1b[36m%s\x1b[0m', stats.toString());
        console.log('****************/STATS*************');
        callback();
    });
});