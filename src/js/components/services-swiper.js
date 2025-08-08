import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const services_swiper = new Swiper('.services__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    pagination: {
      el: '.services__pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.services-button-next',
      prevEl: '.services-button-prev',
    },
    autoplay: {
      delay: 7000,
    },
    loop: true
  });
})