/*!

 =========================================================
 * Awesome Landing Page - v1.2.2
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/awesome-landing-page
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/awesome-landing-page/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
var big_image;
$().ready(function () {
    $('.selector').click(function () {
        SelectColor(this);
    });
    var selectCol = 0;
    if (selectCol == 0) {
        if ($('body').hasClass('landing-page1')) {

        }
    }
    $('#container-test').click(getAddress);
    $('#json-data-body').hide();
});

function getAddress(e) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    $('#please-wait').show();
    $('#json-data-body').hide();
    let x = 'Please wait while we wake up the Azure App service and the Heroku Posgres database. Thank you!';
    document.getElementById("please-wait").textContent = x;

    fetch("https://luissanchez.azurewebsites.net/v1/addresses/?id=2", requestOptions)
        .then(response => response.json())
        .then(result => {
            document.getElementById("json-data-body").textContent = JSON.stringify(result, undefined, 2);
            $('#please-wait').hide();
            $('#json-data-body').show();
        })
        .catch((error) => {
            let x = 'There has been an error, please try again later.'
            document.getElementById("please-wait").textContent = x;
            $('#please-wait').show();
            $('#json-data-body').hide();
            console.log('error', error);
        });
}

$(window).on('scroll', function () {
    responsive = $(window).width();
    if (responsive >= 768) {
        parallax();
    }
});

function SelectColor(btn) {
    oldColor = $('.filter-gradient').attr('data-color');
    newColor = $(btn).attr('data-color');

    oldButton = $('a[id^="Demo"]').attr('data-button');
    newButton = $(btn).attr('data-button');

    $('.filter-gradient').removeClass(oldColor).addClass(newColor).attr('data-color', newColor);

    $('a[id^="Demo"]').removeClass("btn-" + oldButton).addClass("btn-" + newButton).attr('data-button', newButton);

    $('.carousel-indicators').removeClass("carousel-indicators-" + oldColor).addClass("carousel-indicators-" + newColor);

    $('.card').removeClass("card-" + oldColor).addClass("card-" + newColor);

    $('.selector').removeClass('active');
    $(btn).addClass('active');
}

$('.switch').each(function () {
    var selector = $(this).parent('li')
    $(this).click(function () {
        if (selector.siblings().hasClass('active')) {
            selector.addClass('active');
            selector.siblings().removeClass('active');
            var slide = $(this).attr('data-slide')
            var lastClass = $('body').attr('class').split(' ').pop();
            $('body').removeClass(lastClass);
            $('body').addClass('landing-page' + slide);
        }
    });
});

var parallax = debounce(function () {
    no_of_elements = 0;
    $('.parallax').each(function () {
        var $elem = $(this);

        if (isElementInViewport($elem)) {
            var parent_top = $elem.offset().top;
            var window_bottom = $(window).scrollTop();
            var $image = $elem.find('.parallax-background-image')
            var $oVal = ((window_bottom - parent_top) / 3);
            $image.css('margin-top', $oVal + 'px');
        }
    });
}, 6)

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}