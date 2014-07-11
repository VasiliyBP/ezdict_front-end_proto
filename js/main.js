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
	$('.slide-btn').on('click',function(){
		$('.slide-btn').removeClass('active');
		$(this).addClass('active');
		$('.carousel-item').addClass('next').stop().fadeOut(400,function(){$(this).removeClass('next')});
		var index = $(this).index();
		$('.carousel-item').eq(index).stop().fadeIn();
	});
});




