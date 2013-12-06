var $quickview = $('.quick-view'),
	$quickviewDetail = $('#quick-view-detail'),
	$loadingPlaceholder = $('.loading-placeholder');

$(document).ready(function() {
	$quickview.click(function(evt) {
		$quickviewDetail.css({
			// TODO: set this relevant to div
			'top': '0',
			'left': '236px'
		});
		$quickviewDetail.show();

		$.ajax({
			// TODO: Grab product id from li tag and insert into URL
			url: 'http://localhost:3000/products/1',
			accepts: 'application/json',
			success: function(data, status) {
				// TODO: use templating engine to insert content into .product-overlay
				$quickviewDetail.children().show();
				$loadingPlaceholder.hide();
				// TODO: add event listener to close overlay
			},	
			error: function() {
				$loadingPlaceholder.hide();
				// TODO: display servor error
			}
		});

		evt.preventDefault();
	});
});

// How does jaden work into this? Do I still need a front end templating engine if I use jaden?
// Is an id on the product's li tag referring to the product's id an appropriate place to store the id until it is grabbed for the ajax call?