window.addEventListener("scroll", function () {
	let scroll =
		window.pageYOffset / (document.body.offsetHeight - window.innerHeight);

	let ratio = scroll * 980 - 500;
	document.querySelector(
		".house"
	).style.transform = `translate3d(0,0,${ratio}vw)`;
});

let menuPosX = 0;
let menuPosY = 0;

window.addEventListener("mousemove", function (e) {
	menuPosX = -1 + (e.clientX / window.innerWidth) * 2;
	menuPosY = 1 - (e.clientY / window.innerHeight) * 2;

	document.querySelector(".stage").style.transform = `rotateY(${
		menuPosX * 5
	}deg) rotateX(${menuPosY * 5}deg)`;

	console.log(1 - (e.clientY / window.innerHeight) * 2);
});
