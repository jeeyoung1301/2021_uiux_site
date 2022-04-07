//header control
const openSubmenu = document.querySelectorAll("header nav > ul > li"),
	rotateI = document.querySelectorAll("header nav > ul > li > i"),
	subMenuList = document.querySelectorAll(".submenu");

for (let i = 0; i < openSubmenu.length; i++) {
	openSubmenu[i].addEventListener("click", (e) => {
		e.preventDefault();

		if (subMenuList[i].style.display === "flex") {
			subMenuList[i].style.display = "none";
			rotateI[i].style.transform = "rotate(0deg)";
		} else {
			subMenuList[i].style.display = "flex";
			rotateI[i].style.transform = "rotate(180deg)";
		}
	});
}

//toggle menu control
const toggleNav = document.querySelector("nav"),
	toggleMenu = document.querySelector(".toggleMenu");

toggleMenu.addEventListener("click", (e) => {
	e.preventDefault();
	toggleNav.classList.toggle("active");

	const openBtn = document.querySelector(".toggleMenu .open");
	const closeBtn = document.querySelector(".toggleMenu .close");

	if (toggleNav.classList.contains("active")) {
		openBtn.style.display = "none";
		closeBtn.style.display = "block";
	} else {
		openBtn.style.display = "block";
		closeBtn.style.display = "none";
	}
});

//lottie animation
lottie.loadAnimation({
	container: document.querySelector("#lottie01"),
	renderer: "svg",
	loop: true,
	autoplay: true,
	path: "https://assets3.lottiefiles.com/packages/lf20_lqhdb5ie.json",
});

//swiper slide control
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
		prevEl: ".swiper-button-prev-slide01",
		nextEl: ".swiper-button-next-slide01",
	},
	// autoplay: {
	// 	delay: 8000,
	// },
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 100,
		},
		1200: {
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
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		prevEl: ".swiper-button-prev-slide02",
		nextEl: ".swiper-button-next-slide02",
	},
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		430: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
			autoplay: { enabled: false },
		},
		1134: {
			slidesPerView: 4,
			spaceBetween: 10,
			autoplay: { enabled: false },
		},
	},
});

//scroll animation

const body = document.body,
	html = document.documentElement;

const height = Math.max(
	body.scrollHeight,
	body.offsetHeight,
	html.clientHeight,
	html.scrollHeight,
	html.offsetHeight
);
function getScrollPercentage() {
	return ((body.scrollTop + window.innerHeight) / height) * 100;
}

window.addEventListener("scroll", () => {
	const activeTitle = document.querySelector(".whoWeAre > h2.title");
	let titlePosition = activeTitle.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	if (titlePosition < screenPosition) {
		activeTitle.classList.add("active");
	} else {
		activeTitle.classList.remove("active");
	}
});

//featuredContents isotope
window.addEventListener("load", () => {
	const grid = new Isotope(".filterContents", {
		itemSelector: "article",
		columWidth: "article",
		transitionDuration: "0.5s",
	});

	const btns = document.querySelectorAll("#featuredContents .tabMenu > li");

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", (e) => {
			e.preventDefault();

			const isOn = e.currentTarget.classList.contains("on");
			if (isOn) return;

			activation(e);
		});
	}

	function activation(e) {
		for (let j = 0; j < btns.length; j++) {
			btns[j].classList.remove("on");
		}
		e.currentTarget.classList.add("on");

		const btn_a = e.currentTarget.querySelector("a");
		const a_href = btn_a.getAttribute("href");
		console.log(a_href);

		grid.arrange({ filter: a_href });
	}
});

//footer control
const openFamilySite = document.querySelector(".familySite h4 i"),
	familySiteList = document.querySelector(".familySite > ul");

openFamilySite.addEventListener("click", (e) => {
	e.preventDefault();
	if (familySiteList.style.display === "flex") {
		familySiteList.style.display = "none";
		openFamilySite.style.transform = "rotate(45deg)";
	} else {
		familySiteList.style.display = "flex";
		openFamilySite.style.transform = "rotate(0deg)";
	}
});
