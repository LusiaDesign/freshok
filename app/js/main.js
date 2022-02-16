$(function () {
    $('.catalog-btn').on('click', function () {
        $('.catalog-btn, .catalog__dropdown').toggleClass('active');
    });
    $('.catalog-btn--menu').on('click', function () {
        $('.catalog__dropdown--menu').toggleClass('active');
    });
    $('.search-btn').on('click', function () {
        $('.search').toggleClass('active');
    });
    $('.menu-btn').on('click', function () {
        $('.menu').addClass('active');
        $('body').addClass('no-scroll--menu');
        $('.basket').removeClass('active');
        $('body').removeClass('no-scroll');
    });
    $('.basket-btn--nav').on('click', function () {
        $('.basket').toggleClass('active');
        $('.menu').removeClass('active');
        $('body').removeClass('no-scroll--menu');
        $('body').toggleClass('no-scroll');
        var w = $(window).width();
        if (w <= 576) {
            $('body').removeClass('no-scroll');
            $('body').toggleClass('no-scroll--mobile');
        }
    });
    $('.close-btn').on('click', function () {
        $('body').removeClass('no-scroll');
        $('body').removeClass('no-scroll--menu');
        $('body').removeClass('no-scroll--mobile');
        $('.menu').removeClass('active');
        $('.basket').removeClass('active');
    });
    $('.products-page__filter-btn').on('click', function () {
        $('.products-page__filter-btn').removeClass('active');
        $(this).addClass('active');
    });
    $('.btn-list').on('click', function () {
        $('.products-page__container, .product-card').toggleClass('list');
    });
    $('.btn-grid').on('click', function () {
        $('.products-page__container, .product-card').removeClass('list');
    });
    $('.pagination__link').on('click', function () {
        $('.pagination__link').removeClass('active');
        $(this).addClass('active');
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
    $(document).mouseup(function (e) {
        var block = $(".catalog");
        if (!block.is(e.target) &&
            block.has(e.target).length === 0) {
            $('.catalog-btn, .catalog__dropdown').removeClass('active');
        }
    });
    $('.product-card__input').styler();
    $('.products-page__filter-sort').styler();
    $('.filters__pol').ionRangeSlider({
        type: "double"
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