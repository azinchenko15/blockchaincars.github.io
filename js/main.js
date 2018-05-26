$(document).ready(function(){


	$('.slick').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		vertical: true,
		// autoplay: true,
		// autoplaySpeed: 1000,
		prevArrow: "<div class='slick-arrow bot-arrow'></div>",
		nextArrow: "<div class='slick-arrow top-arrow'></div>"
	});
	//if($('.slick-user-referals').find('.slick-element-referals').length > 6){
		$('.slick-user-referals').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			rows: 2,
			infinite: false,
			arrows: true,
			prevArrow: "<div class='slick-arrow-white right-arrow'></div>",
			nextArrow: "<div class='slick-arrow-white left-arrow'></div>",
			responsive:[
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    ]
		});
	//}

	$('.slick-user-payment-history').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		prevArrow: "<div class='slick-arrow-white right-arrow-payment-history'></div>",
		nextArrow: "<div class='slick-arrow-white left-arrow-payment-history'></div>",
		responsive:[
	    {
	      breakpoint: 425,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    ]
	});

})