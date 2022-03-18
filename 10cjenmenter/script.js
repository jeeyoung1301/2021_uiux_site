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
const swiper01 = new Swiper(".swiper01", {
	speed: 500,
	loop: true,
	direction: "horizontal",
	centeredSlides: true,
	autoplay: 1000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
const swiper02 = new Swiper(".swiper02", {
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
