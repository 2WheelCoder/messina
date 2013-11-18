
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About Messina' });
};

exports.productDetail = function(req, res){
  res.render('product-detail', { title: 'Messina: Product' });
};

exports.productList = function(req, res){
  res.render('product-list', { title: 'Messina: Product List' });
};