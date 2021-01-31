window.addEventListener('click', function() {
	// viewport and full window dimensions will change
	
	var viewport_width = window.outerWidth;
	var viewport_height = window.outerHeight;
	return document.getElementById("current_win").innerHTML =viewport_width+"*"+viewport_height;
});