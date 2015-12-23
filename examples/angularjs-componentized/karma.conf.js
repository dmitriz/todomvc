module.exports = function (config) {
	'use strict';

	config.set({
		frameworks: ['jasmine'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'js/**/*.js',
			'test/unit/**/*.js'
		],
		autoWatch: true,
		singleRun: false,
		browsers: ['Chrome']
	});
};
