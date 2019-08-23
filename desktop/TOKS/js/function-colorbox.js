$(document).ready(function(){
	$(".modal").colorbox({
		innerWidth: '205px',
		innerHeight: '293px',
		transition: 'none',
		onComplete:function(){ 
			$('#slider_small #slider_content').jcarousel({
				scroll: 1,
				initCallback: mycarousel_initCallback,
        		// This tells jCarousel NOT to autobuild prev/next buttons
				buttonNextHTML: null,
				buttonPrevHTML: null
			});
		}
	});
	
	$(".modal2").bind("click",function(){
		if($("html").hasClass("iphone")){
			$(this).colorbox({
					innerWidth: '300px',
					innerHeight: '208px',
					onComplete:function(){ 
						$('#slider_big #slider_content').jcarousel({
							scroll: 1,
							initCallback: mycarousel_initCallback2,
        					// This tells jCarousel NOT to autobuild prev/next buttons
							buttonNextHTML: null,
							buttonPrevHTML: null
						});
				}
			});
		}else{
			$(this).colorbox({
					innerWidth: '656px',
					innerHeight: '457px',
					onComplete:function(){ 
						$('#slider_big #slider_content').jcarousel({
							scroll: 1,
							initCallback: mycarousel_initCallback2,
        					// This tells jCarousel NOT to autobuild prev/next buttons
							buttonNextHTML: null,
							buttonPrevHTML: null
						});
				}
			});
		}
	});
	
	function mycarousel_initCallback2(carousel) {
	
		var botones = jQuery('#slider_big .jcarousel-control ul li a');
    	botones.bind('click', function() {
        	carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        	botones.removeClass("activo");
        	jQuery(this).addClass("activo");
        	return false;
    	});
		
    	jQuery('#slider_big #slider_content-next').bind('click', function() {
        	carousel.next();
        	var boton = carousel.first - 1;
        	botones.removeClass("activo");
        	botones.each(function(index){
        		if(index==boton){
        			jQuery(this).addClass("activo");
        		}
        	});
        	return false;
    	});

    	jQuery('#slider_big #slider_content-prev').bind('click', function() {
        	carousel.prev();
        	var boton = carousel.first - 1;
        	botones.removeClass("activo");
        	botones.each(function(index){
        		if(index==boton){
        			jQuery(this).addClass("activo");
        		}
        	});
        	return false;
    	});
    	
    	
	};
	

	function mycarousel_initCallback(carousel) {
	
		var botones = jQuery('#slider_small .jcarousel-control ul li a');
    	botones.bind('click', function() {
        	carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        	botones.removeClass("activo");
        	jQuery(this).addClass("activo");
        	return false;
    	});
		
    	jQuery('#slider_small #slider_content-next').bind('click', function() {
        	carousel.next();
        	var boton = carousel.first - 1;
        	botones.removeClass("activo");
        	botones.each(function(index){
        		if(index==boton){
        			jQuery(this).addClass("activo");
        		}
        	});
        	return false;
    	});

    	jQuery('#slider_small #slider_content-prev').bind('click', function() {
        	carousel.prev();
        	var boton = carousel.first - 1;
        	botones.removeClass("activo");
        	botones.each(function(index){
        		if(index==boton){
        			jQuery(this).addClass("activo");
        		}
        	});
        	return false;
    	});
    	
    	
	};
});

