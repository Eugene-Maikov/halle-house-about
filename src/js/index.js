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

  // Плеер для видео
  const composeVideo = () => {

    const player = document.querySelectorAll('.youtube-player')
    const link = document.querySelector('.reviews__preview-link')

    if (player && link) {
      const videoId = link.innerText.split('watch?v=')[1]
      const videoThumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`
      const videoThumbnail = document.createElement('img')

      videoThumbnail.src = videoThumbnailUrl
      player.forEach((item) => {
        item.appendChild(videoThumbnail)
      })

      const loadPlayer = (evt) => {
        const target = evt.currentTarget
        const iframe = document.createElement('iframe')
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        iframe.setAttribute('width', 100 + '%')
        iframe.setAttribute('height', 100 + '%')
        iframe.setAttribute('allow', 'autoplay')
        iframe.setAttribute('loading', 'lazy')
        target.classList.remove('btn-dis')
        videoThumbnail.style.display = 'none'

        if (target.children.length) {
          target.replaceChild(iframe, target.firstElementChild)
        } else {
          target.appendChild(iframe)
        }
      }

      const config = {once: true}

      Array.from(player).forEach(function (player) {
        player.addEventListener('click', loadPlayer, config)
      })
    }
  }
  composeVideo()
})