function trig(w) {
  if (w <= 414) {
    $(".triangle").css("border-width", `0 0 40px ${w}px`);
    $(".triangle1").css("border-width", `0 ${w}px 40px 0`);
  
    $(".triangle2").css("border-width", `0 0 60px ${w}px`);
  
    $(".triangle3").css("border-width", `0 0 40px ${w}px`);
  } else if (w <= 576) {
    $(".triangle").css("border-width", `0 0 40px ${w}px`);
    $(".triangle1").css("border-width", `0 ${w}px 40px 0`);
  
    $(".triangle2").css("border-width", `0 0 60px ${w}px`);
  
    $(".triangle3").css("border-width", `0 0 70px ${w}px`);
  } else if (w <= 1220) {
    $(".triangle").css("border-width", `0 0 80px ${w}px`);
    $(".triangle1").css("border-width", `0 ${w}px 40px 0`);
  
    $(".triangle2").css("border-width", `0 0 60px ${w}px`);
  
    $(".triangle3").css("border-width", `0 0 70px ${w}px`);
  } else {
    $(".triangle").css("border-width", `0 0 165px ${w}px`);
  
    $(".triangle1").css("border-width", `0 ${w}px 100px 0`);
  
    $(".triangle2").css("border-width", `0 0 230px ${w}px`);
  
    $(".triangle3").css("border-width", `0 0 180px ${w}px`);
  }
}

$(document).ready(function () {
  let w = $(window).width();
  trig(w);
})



$(window).on("resize", function () {
  let w = $(window).width();
  trig(w);
});

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    rows: 2,
    // mobileFirst: true,
    slidesToShow: 5,
    infinite: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          rows: 2,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          rows: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1221,
        settings: {
          rows: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          rows: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 415,
        settings: {
          rows: 1,
          slidesToShow: 1,
        },
      }
    ],
  });
});

let slider = $(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  accessibility: true,
  asNavFor: ".slider-nav",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000
      },
    }],
});

slider.on('afterChange', function(event, slick, currentSlide){
  if( slick.slideCount === currentSlide + 1 ){
    slick.paused = true;
  }
});

$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
});

$(".carousel1").slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(document).ready(function () {
  $(".refs").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$("a[href='#up']").click(function () {
  const _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});

$(".order").click(function () {
  $(".overlay").fadeIn();
  $(".popup").fadeIn();
});

$(".close").on("click", function (event) {
  $(".popup").fadeOut();
  $(".overlay").fadeOut();
});

let orders = document.querySelectorAll(".order");

document.addEventListener("click", function (e) {
  let len = Array.from(orders).filter((item) => item == e.target);
  if (
    e.target != document.querySelector(".popup") &&
    e.target.closest(".popup") == null &&
    len.length != 1
  ) {
    $(".popup").fadeOut();
    $(".overlay").fadeOut();
  }
});

let menu = document.querySelector(".navbar");
let ham = document.querySelector(".hamburger");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  ham.classList.toggle("isactive");
  menu.classList.toggle("showMenu");
}

bWidth = $("body").width();
if (bWidth <= 992) {
  $(".first_img").attr("src", "img/Group 68.png");
} else {
  $(".first_img").attr("src", "img/firstim.png");
}

