$(document).ready(function(){

    $("#lang_switcher").on("change", function() {
        var url = $(this).val();
        window.location = url;
    })
    
});