$(document).ready(function(){
	var results = '';  
	$('#s').click(function(){
		var search = $('input').val();
		console.log(search);
		var data_hash = {"search":search}
		console.log(data_hash);

		var request = $.ajax({
			url: '/searches',
			type: "GET",
			data: data_hash, 
			dataType: "json"
		});

		request.done(function(data){
			console.log(data);

			for (var i = 0; i < data["results"].length; i++) {
				var name = data["results"][i]["name"];
				var model = data["results"][i]["model"];
				var price = data["results"][i]["price"];
				var upc = data["results"][i]["upc"];
				var photo = data["results"][i]["images"][0];

			$('ul.results').append(
				'<br/><div class="search_results">' + 
					'<h5 class="name"> ' + name + ' </h5>' +
					'<h5 class="price"> Price: $' + price + '</h5>' + 
					'<h5  class="model"> Model: ' + model + '</h5 >' + 
					'<h5  class="upc"> UPC: ' + upc + '</h5 >' +  '<br/>' +
					'<img class="photo" src="' + photo + '" height="425" width="425">' + '<br/><br/>' +
					'<button data-product-id="'+i+'" class= "btn btn-danger">'+ 'Save' + '</button>' + '<br/><br/>' +
				'</div>'
			);
			results = data;
		} 
	   	});

		request.fail(function(data){
			console.log("FAIL FUNCTION");
			$('h1').append("<p> Error.</p>")
		});
	});

	$('ul.results').click(function(e){
		var button = $(e.target);
		var id = button.data("product-id");
		console.log(id);

		var name = results["results"][id]["name"];
		var price = results["results"][id]["price"];
		var category = results["results"][id]["category"];
		var semantics_id = results["results"][id]["sem3_id"];
		var photo_url = results["results"][id]["images"][0];

		data_hash = {
		"product":{"name": name, "price": price, "category": category, "semantics_id": semantics_id, "photo_url": photo_url}
		}

		// console.log(data_hash);

		var request = $.ajax({
			url: '/products',
			type: "POST",
			data: data_hash, 
			dataType: "json"
		});

		request.done(function(data){
	  		$(button).remove();
	  		console.log(data);
	  	});

	  	request.fail(function(data){
			console.log("Save Failed.");
			$('ul.results').append("<p> There was an error saving your product.</p>")
		});
	});

 });




