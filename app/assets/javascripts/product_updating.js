$(function() {


	$('.product_delete ').click(function(e){
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
		// console.dir(id);
		var change_product = $('*[data-change-id="' + id + '"]');
		var my_product_div = $('*[data-overall-id="' + id + '"]');

		// console.log(change_product);
		
		
		// var desired_price = $('.desired_price').val();
		// // console.log(desired_price);
		// var category = $('.category').val();
		// // console.log(category);

		var desired_price = $('#price_'+id).val();
		// console.log(desired_price);
		var category = $('#category_'+id).val();
		// console.log(category);

		data_hash = {
		"product":{"desired_price":desired_price, "category":category}
		}
		// console.log(data_hash);
		var request = $.ajax({
			url: "/products/"+ id,
			type: "PATCH",
			data: data_hash,
			dataType: "json"
		});

		request.done(function(data){
			form.toggle('slow');
			// console.log(id);
			// console.log(desired_price);
			// console.log(category);

			my_product_div.append(
				//NOT WORKING! ONLY WORKS ON FIRST ELEMENT IN LIST. 
				// '<div class="change_info" data-product-id="' + id '" data-change-id="' + id + '">' + 

					'<div class="panel panel-default">' +
						'<div class="panel-heading">' +
							'<h5 class="change_category">Category: '+category+'</h5>' +
						'</div>' +
						'<div class="panel-body">' +
							'<h5 class="change_price"><span data-plus-id="'+id +'" class="glyphicon glyphicon-plus red_plus"></span> Desired Price: $' + desired_price+'</h5>' +
						'</div>' +
					'</div>' 

				// + '</div>'
			);

			// change_product.toggle('slow');
		});

		
	});


});