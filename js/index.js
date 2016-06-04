// The FEE logic for the program would reside here.
(function(win,$){
	if($ === undefined || $ === null){
		console.error('jQuery not found');
	}
	var state_array = [false,false,false,false] // array to hold the image state of the carousel.
	var isCarouselEnabled = false; // flag to hold the carousel enable/disable information. 
	var func_enable_carousel = function(state_array){
		// check if the carousel is already enabled
		if(isCarouselEnabled || $.inArray(false,state_array)!== -1){
			return;
		}
		// this function would enable the carousel controls
		$('.carousel-indicators').css({"display": "block"});
		$('.carousel-control').css({"display": "block"});
		isCarouselEnabled = true;
		return;

		
		
	}
	// function to hold the value of image state for the
	// carousel. It return an array of boolean.
	var carousel_image_state = function(value,position){
		state_array[position] = value;
		return state_array;
	}
	// find out if all the images has been loaded 
	// before presenting the carousel controls
	$('.carousel-image').bind({
		// caveat 'load' function would be called
		// when the images are not loaded from browser cache.
		load:function(){
			var imageNumber = parseInt(this.className.match(/\d/)[0],10);
			carousel_image_state(true,imageNumber-1);
			func_enable_carousel(state_array);
			
		}
	});
	// load function may not me called
	// check if the images are complete 
	if($('.carousel-inner img')[0].complete){
		var forced_state_array = [true];
		func_enable_carousel(forced_state_array);
	}
	$('.carousel').carousel({
		interval: false
	})
	
})(window,jQuery)