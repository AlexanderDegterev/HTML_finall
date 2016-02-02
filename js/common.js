/* 
	Common JavaScript library 
*/

common = (function($) {
    var o = {};

	o.sliderInitialization = function() {
		var query = Modernizr.mq('(max-width: 800px)');
		
		if (query) {
			$('#bxslider').bxSlider({
                mode: 'fade',
                captions: false
			});
			
		}

        var slider2 = $('#bxslider2').bxSlider({
            mode: 'fade',
            captions: false,
            auto: true,
            autoControls: true,
            controls: false
        });

        var slider3 = $('#bxslider3').bxSlider({
            slideWidth: 239,
            minSlides: 3,
            maxSlides: 4,
            slideMargin: 30,
            auto: true
        });

        var slider4 = $('#bxslider4').bxSlider({
            slideWidth: 239,
            minSlides: 3,
            maxSlides: 4,
            slideMargin: 30,
            auto: true
        });

        /*Show and hide content under slider*/
        $(".toggle").click(function (e) {
            slider2.stopAuto();
            slider3.stopAuto();
            slider4.stopAuto();
//            $('#bxslider4').bxSlider().stopAuto();
            var X = e.pageX;
//                alert(X);

            var toggleVisible = $("a[name=toggleNav]:visible"); // find all buttons with toggle logic
//                var testL = $("a[name=toggleNav]:visible").length;
            toggleVisible.text('w erom'); // set more label to the buttons

            var contentVisible = $("div[class^='content'][name='partnerContent']:visible");
            var contentVisibleLength = contentVisible.length;
//                alert(contentLength+" - Visible content");
            if (contentVisibleLength != 0) {
                contentVisible.stop().slideUp();
                $("div.triangle").css("display","none");
            }
            var contentIdClick = $(".content" + $(this).attr('id'));
            var linkClickId = $(".toggle#" + $(this).attr('id'));
//                $(this).text(hBlock.is(':visible') ? 'more' : 'Скрыть');
            if (contentIdClick.is(':visible')) {
                linkClickId.text('w erom');
                $(".content" + $(this).attr('id')).stop().slideUp();
                $("div.triangle").css("display","none");
                slider2.startAuto();
                slider3.startAuto();
                slider4.startAuto();
            } else if (contentIdClick.is(':hidden')) {
                linkClickId.text('v ssel');
                $(".content" + $(this).attr('id')).stop().slideDown();
                $("div.triangle").css("margin-left", X+"px").css("display","block");
            }
            return false
        });

	};

    o.hidePhoneNumber = function() {
        $(".mobInput").click(function () {
            var query = Modernizr.mq('(max-width: 360px)');
            if (query) {
                $('.navbar-contact:has(p)').hide();
                return false;
            }
        });
    }

    o.shomPhoneNumber = function() {
        $(document).click(function(){
            $(".navbar-contact:has(p)").slideDown(1000); });
    }

    o.showMobileMenu = function() {
        $(".button_mobile_menu").click(function () {
            $(".menu-mobile").slideToggle();
        });
    }

    o.phoneMask = function () {
//        jQuery(function ($) {
            $("#phone").mask("+375(99) 999-99-99");
//        });
    }

    o.lightBoxInitialization = function () {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })
    }

    return o;
})($);



$(document).ready(function(){	
//	common.showTopNavigation();
	common.sliderInitialization();
    common.hidePhoneNumber();
    common.shomPhoneNumber();
    common.showMobileMenu();
    common.phoneMask();
    common.lightBoxInitialization();
});


$(window).resize(function(){
    $(".menu-mobile").slideUp();
	//alert('Изменился размер окна');
});