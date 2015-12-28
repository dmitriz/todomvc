/* jshint undef: true, unused: true */
/*global angular */
(function () {
	'use strict';

	angular.module('todoItemComp', [])

	/**
	 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
	 */
	.directive('todoItem', {
	   	bindings: {
	      //count: '='
	    },
	    //controller: 'CounterCtrl',
	    templateUrl: 'todoItem.tpl.html'
	});
})();
