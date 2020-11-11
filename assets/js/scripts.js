 $(document).ready(function(){

 	// headline js
	$('.banner h1').animatedHeadline({ 
		  animationType: "rotate-1", 
		  animationDelay: 2500, 
		  barAnimationDelay: 3800, 
		  lettersDelay: 50, 
		  typeLettersDelay: 150, 
		  selectionDuration: 500, 
		  typeAnimationDelay: 1300, 
		  revealDuration: 600, 
		  revealAnimationDelay: 1500 
	});

	// praticle js
	$(".banner-area").particles({
		  amount:40,
		  duration:{random:true},
		  speed:{speed:3},
		  layout:"after",
		  color:{color:{w:200,y:100,b:200},random:true,min:{r:100,g:100,b:0}},
		});

	// counter up
	$('.single-counter p span').counterUp({
		time:2000
	});

	// magnific Popup
	// $('.overlay-port').magnificPopup({
	// 	  delegate: 'a', 
	// 	  type: 'image' ,
	// 	  gallery: {
 //  			enabled: true, 
 //  		}
	// 	});

	 // ==========progress bar===========
	$('.skill-prg1').LineProgressbar({
		  percentage: 90,
		  fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg2').LineProgressbar({
		  percentage: 85,
		  fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		 width: '80%'
		});

	$('.skill-prg3').LineProgressbar({
		  percentage: 70,
		  fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg4').LineProgressbar({
		  percentage: 60,
		  fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg5').LineProgressbar({
		  percentage: 90,
		 fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg6').LineProgressbar({
		  percentage: 75,
		  fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		 width: '80%'
		});

	$('.skill-prg7').LineProgressbar({
		  percentage: 60,
		  fillBackgroundColor: '#AE812A',
		  backgroundColor: '#000',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg8').LineProgressbar({
	  percentage: 85,
	 fillBackgroundColor: '#AE812A',
	  backgroundColor: '#000',
	  radius: '0px',
	  height: '5px',
	  width: '80%'
	});

	// testimonials carousel
	$(".testimonials").owlCarousel({
	  	items:1,
	  	loop:true, 
	  	nav:false,
	  	dots:true, 
	  	autoplay:true,  
	  });


	// hoverdir
	$(' .portfolio-item ').each( function() { $(this).hoverdir(); } );

	// aos animation
	AOS.init();


	// team carousel
	$(".team").owlCarousel({
	  	// items:3,
	  	loop:true, 
	  	nav:true,
	  	dots:false, 
	  	autoplay:true,  
	  	center:true,
	  	responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        576:{
	            items:1,
	            nav:true
	        },
	        991:{
	            items:3,
	            nav:true, 
	        }
	    }
	});



	// mobile menu 
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	})

	// menu section slide 
	$('.menu ul li a').click(function(){
 		$('html,body').animate({
 			scrollTop:$($(this).attr('href')).offset().top
 		},1000); 
 		return false;
 	})

 	// scroll btn
 	$('.scroll-btn').click(function(){
 		 $('html,body').animate({
 		 	scrollTop:0
 		 },1000)
 		return false;
 	});
   


 })




 $(document).ready(function(){
	var mixer = mixitup('.portfolio');

	var mixer = mixitup(portfolio, {
	    animation: {
        nudge: false
    }
});
})

 $(window).scroll(function(){
 		var value=$(this).scrollTop(); 

 		if(value>500){
 		 	$('.scroll-btn').fadeIn();
 		 }else{
 		 	$('.scroll-btn').fadeOut();
 		 }

 		 if(value>200){
 		 	$('.header-area').addClass('FixedHeader');
		 }else{
		 	$('.header-area').removeClass('FixedHeader')
		 }
 	})