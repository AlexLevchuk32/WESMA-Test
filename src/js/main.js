import '../scss/style.scss';
import Swiper from 'swiper/bundle';

window.addEventListener('DOMContentLoaded', () => {
	//=========================================================================================================================================================
	// Swiper
	const ourCasesSlider = new Swiper('.our-cases-slider', {
		loop: true,
		// autoplay: {
		// 	delay: 5000,
		// },
		keyboard: {
			enable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
