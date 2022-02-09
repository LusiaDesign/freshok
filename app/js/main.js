$(function () {
    $('.catalog__btn').on('click', function () {
        $('.catalog__btn, .catalog__dropdown').toggleClass('active');
    });
    $('.basket-btn--nav').on('click', function () {
        $('.basket').toggleClass('active');
        $('body').toggleClass('no-scroll');

    });
    $('.basket__close-btn').on('click', function () {
        $('.basket').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $(document).mouseup(function (e) {
        var block = $(".catalog, .basket");
        if (!block.is(e.target) &&
            block.has(e.target).length === 0) {
            $('.catalog__btn, .catalog__dropdown, .basket').removeClass('active');
            $('body').removeClass('no-scroll');
        }
    });
    $('.banner__wrapper').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="sr-only">Предыдущий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="sr-only">Следующий слайд</span><svg width="19" height="32"><use xlink: href="../images/sprite.svg#icon-arrow-next"></use></svg></button>',
        infinite: false,
        fade: true,
    });
    $('.brands__wrapper').slick({
        autoplay: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1
    });
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