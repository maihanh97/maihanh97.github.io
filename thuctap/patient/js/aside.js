$(document).ready(function(){
    $(".btn-click-right").click(function(){
        $(".contact-info").css({
            "display":"none"
        });
        $(".btn-click-left").show();
    })

    $(".btn-click-left").click(function(){
        $(".contact-info").css({
            "display":"block"
        });
        $(".btn-click-right").show();
        $(".btn-click-left").hide();
    })

    

});