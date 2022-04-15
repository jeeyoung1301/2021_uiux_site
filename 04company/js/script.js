const header = document.getElementById("headerWrap");
document.body.addEventListener("scroll", function () {
	let y = document.body.scrollTop;

	if (y > 60) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});

$(document).ready(function () {
	$(".toggleMenu").click(function () {
		const toggleMenu = $(".toggleMenu").attr("class");
		console.log(toggleMenu);
		if (toggleMenu == "toggleMenu") {
			document
				.getElementsByClassName("toggleMenu")[0]
				.classList.add("active");
			$(".gnb").addClass("view");
		} else {
			document
				.getElementsByClassName("toggleMenu")[0]
				.classList.remove("active");
			$(".gnb").removeClass("view");
		}
	});

	$(window).resize(function () {
		$(".toggleMenu").removeClass("active");
		$(".gnb").removeClass("view");
	});
});
