$(function() {
    $("#tabs-nav a").click(function() {
       $("#tabs-nav a").removeClass("tabs-menu-active");
       $(this).addClass("tabs-menu-active");
       $(".tabs-panel").removeClass("animated fadeIn").hide();
       var tab_id = $(this).attr("href");
       $(tab_id).addClass("animated fadeIn").show();
       return false;
    });
  });

       
