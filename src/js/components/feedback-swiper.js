import Swiper from 'swiper';
import {  Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const feedback_swiper = new Swiper('.feedback__swiper', {
    modules: [Navigation],
    slidesPerView: 4, 
    navigation: {
      nextEl: '.feedback-button-prev',
      prevEl: '.feedback-button-next',
    },
    loop: true
  });
})