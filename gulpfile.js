//请求模块
var gulp = require("gulp");
var sass = require("gulp-sass");
//var browserSync = require("browser-sync");

//创建任务（执行任务）
//编译 sass文件
gulp.task('buildSass',function(){
//	匹配要处理的文件
	gulp.src('src/sass/*.scss')
//		编译scss文件
		.pipe(sass({outputStyle:'compact'}))//expanded展开 compact单行
//		 输出文件
		.pipe(gulp.dest('src/css'))
		
});

//监听sass文件
gulp.task('jtSass',function(){
//	监听文件,当文件有修改时,执行buildSass任务
	gulp.watch('src/sass/*.scss',['buildSass']);
});

//利用browser-sync静态服务器
//gulp.task('server',function(){
//	browserSync({
//		server:{
//			baseDir:"./src"
//		}
//	})
//})
