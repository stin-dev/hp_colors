$(function () {
    $("#menu-bars").click(function () {
        var list = $(".header-link-list");

        if (list.hasClass("is-showing")) {
            list.removeClass("is-showing");
            list.hide();
            $("#clear-float").removeClass("clear-float");
        } else {
            list.addClass("is-showing");
            $("#clear-float").addClass("clear-float");
            list.show();
        }
    });
});