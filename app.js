var main = function() {
	$('.dropdown-toggle').click(function() {
		$('.dropdown-menu').toggle();
	});
}

$(document).ready(main); // wait for HTML to load