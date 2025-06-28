import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const diplomas_swiper = new Swiper('.diplomas__swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      894: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1164: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1372: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.diplomas-button-prev',
      prevEl: '.diplomas-button-next',
    },
    loop: true
  });
})