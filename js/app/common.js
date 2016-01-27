$(function(){

    /* Верхнее меню */
    var navLi = $('.menu-top ul > li > a');

    // Выделение активного пункта при скролле
    $('.block')
        .waypoint( function (dir) {
            var hash = $(this).attr('id');

            if (dir === "down") { //скролл сверху вниз
                menuItemSelect(navLi, hash);
            }
        }, {
            offset: $('header').height()
        })
        .waypoint( function (dir) {
            var hash = $(this).attr('id');

            if (dir === "up") { //скролл снизу вверх
                menuItemSelect(navLi, hash);
            }
        }, {
            offset: function() {
                return - $(this).outerHeight() + $('header').height();
            }
        });

    //ф-я подставляет активному пункту класс selected
    function menuItemSelect(navLi, hash){
        navLi.parent().removeClass('selected');

        $.each( navLi, function() {
            if ( $(this).attr('href').slice(1) === hash ){
                $(this).parent().addClass('selected');
            }
        });
    }

    //плавный скролл
    navLi.click(function (e) {
        e.preventDefault();

        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top,
            offset = $('header').height();

        $('html, body').stop().animate( { scrollTop: destination - offset }, 800 );
    });
    /* /Верхнее меню */


    /* скролл хедера с position:fixed при маленьком размере окна */
    $(document).scroll(function() {
        $( "header" ).css('left', -$(document).scrollLeft());
    });
    /* /скролл хедера с position:fixed при маленьком размере окна */


    /* Прилипающий элемент */
    try {
        $('.sticky-element').waypoint('sticky', {
            offset: $('header').height()
        });
    } catch (err) {

    }
    /* /Прилипающий элемент */

}); // END READY