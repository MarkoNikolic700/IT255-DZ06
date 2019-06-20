var url = 'https://api.predic8.de/shop/products/'

$.ajax( {
	url: url,
	type: 'GET',
	success: function (max) {
		$("#Link").text(max.products[0].product_url);
		$("#Naziv").text(max.products[0].name);
	}
});
