$(document).ready(function(){
	$('.pop-new-item').on('mouseenter', function(){
			$(this).find('.item-annotation').stop().animate({'height':'100%'},'fast', function(){
				$(this).find('.item-description-wrap').stop().fadeIn('fast').css('display','table');
				});
		}); 
	$('.pop-new-item').on('mouseleave', function(){
		$(this).find('.item-description-wrap').css('display','none');
		$(this).find('.item-annotation').stop().animate({'height':'40px'}, 'fast'); 
	});	

	
	$('#first-slide-btn').on('click',function(){
		$('#second-slide-btn').removeClass('active');
		$('#third-slide-btn').removeClass('active');
		$(this).addClass('active');
		
		$('#first-slide').fadeIn();
		$('#second-slide').addClass('next').fadeOut('slow',function(){$(this).removeClass('next')});
		$('#third-slide').addClass('next').fadeOut('slow',function(){$(this).removeClass('next')});
		 
	});

	$('#second-slide-btn').on('click',function(){
		$('#first-slide-btn').removeClass('active');
		$('#third-slide-btn').removeClass('active');
		$(this).addClass('active');

		$('#second-slide').fadeIn();
		$('#first-slide').addClass('next').fadeOut('slow',function(){$(this).removeClass('next')});
		$('#third-slide').addClass('next').fadeOut('slow',function(){$(this).removeClass('next')});
		 
	});

	$('#third-slide-btn').on('click',function(){
		$('#first-slide-btn').removeClass('active');
		$('#second-slide-btn').removeClass('active');
		$(this).addClass('active');

		$('#third-slide').fadeIn(); 
		$('#first-slide').addClass('next').fadeOut('slow',function(){$(this).removeClass('next')});
		$('#second-slide').addClass('next').fadeOut('slow',function(){$(this).removeClass('next')});
		
	});

});





