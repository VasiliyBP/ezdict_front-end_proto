$(document).ready(function(){
	$('.pop-new-item').on('mouseenter', function(){
			$(this).find('.item-annotation').animate({'height':'100%'},'fast', function(){
				$(this).find('.item-description-wrap').fadeIn('fast').css('display','table');
				});
			
		}); 
	
	$('.pop-new-item').on('mouseleave', function(){
		$(this).find('.item-description-wrap').css('display','none');
		$(this).find('.item-annotation').animate({'height':'40px'}, 'fast', function(){
			$(this).find('.item-header').fadeIn('fast');
		}); 
	});	
});





