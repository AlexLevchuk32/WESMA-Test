import '../scss/style.scss';
import Swiper from 'swiper/bundle';

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
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
