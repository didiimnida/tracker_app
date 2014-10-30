desc "This task is called by the Heroku scheduler add-on"

task :check_price => :environment do
	puts "Sending SMS..." 
	@products = Product.all()
	
 	password = ENV['API_KEY']
	domain = ENV['API_SECRET']
  	@products.each do |product|
			id = product.shopper_id
			name = product.name 
			@shopper = Shopper.find(id)
			mobile = @shopper.mobile
			desired_price = product.desired_price

			#Call API:
			sem3 = Semantics3::Products.new(password,domain)
			semantics_id = product.semantics_id
			sem3.products_field( "sem3_id", semantics_id)
			@product_api = sem3.get_products
			current_price = (@product_api["results"][0]["price"]).to_f
			
			#Compare API to DB. 
			if current_price < desired_price
			Product.price_alert(mobile, desired_price, current_price, name)
			puts "Sent SMS!"
			else 
			puts "Over desired price. "
			end
	end
end