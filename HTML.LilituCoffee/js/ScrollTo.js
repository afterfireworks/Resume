


// scoll to
$(document).ready(function () {
    $.extend({
        'goAnchor': function (to, time) {
            $obj = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
            $($obj).animate({scrollTop: to}, time);
        }
    });
    $('#floatbutton1').click(function () {
        $.goAnchor($('#focustop').offset().top-100, 1000);
    });
    $('#gotobuttom').click(function () {
        $.goAnchor($('#target').offset().top, 1000);
    });

});