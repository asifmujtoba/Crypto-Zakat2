$(document).ready(function(){
    $(document).scroll(function() {
		var scroll = $(document).scrollTop();
		if(scroll > 0 && scroll <= 100) {
			$(".header.home").css("opacity", 0.2);
		}
		else if(scroll > 100 && scroll <= 200) {
			$(".header.home").css("opacity", 0.4);	
		}
		else if(scroll > 200 && scroll <= 300) {
			$(".header.home").css("opacity", 0.6);	
		}
		else if(scroll > 300 && scroll <= 400) {
			$(".header.home").css("opacity", 0.8);	
		}
		else if(scroll > 400 && scroll <= 500) {
			$(".header.home").css("opacity", 1);
		}
		else {
			$(".header.home").css("opacity", 1);
		}
	});
});
