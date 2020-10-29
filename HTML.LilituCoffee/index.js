
function HiddenHeaderAuto(){
    var bodyClass = document.body.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function () {
    var st = this.scrollY;
    if (st < lastScrollY) {
        bodyClass.remove('hide');
    } else {
        bodyClass.add('hide');
    }
    lastScrollY = st;
});
};

HiddenHeaderAuto();


function ScollTo() {
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

};
ScollTo();


function HiddenClassWhenButtom(){
    $(window).scroll(function(){
    last=$("body").height()-$(window).height()-500
    if($(window).scrollTop()>=last){
    $(".buttonmenu").fadeOut(500);
    } else {
        $(".buttonmenu").fadeIn(500);
    }
})
};
HiddenClassWhenButtom();


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


$('.loop').owlCarousel({
    center: true,
    items: 5,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 3
        }
    }
});
$('.nonloop').owlCarousel({
    center: true,
    items: 3,
    loop: false,
    margin:10,
    responsive: {
        600: {
            items: 3
        }
    }
});
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});


L2Dwidget.init({
    model: {
        jsonPath: 'img/Blackcat Tororo/tororo.model.json',
    },
    display: {
        superSample: 2,
        width: 200,
        height: 200,
        position: 'left bottom',
        hOffset: 0,
        vOffset: 0,
    },
    mobile: {
        show: false,
        scale: 0.5,
        motion: true,
    },
    react: {
        opacityDefault: 1,
        opacityOnHover: 0.5,
    },
    dev: {
        border: false
    }
});
