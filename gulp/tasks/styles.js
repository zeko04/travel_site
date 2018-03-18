var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nestedCss = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nestedCss, hexrgba, autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
	.pipe(gulp.dest('./app/temp/styles'));
});