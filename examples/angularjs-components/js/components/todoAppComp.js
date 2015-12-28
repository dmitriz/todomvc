/* jshint undef: true, unused: true */
/*global angular */
(function () {
	'use strict';

	angular.module('todoAppComp', [])

	/**
	 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
	 */
	.component('todoApp', {
	   	// bindings: {
	    //   //count: '='
	    // },
	    controller: 'todoCtrl',
	    templateUrl: 'js/components/todoApp.tpl.html'
	})

	.controller('todoCtrl', function () {

	});
})();
