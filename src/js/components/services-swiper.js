import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const services_swiper = new Swiper('.services__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    pagination: {
      el: '.services__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.services-button-next',
      prevEl: '.services-button-prev',
    },
    autoplay: true,
    delay: 5000,
    loop: true
  });
})