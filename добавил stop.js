$(document).ready(function(){
 	$('.pop-new-item').on('mouseenter', function(){
 		$(this).find('.item-header').stop().fadeOut('fast');
 		$(this).find('.item-annotation').stop().animate({'height':'100%'},'fast', function(){
 			$(this).find('.item-description-wrap').css('display','table').stop().fadeIn();
 		});	
 	}); 
	
 	$('.pop-new-item').on('mouseleave', function(){
 		$(this).find('.item-description-wrap').css('display','none');
 		$(this).find('.item-annotation').stop().animate({'height':'40px'}, 'fast', function(){
 			$(this).find('.item-header').stop().fadeIn('fast');
 		}); 
 	});	
 });