$(document).ready(function () {
	$("#pic1, #pic2, #pic3, #pic4").hover(function () {
		$(this).css('cursor', 'pointer');
		if($(this).css("opacity") < 1.0) {
			$(this).css("opacity", "0.8")
		}
	},
	function () {
		if($(this).css("opacity") < 1.0) {
			$(this).css("opacity", "0.5")
		}
	});
	$("#pic1, #pic2, #pic3, #pic4").click(function () {
		if($(this).css("opacity") < 1.0) {
			$(this).css('opacity', '1.0');
		}
		else
		$(this).css('opacity','0.5');
	});
	
});

function submit() {
	
	var interests = [];
	
	var inputElements = ["science", "math", "language", "art"];
	
	if($("#pic1").css("opacity") == 1.0) {
		interests.push(inputElements[0]);
	}
	if($("#pic2").css("opacity") == 1.0) {
		interests.push(inputElements[1]);
	}
	if($("#pic3").css("opacity") == 1.0) {
		interests.push(inputElements[2]);
	}
	if($("#pic4").css("opacity") == 1.0) {
		interests.push(inputElements[3]);
	}
	
	localStorage.setItem("interests", JSON.stringify(interests));
	
	window.location = "events.html";
	
}	


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
document.querySelectorAll('*'),
function(el) {
    if (el.offsetWidth > docWidth) {
		console.log(el);
	}
}
);