window.addEventListener('resize', function() {
	var viewport_width = window.outerWidth;
	var viewport_height = window.outerHeight;
	return document.getElementById("current_win").innerHTML =viewport_width+"*"+viewport_height;
});