var map;
var marker;
var latLng = new google.maps.LatLng(-33.4735291, -70.6449825)

function initialize() {
	var mapOptions = {
	    zoom: 13,
	    center: latLng,
	    scrollwheel: false
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	marker = new google.maps.Marker({
	    map: map,
	    draggable: true,
	    animation: google.maps.Animation.DROP,
	    position: latLng
	});
}

$(document).ready(function($) {
	// init controller
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

	// build scenes
	new ScrollScene({triggerElement: "#parallax1"})
				.setTween(TweenMax.from("#parallax1 > div", 1, {top: "-50%", ease: Linear.easeNone}))
				.addTo(controller);
				// .addIndicators({zindex: 1, suffix: "1"});
	
	controller = new ScrollMagic();

	var sceneOptions = {duration: 200, offset: -100};
	
	// fade ts-1
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-1")
		.setTween(TweenMax.from("#ts-1", 1, {autoAlpha: 0}));
		// .addIndicators({zindex: 2, suffix: "2"});
	
	// fade ts-2
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement("#ts-2")
		.setTween(TweenMax.from("#ts-2", 1, {autoAlpha: 0}));
		// .addIndicators({zindex: 3, suffix: "3"});
		
	google.maps.event.addDomListener(window, 'load', initialize);
});