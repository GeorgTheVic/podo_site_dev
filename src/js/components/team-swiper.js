import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const team_swiper = new Swiper('.team-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    pagination: {
      el: '.team__pagination',
      clickable: true,
    },
    delay: 15000,
    autoplay: true,
    loop: true
  });
})