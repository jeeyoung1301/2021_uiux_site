// const header = document.querySelector("header");
// let mainMenu = document.querySelectorAll(".menu > li");
// let submenuWrap = document.querySelectorAll(".submenuWrap");

// for (let i = 0; i < mainMenu.length; i++) {
// 	mainMenu[i].addEventListener("mouseover", (e) => {
// 		header.style.height = "160px";
// 		e.currentTarget.submenuWrap.style.display = "block";
// 	});
// 	mainMenu[i].addEventListener("mouseleave", (e) => {
// 		header.style.height = "80px";
// 	});
// }
const slide01 = new Swiper(".slide01", {
	speed: 1000,
	loop: true,
	direction: "horizontal",
	centeredSlides: true,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: "fraction",
	},
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
	// autoplay: {
	// 	delay: 10000,
	// },
	breakpoints: {
		768: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 150,
		},
	},
});
const slide02 = new Swiper(".slide02", {
	speed: 1000,
	loop: true,
	direction: "horizontal",
	centeredSlides: true,
	slidesPerView: 4,
	spaceBetween: 10,
	navigation: {
		prevEl: ".swiper-button-prev-slide02",
		nextEl: ".swiper-button-next-slide02",
	},
});
