$(document).ready(function () {
    $('.header-content').height($(window).height());

    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)
    });

})

function goAbout() {
    var destination = $('#about').offset().top;
    $('body,html').animate({
        scrollTop: destination
    }, 1100);
}