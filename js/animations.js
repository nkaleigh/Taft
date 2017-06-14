$(document).ready(function () {
    var navOffSet = $(".navigation-wrapper").offset().top;

    $(".navigation-wrapper").wrap('<div class="navigation-wrapper-placeholder"></div>')
    $(".navigation-wrapper-placeholder").height($(".navigation-wrapper").outerHeight());

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos >= navOffSet) {
            $(".navigation-wrapper").addClass("fixed");
        } else {
            $(".navigation-wrapper").removeClass("fixed");
        }
    });
});