$(function () {
    $('.catalog-btn').on('click', function () {
        $('.catalog-btn, .catalog__dropdown').toggleClass('active');
    });
    $('.catalog-btn').on('click', function () {
        $(this)('.catalog__dropdown').slideToggle();
    });
    $('.search-btn').on('click', function () {
        $('.search').toggleClass('active');
    });
    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('active');
        $('body').toggleClass('no-scroll');
        $('.basket').removeClass('active');
    });
    $('.basket-btn--nav').on('click', function () {
        $('.basket').toggleClass('active');
        $('body').toggleClass('no-scroll');
        $('.menu').removeClass('active');
    });
    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
        $('.basket').removeClass('active');
        $('body').removeClass('no-scroll');
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
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $(document).mouseup(function (e) {
        var block = $(".catalog, .basket, .menu");
        if (!block.is(e.target) &&
            block.has(e.target).length === 0) {
            $('.catalog-btn, .catalog__dropdown, .basket, .menu').removeClass('active');
            $('body').removeClass('no-scroll');
        }
    });
    //
    $('.product-card__input').styler();

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