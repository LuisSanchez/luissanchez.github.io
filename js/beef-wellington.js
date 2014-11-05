$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();

	// var sceneOptions = {duration: 200, offset: -100};

	// TweenMax.staggerFromTo(".col-custom-8", 1, {left: 700}, {left: 0}, 0.15);
	TweenMax.staggerFromTo(".col-custom-8", 1, {rotation:360}, {rotation:0}, 0.15);

	//TweenMax.staggerTo(".col-custom-8", 1, {rotation:360, y:100}, 0.5);
	
	// build scene
	// var scene = new ScrollScene({triggerElement: ".nutrition-table", duration: 300})
					// .setTween(tween)
					// .addTo(controller)
					// .addIndicators({zindex: 1, suffix: "1"});

	// show indicators (requires debug extension)
	// scene.addIndicators();
		
	// fade
	// new ScrollScene(sceneOptions)
		// .addTo(controller)
		// .triggerHook("onCenter")
		// .triggerElement(".featurette-1")
		// .setTween(TweenMax.from(".featurette-1", 1, {autoAlpha: 0}));
		// // .addIndicators({zindex: 1, suffix: "1"});
});