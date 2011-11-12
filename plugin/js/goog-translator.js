/* AUTHOR:  Maksim Ryzhikov
 * NAME:    goog-translator.js
 * DRIVER: nodejs
 * VERSION: 0.1.0
 * URL: https://github.com/maksimr
 */

(function (p) {
	"use strict";

	var http = require('http'),
	query = p.argv[2],
	langpair = p.argv[3],
	goog = {};

	goog.tranlator = {
		langpair: "en|ru",
		translate: function (query, langpair) {
			var lng = (langpair || this.langpair).split("|"),
			hl = lng[0],
			tl = lng[1],
			sl = hl,
			_outp = '';
			/*
       * send request
       */
			return http.get({
				host: 'translate.google.com',
				path: "/translate_a/t?client=t&text=" + encodeURIComponent(query) + "&hl=" + hl + "&sl=" + sl + "&tl=" + tl + "&multires=1&otf=1&ssel=0&tsel=0&sc=1",
				port: 80,
        headers: {
          /*
           * hack for fix encoding
           */
          'user-agent': 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1'
        }
			},
			function (res) {
        /*
         * handle response
         */
				res.on('data', function (chunk) {
					var jschunk = eval('(' + chunk + ')');
					_outp += jschunk[0][0][0];
				}).on('end', function () {
					console.log(_outp);
				});
			}).on('error', function (e) {});
		}
	};

	goog.tranlator.translate(query, langpair);
} (process));
