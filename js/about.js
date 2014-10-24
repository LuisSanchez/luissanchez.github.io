var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

	// build tween
	var tween = new TimelineMax ()
		.add([
			TweenMax.from("#parallax1 > div", 1, {top: "-80%", ease: Linear.easeNone}),
			TweenMax.from("#wood-table", 1, {top: "75%", ease: Linear.easeNone})
		]);

	// build scenes
	new ScrollScene({triggerElement: "#parallax1"})
		.setTween(tween)
		.addTo(controller);
		/*.addIndicators({zindex: 1, suffix: "1"});*/
  
	
	controller = new ScrollMagic();

	var sceneOptions = {duration: 200, offset: -100};

	// fade
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-1")
		.setTween(TweenMax.from("#ts-1", 1, {autoAlpha: 0}))
		.addIndicators({zindex: 2, suffix: "1"});
	
	// fade
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-2")
		.setTween(TweenMax.from("#ts-2 > div > h1", 1, {autoAlpha: 0}))
		.addIndicators({zindex: 2, suffix: "2"});
});