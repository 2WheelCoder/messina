// add click event listener to quickview
// upon click,
	// display .product-overlay in correct position with loading .gif
	// send ajax request to products/{id} with Accept header application/json
		// on success
			// use templating engine to insert content into .product-overlay
			// hide gif
			// show content
		// on error
			// remove gif and display servor error