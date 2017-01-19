// adapt code and on top of Chart.js

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var insert = require('gulp-insert');
var streamify = require('gulp-streamify');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var uglify = require('uglify-js');
var minifier = require('gulp-uglify/minifier');
var collapse = require('bundle-collapser/plugin');
var package = require('./package.json');
var karma = require('gulp-karma');
var argv = require('yargs').argv;
var jsdoc = require('gulp-jsdoc3');
var babel = require('gulp-babel');
var rimraf = require('rimraf');

var srcDir = './src/';
var outDir = './dist/';

var header = "/*!\n" +
	" * Spinwheel.js\n" +
	" * https://playbasis.com\n" +
	" * Version: {{ version }}\n" +
	" *\n" +
	" * Copyright 2017 Playbasis Co.,Ltd\n" +
	" * Released under the Copyright license\n" +
	" * https://github.com/playbasis/spinwheel-js/blob/master/LICENSE.md\n" +
	" */\n";

var preTestFiles = [
];

var testFiles = [
	'./test/*.js'
];

/**
 * Tasks
 */
gulp.task('build', ['buildInitial'], buildCombinedTask);
gulp.task('buildInitial', buildInitialTask);
gulp.task('buildNormal', buildNormalTask);
gulp.task('buildMinified', buildMinifiedTask);
gulp.task('unittest', unittestTask);
gulp.task('unittestFull', unittestFullTask);
gulp.task('doc', docTask);

function startTest() {
	return [].concat(preTestFiles).concat([
			'./src/**/*.js',
			'./test/mockContext.js'
		]).concat(
			argv.inputs?
			argv.inputs.split(';'):
			testFiles
		);
}

function unittestTask() {
	return gulp.src(startTest())
		.pipe(karma({
			configFile: 'karma.conf.fast.js',
			action: 'run'
		}));
}

function unittestFullTask() {
	return gulp.src(startTest())
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}));
}

function buildInitialTask() {
	// build normal version
	var bundled = browserify('./src/spinwheel.js', { standalone: 'PBSpinwheel' })
		.plugin(collapse)
		.bundle()
		.pipe(source('PBSpinwheel-es6.js'))
		.pipe(insert.prepend(header))
		.pipe(streamify(replace('{{ version }}', package.version)))
		.pipe(gulp.dest(outDir));

	return bundled;
}

function buildCombinedTask() {
	buildNormalTask();
	buildMinifiedTask();
}

function buildNormalTask() {
	// build minified version
	var options = {
		preserveComments: 'license'
	};

	// TODO: Whenever gulp-uglify support es6, then we update this to just chain (pipe) and use uglify directly from gulp-uglify
	// but for this instance we need to convert it to es2015 first before minify and uglify
	return gulp.src('dist/PBSpinwheel-es6.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(streamify(replace('{{ version }}', package.version)))
		.pipe(streamify(concat('PBSpinwheel.js')))
		.pipe(gulp.dest(outDir));
}

function buildMinifiedTask() {
	// build minified version
	var options = {
		preserveComments: 'license'
	};

	// TODO: Whenever gulp-uglify support es6, then we update this to just chain (pipe) and use uglify directly from gulp-uglify
	// but for this instance we need to convert it to es2015 first before minify and uglify
	return gulp.src('dist/PBSpinwheel-es6.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(minifier(options, uglify))
		.pipe(streamify(replace('{{ version }}', package.version)))
		.pipe(streamify(concat('PBSpinwheel.min.js')))
		.pipe(gulp.dest(outDir));
}

function docTask(cb) {
    var config = require('./jsdocConfig.json');
    // delete docs folder first
    rimraf(config.opts.destination, function() {
        return gulp.src(['README.md', './src/**/*.js'], {read: false})
		    .pipe(jsdoc(config));
    });
}
