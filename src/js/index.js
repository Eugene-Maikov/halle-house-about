document.addEventListener("DOMContentLoaded", () => {

  // Расчет длинны линии
  const calcFeatureLine = () => {
    const featureLine = document.querySelector('.feature__line')

    const featureListHeight = document.querySelector('.feature__list').offsetHeight
    const featureLastItemHeight = document.querySelector('.feature__item:last-child').offsetHeight

    if (window.innerWidth > 1024) {
      featureLine.style.height = (featureListHeight - (featureLastItemHeight / 2)) + 'px'
    } else {
      featureLine.style.height = (featureListHeight - featureLastItemHeight) + 'px'
    }
  }
  calcFeatureLine()
  window.addEventListener("resize", calcFeatureLine)

  // Авто-нумерация
  const featureNumbering = () => {
    const featureItems = document.querySelectorAll('.feature__item')

    featureItems.forEach((item, index) => {
      const number = document.createElement('div')
      number.classList.add('feature__number')
      number.textContent = `${index + 1}`
      item.appendChild(number)
    })
  }
  featureNumbering()

  const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
  })
})