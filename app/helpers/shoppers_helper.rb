module ShoppersHelper

	def send_email(email)
			username = 'api'
			password = ENV['MAILGUN_KEY']
			domain = ENV['DOMAIN']
			url = "https://api.mailgun.net/v2/#{domain}/messages"

			params = {
			    :from => "Tracker App <postmaster@#{domain}>",
			    :to => "#{email}",
			    :subject => "WELCOME!",
			    :text => "Welcome to the Tracker App!"
			}

			options = {
			    method: :post,
			    params: params,
			    userpwd: "#{username}:#{password}"
			}

			request = Typhoeus::Request.new(url, options)

			response = request.run()
		end 

		def send_sms(mobile)
			account_sid = ENV['ACCOUNT_SID']
			auth_token = ENV['AUTH_TOKEN']
			@client = Twilio::REST::Client.new account_sid, auth_token
	 
			message = @client.account.messages.create(:body => "Welcome to the Tracker App!",
			    :to => "#{mobile}",    
			    :from => "+18169120447")   
		end
end
