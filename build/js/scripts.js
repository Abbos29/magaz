// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)



// Product swiper

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 20
        },

        720: {
            slidesPerView: 5,
            spaceBetween: 20
        },
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    thumbs: {
        swiper: swiper,
    },

    breakpoints: {

    }

});


const swiperReviews = new Swiper('.reviews__swiper', {
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },


    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    720: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    900: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 30
    },
  }
});

const swiperReviewList = new Swiper('.review-list__swiper', {
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },


    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    720: {
        slidesPerView: 4,
        spaceBetween: 20
    },
    1200: {
        slidesPerView: 6,
        spaceBetween: 20
    },
  }
});
