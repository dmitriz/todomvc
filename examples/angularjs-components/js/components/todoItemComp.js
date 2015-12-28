/* jshint undef: true, unused: true */
/*global angular */
(function () {
	'use strict';

	angular.module('todoItemComp', [])

	/**
	 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
	 */
	// .component('todoItem', {
	//    	bindings: {
	//       //count: '='
	//     },
	//     //controller: 'CounterCtrl',
	//     templateUrl: 'todoItem.tpl.html'
	// });

	.directive('todoItem', function(){
		return {
		    //controller: 'CounterCtrl',
		    templateUrl: 'js/components/todoItem.tpl.html'
		};
	});

})();
