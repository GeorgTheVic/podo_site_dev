import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const diplomas_swiper = new Swiper('.diplomas__swiper', {
    modules: [Navigation],
    slidesPerView: 4, 
    navigation: {
      nextEl: '.diplomas-button-prev',
      prevEl: '.diplomas-button-next',
    },
    loop: true
  });
})