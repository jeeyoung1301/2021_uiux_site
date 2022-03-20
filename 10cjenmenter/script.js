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
	speed: 500,
	loop: true,
	direction: "horizontal",
	centeredSlides: true,
	spaceBetween: 20,
	slidesPerView: 3,
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
	// 		delay: 10000,
	// 	},
});
const slide02 = new Swiper(".slide02", {
	speed: 1000,
	loop: true,
	direction: "horizontal",
	centeredSlides: true,
	slidesPerView: 4,
	spaceBetween: 5,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
});

const familySite = document.querySelector(".familySite > p");
const familyList = document.querySelector(".familySiteList");

familySite.addEventListener("click", (e) => {
	familyList.style.display = "block";
});
