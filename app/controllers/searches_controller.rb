class SearchesController < ApplicationController
	
	def index
		#Displays search page by default.   
	end

	def search
		password = ENV['API_KEY']
		domain = ENV['API_SECRET']  
		sem3 = Semantics3::Products.new(password,domain)

		
		sem3.products_field( "search", params["search"] )
		productsHash = sem3.get_products
		# puts "Results of query:\n", productsHash.to_json
		render json: productsHash
	end

	def next
		#Return next 10 results. 
		#Same as before, but want to retrieve the next 10. 
	end

	
end