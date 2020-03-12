document.addEventListener('mouseover', function(e) {
    if (e.target.className === 'grid_item') {
		// console.log("hello");
    }
});

document.querySelector(".open_info").addEventListener('click', function() {
	if ($(".info").css("left") !== '0px') {
		$(".info").animate({left: "0%",}, 500);
		$(".grid_container").animate({left: "30%",}, 500);
	} else {
		$(".info").animate({left: "-30%",}, 500);
		$(".grid_container").animate({left: "0%",}, 500);
	}
});