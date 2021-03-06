// 'use strict';

/*eslint-disable */
(function(global) {
	'use strict';
	global.console = global.console || {};
	var con = global.console;
	var prop, method;
	var empty = {};
	var dummy = function() {};
	var properties = 'memory'.split(',');
	var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
		 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
		 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
	while (method = methods.pop()) if (typeof con[method] !== 'function') con[method] = dummy;
	// Using `this` for web workers & supports Browserify / Webpack.
})(typeof window === 'undefined' ? this : window);
/*eslint-enable */

/**
 * main and config
 *
 * Require configuration and definition of main
 */
 // require = require('requirejs');
 // var requirejs = require('requirejs');
 // var require = require('requirejs');
 // var matchheight = require('MatchHeight');

require.config({

	// Increase the wait time before giving up on a script
	waitSeconds: 15,

	baseUrl: 'js',

	paths: {
		// Core Libraries
		matchH : '../../bower_components/matchHeight/jquery.matchHeight',
		jquery: 'libs/jquery/jquery',
		lodash: 'libs/lodash',
		slider: 'modules/slider',
		slideshow: 'modules/slide_show',
		searchNav: 'modules/search_nav',
		accordian: 'modules/accordian_module',
			custom: 'custom',
	},

	// Sets the configuration for your third party scripts that are not
	// AMD compatible
	shim: {
		lodash: {
			exports: '_',
		},
	},
}); // end require.config

 // * main
 // */
require([
	'jquery',
	'lodash',
	'apps/master/app',
	'custom',
	'matchH',
	'slider',
	'slideshow',
	'searchNav',
	'accordian',
], function main($, _, App) {
	// Start the application
	App.start();

	window.App = App;
});
