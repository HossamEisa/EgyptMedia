var header = document.getElementById("innerHeader");
document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (header != null) {
      document.getElementsByTagName("body")[0].style.paddingTop =
        header.offsetHeight + 40 + "px";
    }
  },
  false
);
AOS.init({
  disable: "mobile",
  once: true,
});

// hero-carousel

var heroCarousel = new Swiper(".hero-carousel", {
  speed: 1400,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 5000,
  // },
  // autoHeight: true,

  // loop: true,
  pagination: {
    el: ".hero-section .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-section .swiper-button-next",
    prevEl: ".hero-section .swiper-button-prev",
  },
});

// Init  speakerscarousel Page  carousel
var speakerscarousel = new Swiper(".speakers-carousel", {
  speed: 800,
  // autoplay: {
  //   delay: 5000,
  // },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  // loop: true,
  pagination: {
    el: ".speakers-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".speakers .swiper-button-next",
    prevEl: ".speakers .swiper-button-prev",
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
  },
});
// Init  testimonialscarousel Page  carousel
var testimonialscarousel = new Swiper(".testimonials-carousel", {
  speed: 1200,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 0,
  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
});

// Init  mediaPartners Page  carousel
var mediaPartners = new Swiper(".media-partners-carousel ", {
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".media-partners-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 50,
      pagination: false,
      navigation: {
        nextEl: ".media-partners-carousel .swiper-button-next",
        prevEl: ".media-partners-carousel .swiper-button-prev",
      },
    },
  },
});

// Init  newsCarousel Page  carousel
var newsCarousel = new Swiper(".news-carousel ", {
  speed: 800,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  // loop: true,
  pagination: {
    el: ".news .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news .swiper-button-next",
    prevEl: ".news .swiper-button-prev",
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 32,
      slidesPerGroup: 1,
    },
  },
});
