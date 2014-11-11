var controller;
$(document).ready(function($) {
	// init controller
	// controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

	// // build tween
	// var tween = new TimelineMax ()
	// 	.add([
	// 		TweenMax.from("#parallax1 > div", 1, {top: "-80%", ease: Linear.easeNone}),
	// 		TweenMax.from("#wood-table", 1, {top: "75%", ease: Linear.easeNone})
	// 	]);

	// // build scenes
	// new ScrollScene({triggerElement: "#parallax1"})
	// 	.setTween(tween)
	// 	.addTo(controller);
	// 	//.addIndicators({zindex: 1, suffix: "1"});
  
	// parallax
	var controller = new ScrollMagic();
	new ScrollScene({
		triggerElement: "section#parallax",
		duration: $(window).height() + 300,
		offset: -150
	})
	.addTo(controller)
	.triggerHook("onCenter")
	.setTween(new TimelineMax().add([
		TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.2, top: "75%"}, {top: "0%", ease: Linear.easeNone}),
		TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -260%", ease: Linear.easeNone})
	]));

	controller = new ScrollMagic();

	var sceneOptions = {duration: 200, offset: -100};

	// fade
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-1")
		.setTween(TweenMax.from("#ts-1", 1, {autoAlpha: 0}));
		// .addIndicators({zindex: 2, suffix: "1"});
	
	// fade
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-2")
		.setTween(TweenMax.from("#ts-2", 1, {autoAlpha: 0}));
		// .addIndicators({zindex: 2, suffix: "2"});
});