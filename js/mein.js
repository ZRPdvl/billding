var swiper = new Swiper(".project__bilding--slider", {
  navigation: {
    nextEl: ".bilding__arrow--right",
    prevEl: ".bilding__arrow--left",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    }
  }
});


const menuItem = document.querySelectorAll('.menu__header--list');


menuItem.forEach(element => {
  element.addEventListener('click', function () {
    menuItem.forEach(element => {
      element.classList.remove('menu__header--list--active')
    });

    element.classList.add('menu__header--list--active')
  })
});

const burgerMenu = document.querySelector('.header__burger--item');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active')
  document.querySelector('.menu__header').classList.toggle('active')
})


const poppupMap = document.querySelector('.popup__map');
const btnMap = document.querySelector('.info__row--map');
const closeMap = document.querySelector('.poppup__map--close');

btnMap.addEventListener('click', function (e) {
  e.preventDefault();
  poppupMap.classList.add('active')
  document.body.classList.add('hidden')

})

closeMap.addEventListener('click', function () {
  poppupMap.classList.remove('active')
  document.body.classList.remove('hidden')
})

poppupMap.addEventListener('click', function (e) {
  if (poppupMap.classList.contains('active')) {
    if (e.target !== this.classList.contains('map__item')) {
      poppupMap.classList.remove('active')
      document.body.classList.remove('hidden')
    }
  }
});


const poppupOrder = document.querySelector('.poppup__order');
const btnOrder = document.querySelector('.order__btn');
const closeOrder = document.querySelector('.poppup__order--close');

btnOrder.addEventListener('click', function (e) {
  e.preventDefault();
  poppupOrder.classList.add('active')
  document.body.classList.add('hidden')
})

closeOrder.addEventListener('click', function (e) {
  e.preventDefault();
  poppupOrder.classList.remove('active')
  document.body.classList.remove('hidden')
})


const acardionServicesBtn = document.querySelector('.services__tittel');
const acardionServicesItem = document.querySelector('.services__item');

acardionServicesBtn.addEventListener('click', function(){
  acardionServicesBtn.classList.toggle('active')
  acardionServicesItem.classList.toggle('active')
})

