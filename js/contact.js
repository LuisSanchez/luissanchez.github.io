$(document).ready(function($) {
	// init controller
	var controller1 = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

	// build scenes
	new ScrollScene({triggerElement: "#parallax1"})
				.setTween(TweenMax.from("#parallax1 > div", 1, {top: "-80%", ease: Linear.easeNone}))
				.addTo(controller1)
				.addIndicators({zindex: 1, suffix: "1"});;
  
	controller = new ScrollMagic();

	var sceneOptions = {duration: 200, offset: -100};
	
	// fade ts-1
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-1")
		.setTween(TweenMax.from("#ts-1", 1, {autoAlpha: 0}))
		.addIndicators({zindex: 2, suffix: "2"});
	
	// fade ts-2
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-2")
		.setTween(TweenMax.from("#ts-2", 1, {autoAlpha: 0}))
		.addIndicators({zindex: 3, suffix: "3"});
});