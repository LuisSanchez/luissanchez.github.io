"use strict";

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
function getAddress(e) {
  var t = {
    method: "GET",
    redirect: "follow"
  };
  $("#please-wait").show(), $("#json-data-body").hide();
  var a = "Please wait while we wake up the Azure App service and the Heroku Posgres database. Thank you!";
  document.getElementById("please-wait").textContent = a, fetch("https://luissanchez.azurewebsites.net/v1/addresses/?id=2", t).then(function (e) {
    return e.json();
  }).then(function (e) {
    document.getElementById("json-data-body").textContent = JSON.stringify(e, void 0, 2), $("#please-wait").hide(), $("#json-data-body").show();
  })["catch"](function (e) {
    var t = "There has been an error, please try again later.";
    document.getElementById("please-wait").textContent = t, $("#please-wait").show(), $("#json-data-body").hide(), console.log("error", e);
  });
}

function SelectColor(e) {
  oldColor = $(".filter-gradient").attr("data-color"), newColor = $(e).attr("data-color"), oldButton = $('a[id^="Demo"]').attr("data-button"), newButton = $(e).attr("data-button"), $(".filter-gradient").removeClass(oldColor).addClass(newColor).attr("data-color", newColor), $('a[id^="Demo"]').removeClass("btn-" + oldButton).addClass("btn-" + newButton).attr("data-button", newButton), $(".carousel-indicators").removeClass("carousel-indicators-" + oldColor).addClass("carousel-indicators-" + newColor), $(".card").removeClass("card-" + oldColor).addClass("card-" + newColor), $(".selector").removeClass("active"), $(e).addClass("active");
}

function debounce(e, t, a) {
  var o;
  return function () {
    var n = this,
        s = arguments;
    clearTimeout(o), o = setTimeout(function () {
      o = null, a || e.apply(n, s);
    }, t), a && !o && e.apply(n, s);
  };
}

function isElementInViewport(e) {
  var t = $(e),
      a = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") ? "body" : "html",
      o = $(a).scrollTop(),
      n = o + $(window).height(),
      s = Math.round(t.offset().top),
      r = s + t.height();
  return s < n && r > o;
}

var big_image;
$().ready(function () {
  $(".selector").click(function () {
    SelectColor(this);
  });
  var e = 0;
  0 == e && $("body").hasClass("landing-page1"), $("#container-test").click(getAddress), $("#json-data-body").hide();
}), $(window).on("scroll", function () {
  responsive = $(window).width(), responsive >= 768 && parallax();
}), $(".switch").each(function () {
  var e = $(this).parent("li");
  $(this).click(function () {
    if (e.siblings().hasClass("active")) {
      e.addClass("active"), e.siblings().removeClass("active");
      var t = $(this).attr("data-slide"),
          a = $("body").attr("class").split(" ").pop();
      $("body").removeClass(a), $("body").addClass("landing-page" + t);
    }
  });
});
var parallax = debounce(function () {
  no_of_elements = 0, $(".parallax").each(function () {
    var e = $(this);

    if (isElementInViewport(e)) {
      var t = e.offset().top,
          a = $(window).scrollTop(),
          o = e.find(".parallax-background-image"),
          n = (a - t) / 3;
      o.css("margin-top", n + "px");
    }
  });
}, 6);