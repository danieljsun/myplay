/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: 'jquery',
		underscore: 'underscore',
		backbone: 'backbone'
	}
});

require(["underscore", "backbone", "helper/lib"], function(_, Backbone, l) {
    var sum = _.bind(l.sum, l, 4, 5);
    var s = sum(4, 5);
    alert(s);
});
