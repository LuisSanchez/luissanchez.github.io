var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();

	var sceneOptions = {duration: 200, offset: -100};

	// fade
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement(".featurette-1")
		.setTween(TweenMax.from(".featurette-1", 1, {autoAlpha: 0}));
		/*.addIndicators({zindex: 1, suffix: "1"});*/
  
  	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement(".featurette-2")
		.setTween(TweenMax.from(".featurette-2", 1, {autoAlpha: 0}));
		/*.addIndicators({zindex: 1, suffix: "2"});*/
  
  	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement(".featurette-3")
		.setTween(TweenMax.from(".featurette-3", 1, {autoAlpha: 0}));
		/*.addIndicators({zindex: 1, suffix: "3"});*/
});