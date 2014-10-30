class Product < ActiveRecord::Base
	belongs_to :shopper

	def self.price_alert(mobile, desired_price, current_price, product)
		account_sid = ENV['ACCOUNT_SID']
		auth_token = ENV['AUTH_TOKEN']
		@client = Twilio::REST::Client.new account_sid, auth_token
		 
		message = @client.account.messages.create(
		:body => "The price of #{product} has dropped below $#{sprintf "%.2f", desired_price} to $#{sprintf "%.2f", current_price}! -Tracker App",
		:to => "#{mobile}",    
		:from => "+18169120447")   
	end


	
end
