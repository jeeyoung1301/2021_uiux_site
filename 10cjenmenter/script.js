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

const familySite = document.querySelector(".familySite > p");
const familyList = document.querySelector(".familySiteList");

familySite.addEventListener("click", (e) => {
	familyList.style.display = "block";
});
