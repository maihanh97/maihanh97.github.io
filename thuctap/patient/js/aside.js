$(document).ready(function(){
    $(".btn-click-right").click(function(){
        $(".expand").css({
            "display":"none"
        });
        $(".btn-click-left").show();
    })

    $(".btn-click-left").click(function(){
        $(".expand").css({
            "display":"block"
        });
        $(".btn-click-right").show();
        $(".btn-click-left").hide();
    })

    

});