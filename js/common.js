/* --------------------------------------------- */
/* ------ JAVASCRIPT JQUERY STARTS HERE-------- */
/* ------------------------------------------- */

//Responsive navbar menu main + userpage
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//Responsive navbar menu main + userpage ENDS

var dashes_count = 10;
var dashes_length = 25;
var my_colors = [];
my_colors["0"] = "#83b3d4";
my_colors["1"] = "#83b3d4";
my_colors["2"] = "#78a4c2";
my_colors["3"] = "#6c94b0";
my_colors["4"] = "#60849e";
my_colors["5"] = "#54748c";
my_colors["6"] = "#47657a";
my_colors["7"] = "#3b5568";
my_colors["8"] = "#2c4353";
my_colors["9"] = "#1b2d3c";
my_colors["10"] = "#162635";

$(function() {



	$(".secs.noUnit").progressPie({
		scale: 1.2,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "rawValue",
		contentPluginOptions: {
        	fontSizeFactor: 0.5
    	},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

	$(".secs.Unit3").progressPie({
		scale: 1.3,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "image",
		contentPluginOptions: {
        			href: "svg/total-operations.svg",
        			inBackground: true,
        			margin: 20
    			},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

	$(".secs.Unit2").progressPie({
		scale: 1.2,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "image",
		contentPluginOptions: {
        			href: "svg/invested.svg",
        			inBackground: true,
        			margin: 20
    			},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

	$(".secs.Unit1").progressPie({
		scale: 1.2,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "image",
		contentPluginOptions: {
        			href: "svg/paid_out.svg",
        			inBackground: true,
        			margin: 20
    			},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

	$(".secs.Unit4").progressPie({
		scale: 1.2,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "image",
		contentPluginOptions: {
        			href: "svg/total-renters.svg",
        			inBackground: true,
        			margin: 20
    			},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

	$(".secs.Unit5").progressPie({
		scale: 1.2,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "image",
		contentPluginOptions: {
        			href: "svg/cars-for-rent.svg",
        			inBackground: true,
        			margin: 20
    			},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

	$(".secs.Unit6").progressPie({
		scale: 1,
		valueData: "val",
		valueAdapter: function(s) {return parseInt(s) * 10 / 10;},
		size: 100,
		ringWidth: 15,
		strokeWidth: 15,
		strokeColor: "#ddd",
		strokeDashes: {
			count: dashes_count,
			length: dashes_length,
			centered: false,
			colors: my_colors,
		},
		animateColor: false,
		contentPlugin: "image",
		contentPluginOptions: {
        			href: "svg/invested.svg",
        			inBackground: true,
        			margin: 20
    			},
		animate: {
			calcMethod: 'linear',
			dur: "3s"
        }
	});

});

$(document).ready(function(){

	$('.go').click(function() {
		let go = $(this).attr('href');
			if ($(go).length != 0) {
			$('html,body').animate({ scrollTop: $(go).offset().top }, 1000);
			}
			return false;
	});

  $('.animate').spincrement({
    from: 0,
    decimalPlaces: 0,
    duration: 3000
  });

  /*---------Messages Notification-----------*/

  $('ul.error_message li').each(function(k,v){
		var error = $(v).text();
		Notification(error, 3000, 'error');
	});

	$('ul.info_message li').each(function(k,v){
		var info = $(v).text();
		Notification(info, 3000, 'info');
	});

	$('ul.success_message li').each(function(k,v){
		var success = $(v).text();
		Notification(success, 3000, 'success');
	});

	function Notification(text, timeout = 3000, type = 'alert') {
		if(timeout > 0){
			new Noty({
			    type: type,
			    theme: 'sunset',
			    timeout: timeout,
			    text: text,
			}).show();
		 }
	};

  /*---------Messages Notification ENDS-----------*/

	$('button').click(function() {
		this.blur();
	});

	$('.nav-tabs a').click(function(){
    	$(this).tab('show');
	});

	$('#tab-container').easytabs();
  $('#tab-container2').easytabs();

	//Progress bars 'Referal link' section(user-page)
	$('#progressbar1').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '130px',
		fillBackgroundColor: '#ce7d35',
		ShowProgressCount: false,
	});
	$('#progressbar2').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '130px',
		fillBackgroundColor: '#ce7d35',
		ShowProgressCount: false,
	});
	$('#progressbar3').LineProgressbar({
		percentage: 40,
		radius: '15px',
		width: '170px',
		fillBackgroundColor: '#44af8a',
		ShowProgressCount: false,
	});
	//Progress bars 'Show room section' (user-page)
	$('#progressbar4').LineProgressbar({
		percentage: 90,
		radius: '15px',
		width: '100px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar5').LineProgressbar({
		percentage: 40,
		radius: '15px',
		width: '100px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar6').LineProgressbar({
		percentage: 85,
		radius: '15px',
		width: '80px',
		fillBackgroundColor: '#f73459',
		ShowProgressCount: false,
	});
	$('#progressbar7').LineProgressbar({
		percentage: 30,
		radius: '15px',
		width: '70px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar8').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '70px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar9').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '70px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	//My Garage progress bars
	$('#progressbar9').LineProgressbar({
		percentage: 30,
		radius: '15px',
		width: '100px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar10').LineProgressbar({
		percentage: 85,
		radius: '15px',
		width: '100px',
		fillBackgroundColor: '#f73459',
		ShowProgressCount: false,
	});
	$('#progressbar11').LineProgressbar({
		percentage: 50,
		radius: '15px',
		width: '100px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar12').LineProgressbar({
		percentage: 50,
		radius: '15px',
		width: '90px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar13').LineProgressbar({
		percentage: 50,
		radius: '15px',
		width: '90px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});
	$('#progressbar14').LineProgressbar({
		percentage: 50,
		radius: '15px',
		width: '90px',
		fillBackgroundColor: '#f73459',
		ShowProgressCount: false,
	});
	//Progress bars on home-page calculator
	$('#progressbar15').LineProgressbar({
		percentage: 90,
		radius: '15px',
		width: '110px',
		backgroundColor: '#687d8c',
		fillBackgroundColor: '#46ca9d',
		ShowProgressCount: false,
	});
	$('#progressbar16').LineProgressbar({
		percentage: 40,
		radius: '15px',
		width: '110px',
		backgroundColor: '#687d8c',
		fillBackgroundColor: '#46ca9d',
		ShowProgressCount: false,
	});
	//Total ROI home-page
	$('#progressbar17').LineProgressbar({
		percentage: 90,
		radius: '15px',
		width: '110px',
		backgroundColor: '#9daeba',
		fillBackgroundColor: '#f73459',
		ShowProgressCount: false,
	});
	$('#progressbar18').LineProgressbar({
		percentage: 30,
		radius: '15px',
		width: '90px',
		backgroundColor: '#c5d1da',
		fillBackgroundColor: '#fdc25a',
		ShowProgressCount: false,
	});
	$('#progressbar19').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '90px',
		backgroundColor: '#c5d1da',
		fillBackgroundColor: '#fdc25a',
		ShowProgressCount: false,
	});
	$('#progressbar20').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '90px',
		backgroundColor: '#c5d1da',
		fillBackgroundColor: '#fdc25a',
		ShowProgressCount: false,
	});
	//History-mode
	$('#progressbar21').LineProgressbar({
		percentage: 15,
		radius: '15px',
		width: '90px',
		fillBackgroundColor: '#959595',
		ShowProgressCount: false,
	});
	$('#progressbar22').LineProgressbar({
		percentage: 85,
		radius: '15px',
		width: '90px',
		fillBackgroundColor: '#959595',
		ShowProgressCount: false,
	});
	$('#progressbar23').LineProgressbar({
		percentage: 85,
		radius: '15px',
		width: '90px',
		height: '8px',
		fillBackgroundColor: '#0fc76e',
		ShowProgressCount: false,
	});

  /*---------SLIDERS-----------*/
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

	$('.main-slider-my-garage').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		prevArrow: "<div class='slick-arrow-white-right'><div class='slick-arrow-white right-arrow'></div></div>",
		nextArrow: "<div class='slick-arrow-white-left'><div class='slick-arrow-white left-arrow'></div></div>",
    responsive:[
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
      		slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      ]

	});

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
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
            arrows: false
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    ]
		});

	$('.slick-user-payment-history').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		prevArrow: "<div class='slick-arrow-white right-arrow-payment-history'></div>",
		nextArrow: "<div class='slick-arrow-white-left'><div class='slick-arrow-white left-arrow-payment-history'></div></div>",
		responsive:[
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
          arrows: false
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    ]
	});

	$('.center').slick({
		  centerMode: true,
  		slidesToShow: 1,
  		slidesToScroll: 3,
  		fade: true,
  		asNavFor: '.sliderForCenter',
  		prevArrow: "<div class='slick-arrow-white-right'><div class='slick-arrow-white right-arrow'></div></div>",
		nextArrow: "<div class='slick-arrow-white-left'><div class='slick-arrow-white left-arrow'></div></div>"
	});

	$('.sliderForCenter').slick({
  	slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		asNavFor: '.center',
		arrows: false,
  	dots: false,
    variableWidth: true,
    variableHeight: true,
  	focusOnSelect: true,
  	responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    }
	  	]
		});
  /*---------SLIDERS END-----------*/

  //Progress bars background fill-rule
	var target_dash_array = $('.circle-progress-bar path').css("stroke-dasharray");
	var dash_array = target_dash_array.split(',');
	var dash_fill = dash_array[0].replace(/[^0-9.]/g, '');
	var dash_space = dash_array[1].replace(/[^0-9.]/g, '');
	var dash_end = "0,360";
	var target_duration = 3000/dashes_count;
	var elem  = $('.circle-progress-bar')
	var dash_start = "";

	elem.find("path").css("stroke-dasharray", dash_end);

	function progressBar(elem, from, to, space, duration, count) {
		$({numberinf: from}).animate({numberinf: to}, {
			duration: duration,
			easing: 'linear',
			complete: function() {
				dash_start =  elem.css("stroke-dasharray").replace(/[^0-9.,]/g, '');
				dash_start = dash_start.replace("," + dash_end,'');
				dash_start = dash_start.replace(/[1-9.]/g, '0');
				count--;
  			if(count > 0) {
  				var id = parseInt($(elem).attr('id'))+1;
  				var parent_id = parseInt($(elem).parent().parent().attr('id'));
  				if($('.circle-progress-bar path[id='+id+'][parent_id='+parent_id+']').length > 0) {
  					progressBar($('.circle-progress-bar path[id='+id+'][parent_id='+parent_id+']'),from, to, space, duration, count)
              }
            }
			    },
          step: function(now1, fx){
            var path_no = parseInt($(elem).attr('id'))-1;
            var dashoffset = path_no*(parseFloat(dash_fill)+parseFloat(dash_space));
            elem.css("stroke-dasharray", now1 + ", " + space + ", " + dash_end);
            elem.css("stroke-dashoffset", "-"+dashoffset+"px");
					}
			});
  }
  $(elem).each(function(k,v){
      $(this).find("path").attr('parent_id', $(this).attr('id'));
      var elem_progress = $(this).find("path").last();
      var times = parseInt($(this).attr("data-val")/10)+1;
      progressBar(elem_progress, 0, dash_fill, dash_space, target_duration, times);
  });
});
