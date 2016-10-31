$(document).ready(function(){
	
	//TITLE ANIMATION//
	$("#title-wrapper").mouseenter(function(){
		if ($(window).width() > 900){		
			$(".d").css("transform", "translateX(116px)");
			$(".a,.m,.e,.s,.a2,.v,.i,.e2,.s2").css("opacity", "1");
			$(".a").css({"transform": "translateX(12px)", "-webkit-transform": "translateX(12px)", "-ms-transform": "translateX(12px)", "-moz-transform": "translateX(12px)"});
			$(".m").css({"transform": "translateX(36px)","-webkit-transform": "translateX(36px)", "-ms-transform": "translateX(36px)", "-moz-transform": "translateX(36px)"});
			$(".e").css({"transform": "translateX(78px)","-webkit-transform": "translateX(78px)", "-ms-transform": "translateX(78px)", "-moz-transform": "translateX(78px)"});
			$(".s").css({"transform": "translateX(103px)", "-webkit-transform": "translateX(103px)", "-ms-transform": "translateX(103px)", "-moz-transform": "translateX(103px)"});
			$(".a2").css({"transform": "translateX(145px)", "-webkit-transform": "translateX(145px)", "-ms-transform": "translateX(145px)", "-moz-transform": "translateX(145px)"});
			$(".v").css({"transform": "translateX(167px)", "-webkit-transform": "translateX(167px)", "-ms-transform": "translateX(167px)", "-moz-transform": "translateX(167px)"});
			$(".i").css({"transform": "translateX(191px)", "-webkit-transform": "translateX(191px)", "-ms-transform": "translateX(191px)", "-moz-transform": "translateX(191px)"});
			$(".e2").css({"transform": "translateX(199px)","-webkit-transform": "translateX(199px)", "-ms-transform": "translateX(199px)", "-moz-transform": "translateX(199px)"});
			$(".s2").css({"transform": "translateX(224px)", "-webkit-transform": "translateX(224px)", "-ms-transform": "translateX(224px)", "-moz-transform": "translateX(224px)"});
		}
	});
	$("#title-wrapper").mouseleave(function(){
		$(".a,.m,.e,.s,.a2,.v,.i,.e2,.s2").css("opacity", "0");
		$(".a,.m,.e,.s,.d,.a2,.v,.i,.e2,.s2").css({"transform": "", "-webkit-transform": "", "-ms-transform": "", "-oz-transform": ""});
	});

	//SOCIAL MEDIA BUTTON ANIMATION//
	$(".contactclick").click(function(){
		$("#desktop-ul").css("opacity", "0");
		if ($(window).width() < 700){
			$("#quick-social").css("transform", "translateX(-50px)");
		} else {
			$("#quick-social").css("transform", "translateX(0)");
		}
	});

	$("#hide-social").click(function(){
		$("#desktop-ul").css("opacity", "1");
		$("#quick-social").css("transform", "translateX(100%)");
	});

	//MOBILE BURGER MENU//
	$(".burger").click(function(){
		$(".burger").toggleClass("is-active");
		$("#mobile-ul").toggleClass("show");
		setTimeout(function(){$("#m1").toggleClass("show");}, 100);
		setTimeout(function(){$("#m2").toggleClass("show");}, 200);
		setTimeout(function(){$("#m3").toggleClass("show");}, 300);
		setTimeout(function(){$("#m4").toggleClass("show");}, 400);
	});

	$("#mobile-ul li").click(function(){
		$(".burger").removeClass("is-active");
		$("#mobile-ul, #m1, #m2, #m3, #m4").removeClass("show");
	})


});