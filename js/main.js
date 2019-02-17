$(document).ready(function () {
    $('.header-content').height($(window).height());

    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)
    });

    $('.my-carousel').carousel().swipeCarousel({
        // low, medium or high
        sensitivity: 'low'
    });

    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 4000);
    });
})

function goAbout() {
    var destination = $('#about').offset().top;
    $('body,html').animate({
        scrollTop: destination
    }, 1100);
}