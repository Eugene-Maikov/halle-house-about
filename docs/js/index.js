"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log('Index scripts');
  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});