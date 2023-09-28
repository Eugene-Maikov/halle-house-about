"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Расчет длинны линии
  var calcFeatureLine = function calcFeatureLine() {
    var featureLine = document.querySelector('.feature__line');
    var featureListHeight = document.querySelector('.feature__list').offsetHeight;
    var featureLastItemHeight = document.querySelector('.feature__item:last-child').offsetHeight;
    if (window.innerWidth > 1024) {
      featureLine.style.height = featureListHeight - featureLastItemHeight / 2 + 'px';
    } else {
      featureLine.style.height = featureListHeight - featureLastItemHeight + 'px';
    }
  };
  calcFeatureLine();
  window.addEventListener("resize", calcFeatureLine);

  // Авто-нумерация
  var featureNumbering = function featureNumbering() {
    var featureItems = document.querySelectorAll('.feature__item');
    featureItems.forEach(function (item, index) {
      var number = document.createElement('div');
      number.classList.add('feature__number');
      number.textContent = "".concat(index + 1);
      item.appendChild(number);
    });
  };
  featureNumbering();
  var reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev'
    }
  });
});