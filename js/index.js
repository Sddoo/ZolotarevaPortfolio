var body = document.body, timer;
window.addEventListener('scroll', function() {
	clearTimeout(timer);
	if(!body.classList.contains('disable-hover')) {
		body.classList.add('disable-hover')
	}
	timer = setTimeout(function(){
		body.classList.remove('disable-hover')
	},200);
}, false);

$(".popup").on('click', function() {
	let imagePath;
	let left;
	let wrapper = $(".image_popup_wrap");

	imagePath = $(this).parent().css('backgroundImage');
	$(".popup_bg").css({'display': 'block'});
	wrapper.css({'display': 'block'});
	$(".image_popup_content")[0].src = 'images' +
		imagePath.slice(imagePath.lastIndexOf('/'), imagePath.length - 2);
	left = (window.innerWidth - parseInt(wrapper.css("width"))) / 2;
	wrapper.css({'left': left / window.innerWidth * 100 + '%'});
});

$(".popup_bg").on('click', function() {
	$(".image_popup_wrap").css({'display': 'none'});
	$(".popup_bg").css({'display': 'none'});
});

$(window).on("keydown", function(e) {
	if (e.key === "Escape") {
		$(".image_popup_wrap").css({'display': 'none'});
		$(".popup_bg").css({'display': 'none'});
	}
});

document.querySelector(".open_info").addEventListener('click', function() {
	if ($(".info").css("left") !== '0px') {
		$(".info").animate({left: "0%",}, 500);
		$(".grid_container").animate({left: "33.4%",}, 500);
	} else {
		$(".info").animate({left: "-33.4%",}, 500);
		$(".grid_container").animate({left: "0%",}, 500);
	}
});



