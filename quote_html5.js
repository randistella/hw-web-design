(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 75,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.quote_html5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		//
		///* Stop at This Frame
		//The Flash timeline will stop/pause at the frame where you insert this code.
		//Can also be used to stop/pause the timeline of movieclips.
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// One who
	this.text = new cjs.Text("One who plants a garden", "14px 'Trebuchet MS'", "#660066");
	this.text.lineHeight = 16;
	this.text.lineWidth = 184;
	this.text.setTransform(242,2.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:237.1},0).wait(1).to({x:232.2},0).wait(1).to({x:227.4},0).wait(1).to({x:222.5},0).wait(1).to({x:217.7},0).wait(1).to({x:212.8},0).wait(1).to({x:208},0).wait(1).to({x:203.1},0).wait(1).to({x:198.2},0).wait(1).to({x:193.4},0).wait(1).to({x:188.5},0).wait(1).to({x:183.7},0).wait(1).to({x:178.8},0).wait(1).to({x:174},0).wait(1).to({x:169.1},0).wait(1).to({x:164.2},0).wait(1).to({x:159.4},0).wait(1).to({x:154.5},0).wait(1).to({x:149.7},0).wait(1).to({x:144.8},0).wait(1).to({x:140},0).wait(1).to({x:135.1},0).wait(1).to({x:130.2},0).wait(1).to({x:125.4},0).wait(1).to({x:120.5},0).wait(1).to({x:115.7},0).wait(1).to({x:110.8},0).wait(1).to({x:106},0).wait(1).to({x:101.1},0).wait(1).to({x:96.2},0).wait(1).to({x:91.4},0).wait(1).to({x:86.5},0).wait(1).to({x:81.7},0).wait(1).to({x:76.8},0).wait(1).to({x:72},0).wait(1).to({x:67.1},0).wait(1).to({x:62.2},0).wait(1).to({x:57.4},0).wait(1).to({x:52.5},0).wait(1).to({x:47.7},0).wait(1).to({x:42.8},0).wait(1).to({x:38},0).wait(1).to({x:33.1},0).wait(1).to({x:28.2},0).wait(1).to({x:23.4},0).wait(1).to({x:18.5},0).wait(1).to({x:13.7},0).wait(1).to({x:8.8},0).wait(1).to({x:4},0).wait(1));

	// Chinese
	this.text_1 = new cjs.Text("Chinese Proverb", "14px 'Trebuchet MS'", "#660066");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 126;
	this.text_1.setTransform(91,55.9);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(49).to({_off:false},0).wait(1));

	// plants
	this.text_2 = new cjs.Text("plants happiness.", "14px 'Trebuchet MS'", "#660066");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(242,29.9);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(20).to({x:235.5},0).wait(1).to({x:229.1},0).wait(1).to({x:222.7},0).wait(1).to({x:216.2},0).wait(1).to({x:209.8},0).wait(1).to({x:203.4},0).wait(1).to({x:196.9},0).wait(1).to({x:190.5},0).wait(1).to({x:184.1},0).wait(1).to({x:177.6},0).wait(1).to({x:171.2},0).wait(1).to({x:164.8},0).wait(1).to({x:158.3},0).wait(1).to({x:151.9},0).wait(1).to({x:145.5},0).wait(1).to({x:139},0).wait(1).to({x:132.6},0).wait(1).to({x:126.2},0).wait(1).to({x:119.7},0).wait(1).to({x:113.3},0).wait(1).to({x:106.9},0).wait(1).to({x:100.4},0).wait(1).to({x:94},0).wait(1).to({x:87.6},0).wait(1).to({x:81.1},0).wait(1).to({x:74.7},0).wait(1).to({x:68.3},0).wait(1).to({x:61.8},0).wait(1).to({x:55.4},0).wait(1).to({x:49},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104,40.3,426,61.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;