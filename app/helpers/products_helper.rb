module ProductsHelper

	def more_product_info
		password = ENV['API_KEY']
	    domain = ENV['API_SECRET']
	    sem3 = Semantics3::Products.new(password,domain)
	    semantics_id = @product.semantics_id
	    sem3.products_field( "sem3_id", semantics_id)
	    @product_api = sem3.get_products
	end 

	def historical_pricing
		password = ENV['API_KEY']
	    domain = ENV['API_SECRET']
	    sem3 = Semantics3::Products.new(password,domain)
	    #Change this:
	    semantics_id = @product.semantics_id

	    sem3.products_field( "sem3_id", semantics_id)
	    @historical_pricing = sem3.get_products
	end
end
