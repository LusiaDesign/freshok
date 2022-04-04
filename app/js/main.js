$(function () {
    $(".stars").rateYo({
        starWidth: '16px',
        starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229654 6.16432C0.0780897 5.9946 0.224746 5.87091 0.401307 5.84529L5.36138 5.12451L7.57965 0.629933C7.65859 0.469933 7.82156 0.368652 7.99996 0.368652C8.1784 0.368652 8.34134 0.469933 8.42031 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4364 15.5776L8 13.2451L3.56373 15.5775C3.40576 15.6606 3.21442 15.6467 3.07008 15.5419C2.92574 15.437 2.85339 15.2593 2.88355 15.0834L3.73095 10.1434L0.141559 6.64478C0.0138092 6.52028 -0.0322227 6.334 0.0229654 6.16432Z"/></svg>',
        readOnly: true
    });

    var timer;
    $(document).ready(resize);

    $(window).resize(function () {
        clearInterval(timer);
        timer = setTimeout(resize, 200);
    });

    function resize() {
        console.log("r");
        if ($(window).width() < 768) {
            $('.products-page__container').removeClass('list');
        }
    }

    $('.catalog-btn').on('click', function () {
        $('.catalog-btn, .catalog__dropdown').toggleClass('active');
    });
    $('.catalog__link').on('click', function () {
        $('.catalog-btn, .catalog__dropdown, .catalog__dropdown--menu, .menu').removeClass('active');
        $('body').removeClass('no-scroll--mobile');
    });
    $('.catalog-btn--menu').on('click', function () {
        $('.catalog__dropdown--menu').toggleClass('active');
    });
    $('.search-btn').on('click', function () {
        $('.search').toggleClass('active');
    });
    $('.menu-btn').on('click', function () {
        $('.menu').addClass('active');
        $('body').addClass('no-scroll--mobile');
        $('body').removeClass('no-scroll');
        $('.basket').removeClass('active');
    });
    $('.menu__link').on('click', function () {
        $('.menu').removeClass('active');
        $('body').removeClass('no-scroll--mobile');
    });
    $('.basket-btn--nav').on('click', function () {
        $('.basket').toggleClass('active');
        $('body').removeClass('no-scroll--mobile');
        $('body').toggleClass('no-scroll');
        var w = $(window).width();
        if (w <= 768) {
            $('body').removeClass('no-scroll');
            $('body').addClass('no-scroll--mobile');
        }
    });
    $('.close-btn').on('click', function () {
        $('body').removeClass('no-scroll');
        $('body').removeClass('no-scroll--mobile');
        $('.menu').removeClass('active');
        $('.basket').removeClass('active');
        $('.products-page__filters').removeClass('active');
    });
    $('.products-page__toggle-btn').on('click', function () {
        $('.products-page__toggle-btn').removeClass('active');
        $(this).addClass('active');
    });
    $('.btn-list').on('click', function () {
        $('.products-page__container').addClass('list');
    });
    $('.btn-grid').on('click', function () {
        $('.products-page__container').removeClass('list');
    });
    $('.pagination__link').on('click', function () {
        $('.pagination__link').removeClass('active');
        $(this).addClass('active');
    });
    $('.products-page__filter-btn').on('click', function () {
        $('.products-page__filters').toggleClass('active');
        $('body').toggleClass('no-scroll--mobile');
    });
    $('.filters__title').on('click', function () {
        $(this).siblings().slideToggle();
        $(this).toggleClass('active');
    });
    $('.product-tabs__link').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__link').removeClass('active');
        $(this).addClass('active');
        $('.product-tabs__item').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });
    $('.rating-stars__label').on('click', function () {
        $('.rating-stars__label').removeClass('checked');
        $(this).addClass('checked');
    });
    $(window).scroll(function () {
        $('.search').removeClass('active');
        $('.catalog-btn, .catalog__dropdown').removeClass('active');
    });

    $('.banner__wrapper').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="sr-only">Предыдущий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="sr-only">Следующий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-next"></use></svg></button>',
        infinite: false,
        fade: true,
        responsive: [{
            breakpoint: 1550,
            settings: {
                arrows: false,
                dots: true,
                autoplay: true,
                speed: 1000,
            }
        }]
    });
    $('.brands__wrapper').slick({
        autoplay: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1250,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('.product-card__items--product-img').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="sr-only">Предыдущий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="sr-only">Следующий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-next"></use></svg></button>',
        infinite: false,
        fade: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                autoplay: true,
                speed: 1000
            }
        }]
    });
    $('.products-interest__content').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="sr-only">Предыдущий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="sr-only">Следующий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-next"></use></svg></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1285,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 1000
                }
            },
            {
                breakpoint: 374,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
    $(document).mouseup(function (e) {
        var block = $('.catalog');
        if (!block.is(e.target) &&
            block.has(e.target).length === 0) {
            $('.catalog-btn, .catalog__dropdown').removeClass('active');
        }
    });

    $('.product-card__input').styler();
    $('.products-page__sort').styler();

    var $range = $(".filters__range"),
        $inputFrom = $(".filters__from"),
        $inputTo = $(".filters__to"),
        instance,
        min = 0,
        max = 1000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: 100,
        to: 1000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
})