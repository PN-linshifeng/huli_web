var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ssi = require('browsersync-ssi');
var reload = browserSync.reload;
var rubySass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps'); // 来源地图
var cleanCss = require('gulp-clean-css'); // css压缩
var spriter = require('gulp-css-spriter'); // 雪碧图
var cssScss = require('gulp-css-scss');
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var nodeSass = require('node-sass');

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', function () {
	// "scssEN","scssCN"
	browserSync.init({
		server: {
			baseDir: './',
			middleware: ssi({
				baseDir: './',
				ext: ['.html'],
			}),
		},
		port: 8008,
	});

	gulp.watch(['./**/*.html', '!node_modules/**']).on('change', reload);
	gulp.watch('**/*.js').on('change', reload);

	gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
});

// css 刷新
gulp.task('cssLoad', function () {
	return gulp.src('cn/**/*.css').pipe(
		browserSync.stream({
			stream: true,
			match: '**/*.css',
		})
	);
});

gulp.task('sass', function () {
	var filter = 'assets/scss/**/!(sprite)*.scss';
	return (
		gulp
			.src(filter)
			.pipe(sourcemaps.init())
			.pipe(sass())

			.pipe(
				autoprefix({
					browsers: ['last 30 versions', 'Android >= 4.0'],
					cascade: false, // 是否美化属性值 默认：true 像这样：
					// -webkit-transform: rotate(45deg);
					//        transform: rotate(45deg);
					remove: true, // 是否去掉不必要的前缀 默认：true
				})
			)
			.pipe(cleanCss()) // 压缩
			.pipe(
				sourcemaps.write('./', {
					// 路径相对 gulp.dest
					includeContent: false,
					sourceRoot: '../scss/', // gulp.dest sourcemaps
				})
			)
			// .pipe(
			//   sourcemaps.write("./")
			// )
			.pipe(gulp.dest('assets/css/'))
			.pipe(
				browserSync.stream({
					match: '**/*.css',
				})
			)
	);
});

gulp.task('default', gulp.series(gulp.parallel('serve', 'cssLoad', 'sass')));
