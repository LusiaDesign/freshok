$(function () {
    $('.catalog__btn').on('click', function () {
        $('.catalog__btn, .catalog__list, .catalog__btn-arrow').toggleClass('active');
    });
    $(document).mouseup(function (e) {
        var block = $(".catalog");
        if (!block.is(e.target) &&
            block.has(e.target).length === 0) {
            $('.catalog__btn, .catalog__list, .catalog__btn-arrow').removeClass('active');
        }
    });
    $('.banner__wrapper').slick({
        autoplay: true,
        speed: 1000,
        fade: true,
    });

    var mixer = mixitup('.products');
    Fancybox.bind('[data-fancybox="gallery"]', {
        groupAll: true,
    });

})