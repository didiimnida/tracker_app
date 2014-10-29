$(function() {


	$('.product_delete').click(function(e){
	  	// console.log(e.target);
	    var div = $(e.target).parent().parent();
	    // console.log(div);
		var id = div.data("product-id");
		// console.log(id);

  	
		var request = $.ajax({
			url: "/products/"+id,
			type: "DELETE",
			dataType: "json"
		});

		request.done(function(data){
			div.remove();
		});

	});

	function toggleInfoFormForProduct(div) {
		$(".change_info", div).toggle();
		$(".update_product", div).toggle();
	}

	//Target the red plus splan.  
	$(".red_plus").click(function(e){
	    var id = $(this).data("plus-id");
	    var div = $('*[data-change-id="' + id + '"]');
	    var form = $('*[data-form-id="' + id + '"]')

		div.toggle('slow');
		form.toggle('slow');

	});

	//Update the database.
	$('.update_product').submit(function(e){
		e.preventDefault();
		var id = $(this).data("product-id");
		var form = $(this);
		var change_product = $('*[data-change-id="' + id + '"]');

		form.toggle('slow');
		change_product.toggle('slow');

		console.log(change_product);
		

		// var desired_price = $('.desired_price').val();
		// console.log(desired_price);
		// var category = $('.category').val();
		// console.log(category);

	// 	data_hash = {
	// 	"product":{"desired_price":desired_price, "category":category}
	// 	}

	// 	var request = $.ajax({
	// 		url: "/products/"+ id,
	// 		type: "PATCH",
	// 		data: data_hash,
	// 		dataType: "json"
	// 	});

	// 	request.done(function(data){
	// 		console.log("Hi");
	// 	});

	// $(".change_info").toggle('slow');
	// $(".update_product").toggle('slow');
	});


});