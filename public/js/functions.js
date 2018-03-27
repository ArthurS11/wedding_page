$(document).ready(function(){
	//icon hover
	$('.icon span').hide();
	   $(".icon").hover(function(){
        $(this).children().eq(1).css("background-color", "rgba(0,0,0,1)");
        $(this).children().eq(1).css("margin-left", "20px");
        }, function(){
        $(this).children().eq(1).css("background-color", "rgba(0,0,0,0)");
         $(this).children().eq(1).css("margin-left", "5px");
        });
	 
	   console.log($(window).scrollTop());
	  //img parallax
	  $('#first').parallax({imageSrc:'img/16.jpg'});
	  $("#third").parallax({imageSrc:'img/12.jpg'});
	   $("#fifth").parallax({imageSrc:'img/5.jpg'});
	   //active icon
	  $('.icon').click(function(e){
	  	 e.preventDefault();
   		 $('.icon div').removeClass('active');
   		 $(this).children().eq(1).addClass('active');
        });

	  //icons  changing scrolling
	  
	  var firstChapter=$('#first').height();
	  var secondChapter=$('#second').height()+firstChapter;
	  var thirdChapter=$('#third').height()+secondChapter;
	  var fourthChapter=thirdChapter+400;
	  var fifthChapter=fourthChapter+300;
	  setInterval(function(){
	 	var windowTop=$(window).scrollTop();

	 	if(windowTop<300){
	 		$("#greatings").fadeIn(2000);
	 	}else{
	 		$("#greatings").fadeOut();
	 	}

	 	if(windowTop<firstChapter){
	 		$('.icon div').removeClass('active');
	 		$('.icon').eq(0).children().eq(1).addClass('active');
	 		$('.icon span').hide();
	 		$('.icon').eq(0).children().eq(0).show();
	 	}else if(windowTop<secondChapter){
	 		$('.icon div').removeClass('active');
	 		$('.icon').eq(1).children().eq(1).addClass('active');
	 		$('.icon span').hide();
	 		$('.icon').eq(1).children().eq(0).show();
	 	}else if(windowTop<thirdChapter){
	 		$('.icon div').removeClass('active');
	 		$('.icon').eq(2).children().eq(1).addClass('active');
	 		$('.icon span').hide();
	 		$('.icon').eq(2).children().eq(0).show();
	 	}else if(windowTop<fourthChapter){
	 		$('.icon div').removeClass('active');
	 		$('.icon').eq(3).children().eq(1).addClass('active');
	 		$('.icon span').hide();
	 		$('.icon').eq(3).children().eq(0).show();
	 	}else if(windowTop<fifthChapter){
	 		$('.icon div').removeClass('active');
	 		$('.icon').eq(4).children().eq(1).addClass('active');
	 		$('.icon span').hide();
	 		$('.icon').eq(4).children().eq(0).show();
	 	}

	 },100);

	 window.sr=ScrollReveal();
		sr.reveal('.navbar a',{
			duration: 2000,
			origin:'right',
		});
		sr.reveal('.img-section',{
			duration: 2000,
			origin:'left',
			distance:'250px',
			viewFactor:0.2
		});
		// sr.reveal('#story',{
		// 	duration: 2000,
		// 	origin:'right',
		// 	distance:'200px',
		// 	viewFactor:0.3
		// });
		sr.reveal('#weddinginfo',{
			duration: 1500,
			origin:'top',
			distance:'300px',
			viewFactor:0.5
		});
		sr.reveal('#contact',{
			duration: 2000,
			origin:'bottom',
			distance:'150px',
			viewFactor:0.2
		});
});