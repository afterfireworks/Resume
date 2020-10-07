


// HiddenClassWhenButtom
$(window).scroll(function(){
    last=$("body").height()-$(window).height()-500
    if($(window).scrollTop()>=last){
    $(".buttonmenu").fadeOut(0);
    } else {
        $(".buttonmenu").fadeIn(300);
    }
});

// $(window).scroll(function () {
//     var scrollVal = $(this).scrollTop();
//     var adscrtop=$("footer").offset(0).top;

//      if(scrollVal>adscrtop){
//       $(".buttonmenu").fadeOut(500);
//    } else {
//        $(".buttonmenu").fadeIn(500);
//    }
 
// });