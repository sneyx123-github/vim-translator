/* AUTHOR:  Maksim Ryzhikov
 * NAME:    goog-translator.js
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
			sl = hl;
			return http.get({
				host: 'translate.google.com',
				port: 80,
				path: "/translate_a/t?client=t&text=" + encodeURIComponent(query) + "&hl=" + hl + "&sl=" + sl + "&tl=" + tl + "&multires=1&otf=1&trs=1&sc=1"
			},
			function (res) {
				res.on('data', function (chunk) {
					var jsres = eval('(' + chunk + ')');
					console.log(jsres[0][0][0]);
				});
			}).on('error', function (e) {});
		}
	};

	goog.tranlator.translate(query, langpair);
} (process));
