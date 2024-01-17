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
  animateCounter('customersCounter', 80)
  animateCounter('projectsCounter', 200)
  animateCounter('partnersCounter', 130)
  animateCounter('currentProjectsCounter', 90)
})

function animateCounter (elementId, targetValue) {
  let currentValue = 0
  const counterElement = document.getElementById(elementId)

  const intervalId = setInterval(function () {
    if (currentValue < targetValue) {
      currentValue++
      counterElement.textContent = currentValue
    } else {
      clearInterval(intervalId)
    }
  }, 10)
}

//  ---------------------------------counter--------------------------------------------
var swiper = new Swiper('.swiper-container', {
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
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})
//  ---------------------------------carousel swiper-------------------------------------------
var acc = document.getElementsByClassName("accordion-1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// ---------------------------------accordeon-------------------------------------------