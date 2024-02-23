var mybutton = document.getElementById('myBtn')
window.onscroll = function () {
  scrollFunction()
}
function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}
function topFunction () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

//  ---------------------------------to top--------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var pageElement = document.querySelector('#home1,#home4,#about-us')
  if (pageElement) {
    animateCounter('customersCounter', 80)
    animateCounter('projectsCounter', 200)
    animateCounter('partnersCounter', 130)
    animateCounter('currentProjectsCounter', 90)
  }
})

function animateCounter (elementId, targetValue) {
  var currentValue = 0
  var counterElement = document.getElementById(elementId)

  var intervalId = setInterval(function () {
    if (currentValue < targetValue) {
      currentValue++
      counterElement.textContent = currentValue
    } else {
      clearInterval(intervalId)
    }
  }, 10)
}
// --------------------------------counter up------------------------------------------

var pages = ['home1', 'home2', 'home3','home4']

// برای هر نام صفحه در آرایه
for (var i = 0; i < pages.length; i++) {
  var pageName = pages[i]
  // انتخاب عنصر صفحه با استفاده از نام صفحه
  var pageElement = document.querySelector('#' + pageName)
  // اگر عنصر صفحه موجود بود
  if (pageElement) {
    // یافتن همه عناصر .swiper-container در صفحه
    var swiperElements = pageElement.querySelectorAll('.swiper-container')
    // برای هر عنصر .swiper-container در صفحه
    swiperElements.forEach(function (swiperElement) {
      // ایجاد یک نمونه از Swiper برای عنصر .swiper-container موجود در صفحه
      var swiper = new Swiper(swiperElement, {
        spaceBetween: 10,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      })
    })
  }
}

// -----------------------------------swiper slider1-----------------------------------
var pages = ['home2','home3','home4']

// برای هر نام صفحه در آرایه
for (var i = 0; i < pages.length; i++) {
  var pageName = pages[i]
  // انتخاب عنصر صفحه با استفاده از نام صفحه
  var pageElement = document.querySelector('#' + pageName)
  // اگر عنصر صفحه موجود بود
  if (pageElement) {
    // یافتن همه عناصر .swiper-container در صفحه
    var swiperElements = pageElement.querySelectorAll('.swiper-container-2')
    // برای هر عنصر .swiper-container در صفحه
    swiperElements.forEach(function (swiperElement) {
      // ایجاد یک نمونه از Swiper برای عنصر .swiper-container موجود در صفحه
      var swiper = new Swiper(swiperElement, {
        spaceBetween: 10,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      })
    })
  }
}

//  --------------------------------- swiper slider2-------------------------------------------

var pages = ['home4']

// برای هر نام صفحه در آرایه
for (var i = 0; i < pages.length; i++) {
  var pageName = pages[i]
  // انتخاب عنصر صفحه با استفاده از نام صفحه
  var pageElement = document.querySelector('#' + pageName)
  // اگر عنصر صفحه موجود بود
  if (pageElement) {
    // یافتن همه عناصر .swiper-container در صفحه
    var swiperElements = pageElement.querySelectorAll('.swiper-container-3')
    // برای هر عنصر .swiper-container در صفحه
    swiperElements.forEach(function (swiperElement) {
      // ایجاد یک نمونه از Swiper برای عنصر .swiper-container موجود در صفحه
      var swiper = new Swiper(swiperElement, {
        spaceBetween: 10,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      })
    })
  }
}
//  --------------------------------- swiper slider3-------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var pageElement = document.querySelector('#questions')

  if (pageElement) {
    var acc = document.getElementsByClassName('accordion-1')
    var i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active-questions')

        var panel = this.nextElementSibling

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }
})

// ---------------------------------accordeon-------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var pageElement = document.querySelector('#product-detail')

  if (pageElement) {
    // گرفتن المان‌های دکمه و کانتر خرید از طریق شناسه‌های آنها

    var increaseButton = document.getElementById('increase')

    var decreaseButton = document.getElementById('decrease')

    var counterElement = document.getElementById('counter')

    // تعریف متغیر برای نگه‌داری مقدار کانتر خرید

    var counterValue = 0

    // تابعی برای افزایش مقدار کانتر خرید

    function increaseCounter () {
      counterValue++

      counterElement.innerText = counterValue
    }

    // تابعی برای کاهش مقدار کانتر خرید

    function decreaseCounter () {
      if (counterValue > 0) {
        counterValue--

        counterElement.innerText = counterValue
      }
    }

    // افزودن رویداد کلیک به دکمه های + و -

    increaseButton.addEventListener('click', increaseCounter)

    decreaseButton.addEventListener('click', decreaseCounter)
  }
})

// --------------------------------product add------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var pageElement = document.querySelector('#basket') // تغییر به کلاس یا شناسه عنصری که برای صفحه استفاده می کنید

  if (pageElement) {
    // گرفتن المان‌های دکمه و کانتر خرید از طریق کلاس‌ها

    var increaseButtons = document.querySelectorAll('#increase')

    var decreaseButtons = document.querySelectorAll('#decrease')

    var counterElements = document.querySelectorAll('#counter')

    // تابع افزایش مقدار کانتر خرید

    function increaseCounter (index) {
      counterValues[index]++

      counterElements[index].innerText = counterValues[index]
    }

    // تابع کاهش مقدار کانتر خرید

    function decreaseCounter (index) {
      if (counterValues[index] > 0) {
        counterValues[index]--

        counterElements[index].innerText = counterValues[index]
      }
    }

    // افزودن رویداد کلیک به دکمه‌های + و -

    increaseButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        increaseCounter(index)
      })
    })

    decreaseButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        decreaseCounter(index)
      })
    })

    // تعریف متغیر برای نگه‌داری مقدار کانتر خرید برای هر محصول

    var counterValues = [0, 0, 0, 0]
  }
})

// --------------------------------product add basket------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var pageElement = document.querySelector('#coming-soon') // تغییر به کلاس یا شناسه عنصری که برای صفحه استفاده می کنید

  if (pageElement) {
    var days = 875

    var hours = 12

    var minutes = 50

    var seconds = 30

    var totalSeconds =
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds

    var countdownInterval = setInterval(function () {
      var daysLeft = Math.floor(totalSeconds / (24 * 60 * 60))

      var hoursLeft = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))

      var minutesLeft = Math.floor((totalSeconds % (60 * 60)) / 60)

      var secondsLeft = Math.floor(totalSeconds % 60)

      document.getElementById('days').getElementsByTagName('p')[0].textContent =
        daysLeft

      document
        .getElementById('hours')
        .getElementsByTagName('p')[0].textContent = hoursLeft

      document
        .getElementById('minutes')
        .getElementsByTagName('p')[0].textContent = minutesLeft

      document
        .getElementById('seconds')
        .getElementsByTagName('p')[0].textContent = secondsLeft

      totalSeconds--

      if (totalSeconds < 0) {
        clearInterval(countdownInterval)

        document.getElementById('countdown').textContent = 'زمان به پایان رسید!'
      }
    }, 1000)
  }
})

// ---------------------------------timer------------------------------------------
