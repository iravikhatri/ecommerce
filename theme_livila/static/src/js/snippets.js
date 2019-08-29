$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		// dots: false,
		dotsEach: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	
	$('.nextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	})
	
	$('.prevBtn').click(function() {
		owl.trigger('prev.owl.carousel');
	})

	$(".theme_livila_edit_box").hide();
	$('#theme_livila_edit').click(function(){
		$(".theme_livila_edit_box").toggle();
	});
	
});

