/**
 * @license 
 * Copyright (c) 2015, Immo Schulz-Gerlach, www.isg-software.de 
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are 
 * permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT 
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, 
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED 
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 * WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


( function($) {

	var getSquareSize = function(args) {
		var x = args.radius * args.sizeFactor;
		if (typeof args.maxSize === "number" && args.maxSize > 0) {
			x = Math.min(x, args.maxSize);
		}
		return x;
	};
	var setFill = function(obj, args) { 
		obj.setAttribute("style", "fill: " + args.color + "; stroke: none");
	};

	/**
	 * SVG Content Plug-in for jquery-progresspiesvg: Draw a stop control icon (square) into the ring graph.
	 * Use by adding the option <code>contentPlugin: "stop"</code> (or <code>contentPlugin: $.fn.progressPie.contentPlugin.stop</code>)
	 * to your call of the progresspie plug-in.
	 * <p>Additional arguments may be supplied by adding the option <code>contentPluginOptions</code> to the progressPie plugin options.
	 * This is to be an object which may hold the following properties:</p>
	 * <ul>
	 * <li><code>maxSize</code>: maximum size in pixels for the square (width/height of the square)</li>
	 * <li><code>color</code>: draw the icon in a specific color (defaults to the color of the surrounding ring chart).</li>
	 * </ul>
	 * <p>Please note: This function is called <em>internally</em> by the progressPie jQuery plug-in! Don't call this function directly,
	 * but use it as desrcibed above!</p>
	 * @function stop
	 * @param {object} args object holding several arguments provided by the progressPie plug-in, including any option you specified in
	 * the object <code>contentPluginOptions</code>.
	 * @memberof jQuery.fn.progressPie.contentPlugin
	 * @requires jquery-progresspiesvg-min.js
	 */
	$.fn.progressPie.contentPlugin.stop = function(args) {
		var opts = $.extend({}, $.fn.progressPie.contentPlugin.controlIconDefaults, args);
		var x = getSquareSize(opts); //length of each side of the square
		var r = x/2; //"radius" of the square, i.e. half its size length
		var rect = args.newSvgElement("rect");
		rect.setAttribute("x", -r);
		rect.setAttribute("y", -r);
		rect.setAttribute("width", x);
		rect.setAttribute("height", x);
		setFill(rect, opts);
	};

	/**
	 * SVG Content Plug-in for jquery-progresspiesvg: Draw a pause control icon (2 vertical bars) into the ring graph.
	 * Usage: See {@link jQuery.fn.progressPie.contentPlugin.stop}
	 * @function pause
	 * @param {object} args object holding several arguments provided by the progressPie plug-in, including any option you specified in
	 * the object <code>contentPluginOptions</code>.
	 * @memberof jQuery.fn.progressPie.contentPlugin
	 * @requires jquery-progresspiesvg-min.js
	 */
	$.fn.progressPie.contentPlugin.pause = function(args) {
		var opts = $.extend({}, $.fn.progressPie.contentPlugin.controlIconDefaults, args);
		var x = getSquareSize(opts);
		var r = x/2;
		var rect = args.newSvgElement("rect");
		rect.setAttribute("x", -r);
		rect.setAttribute("y", -r);
		rect.setAttribute("width", r * 0.7);
		rect.setAttribute("height", x);
		setFill(rect, opts);
	
		rect = args.newSvgElement("rect");
		rect.setAttribute("x", r * 0.3);
		rect.setAttribute("y", -r);
		rect.setAttribute("width", r * 0.7);
		rect.setAttribute("height", x);
		setFill(rect, opts);
	};

	/**
	 * SVG Content Plug-in for jquery-progresspiesvg: Draw a play control icon (triangle pointing to the right) into the ring graph.
	 * Usage: See {@link jQuery.fn.progressPie.contentPlugin.stop}<br>
	 * Note that the size (height and width) of the play icon is always a bit larger that of the stop or pause icon, because overall
	 * the area filled by the triangle is much smaller than that of the square (stop icon). The optional <code>maxSize</code> option
	 * specifies the maximum height and with for "stop" and "pause", while the maximum width and height of this "play" symbol are a
	 * bit larger than maxSize (currently 20% larger).
	 * @function play
	 * @param {object} args object holding several arguments provided by the progressPie plug-in, including any option you specified in
	 * the object <code>contentPluginOptions</code>.
	 * @memberof jQuery.fn.progressPie.contentPlugin
	 * @requires jquery-progresspiesvg-min.js
	 */
	$.fn.progressPie.contentPlugin.play = function(args) {
		var opts = $.extend({}, $.fn.progressPie.contentPlugin.controlIconDefaults, args);
		var x = getSquareSize(opts);
		var r = x/2;
		var play = args.newSvgElement("path");
		//pythagoras: (2r)^2 = r^2 + w^2   with w being the horizontal width of the triangle and r being half the length of its sides.
		// w^2 = 3 r^3
		//   w = sqrt(3) r = 1.732 r
		// left = w - r = 0.732 r:
		var left = -0.732 * r;
		r = r * 1.2; //Since the triangle is only half in area compared to the "stop" square, enlarge it "a bit"
		//(Even if the minimum circle surrounding this triangle is now greater in diameter than those of the "stop" or "pause" symbol,
		// it's still smaller than the inner radius of the ring.)
		play.setAttribute("d", "M"+left+",-"+r+" L"+r+",0 L"+left+","+r+" Z");
		setFill(play, opts);
	};
	
	/**
	 * Default Options.
	 * This is a public (static) object in order to allow users to globally modify the defaults
	 * before using the <code>controlIcon</code> content plug-ins.
	 * @member controlIconDefaults
	 * @memberof jQuery.fn.progressPie.contentPlugin
	 * @property {number} sizeFactor - Default sizeFactor for controlIcons, defaults to 0.85.
	 * The inner radius of the surrounding ring graph is multiplied with this factor to
	 * get the default height and width of the stop or pause icon. The play icon is a little
	 * larger in height to compensate it's smaller area.
	 * @property {number} maxSize - Default maximum size for control icons (in px), defaults to 0 (i.e. no maximum size).
	 */
	$.fn.progressPie.contentPlugin.controlIconDefaults = {
		sizeFactor: 0.85,
		maxSize: 0
	};
} (jQuery));