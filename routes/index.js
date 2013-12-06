
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res) {
  res.render('about', { title: 'About Messina' });
};

// exports.productDetail = function(req, res) {
//   res.render('product-detail', { title: 'Messina: Product' });
// };

exports.productList = function(req, res) {
  res.render('product-list', { title: 'Messina: Product List' });
};

// exports.productOverlay = function(req, res) {

// };

exports.products = function(req, res) {
	res.format({
		// request for product detail
		'text/html': function(){
			res.render('product-detail', { title: 'Messina: Product' });
		},
		// request for overlay
		'application/json': function(){
			res.json(200, {
				name: 'Big Sir Dining Table',
				id: 1,
				description: 'Like its namesake, this casual, contemporary dining group is big, bold and natural. The rustic beauty of Big Sur lies in its solid European white oak with naturally occurring splits, cracks and knots.',
				price: '1499',
				dimensions: '65" x 37.5" x 30"',
				material: 'solid white oak',
				capacity: 'seats up to six',
				origin: 'Poland'
			});
		}
	});
};