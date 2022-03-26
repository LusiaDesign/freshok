$(function () {
    $(".stars").rateYo({
        starWidth: "16px"
    });
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
        if (w <= 576) {
            $('body').removeClass('no-scroll--mobile');
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
    $('.product-tabs__link').on('click', function () {
        $('.product-tabs__link').removeClass('active');
        $(this).addClass('active');
        $('.product-tabs__item').removeClass('active');
        $($(this).attr('href')).addClass('active');
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
    $('.product-card__items').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="sr-only">Предыдущий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="sr-only">Следующий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-next"></use></svg></button>',
        infinite: false,
        fade: true,
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