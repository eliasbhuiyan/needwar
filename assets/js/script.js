$('.bannerSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button class="heroSlidePrev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="heroSlideNext"><i class="fa-solid fa-chevron-right"></i></button>',
    dots: true
});
$('.newArrival-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    prevArrow: '<button class="heroSlidePrev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="heroSlideNext"><i class="fa-solid fa-chevron-right"></i></button>',
    dots: true
});


// Counter js for every .counter element

$('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
