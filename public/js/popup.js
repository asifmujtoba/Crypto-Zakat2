$(document).ready(function(){

	function vid_popup(){
		if($(".play-movie-btn").length > 0)
			$(".play-movie-btn").fancybox({
				iframe : {
					css : {
						width : '700px',
						height : '393px'
					},
					closeTpl : '<button data-fancybox-close class=""><i class="icons-icon-close"></i></button>'
				}
			});
		return false;
	}

	vid_popup();
})
