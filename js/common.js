/* 
	Common JavaScript library 
*/

common = (function($) {
    var o = {};

//    $("document").ready(function () {
//        $(".toggle").click(function () {
//            $(".content" + $(this).attr('id')).stop().slideToggle("slow");
////                            $(".tabs").css("min-height", "850px")
//
//            return false
//        });
//
//    });

	// Final version
	o.showTopNavigation = function(){
		var $wrapper = $('.hidden-block-wrapper');
		var $button = $wrapper.find('> .show-block');		
        
		$button.click(function(){
			var $currentBlock = $(this).find('+ .hidden-block');			
			
			if ($currentBlock.hasClass('visible')) {				
				panelToggle($currentBlock); // Current block is hiding
			} else {				
				var $activeBlock = $wrapper.find('.visible');
				var isActiveBlock = $activeBlock.size() > 0;
				
				if (isActiveBlock) {
					panelToggle($activeBlock); // Active block is hiding
				}
				
				panelToggle($currentBlock); // Current block is appearing
			}			
        });
		
		function panelToggle(panel){
			var button = panel.parent().find('> .show-block');
			
			panel.slideToggle(function(){
				panel.toggleClass('visible').removeAttr('style');
			});
			button.toggleClass('active');
		}
    };	
	
	
	
	// I
	o.sliderInitialization = function() {
		var query = Modernizr.mq('(max-width: 800px)');
		
		if (query) {
			$('#bxslider').bxSlider({
                mode: 'fade',
                captions: false
			});
			
			$('.bxslider2').bxSlider({
			  mode: 'fade',
			  captions: false
			});	
		}

        $('#bxslider2').bxSlider({
            mode: 'fade',
            captions: false,
            auto: true,
            autoControls: true,
            controls: false
        });

        $('#bxslider3').bxSlider({
            slideWidth: 210,
            minSlides: 3,
            maxSlides: 4,
            slideMargin: 30,
            auto:true
        });


	};
    
	
    
    return o;
})($);



$(document).ready(function(){	
	common.showTopNavigation();
	common.sliderInitialization();
});


$(window).resize(function(){	
	//alert('Изменился размер окна');
});