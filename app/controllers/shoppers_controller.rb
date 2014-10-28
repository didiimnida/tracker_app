class ShoppersController < ApplicationController
	include ShoppersHelper
	def index
	end

	def create
		@shopper = Shopper.new shopper_params
		
		if @shopper.save
            flash[:notice] = "Your account has been created! Please login."
            email = @shopper.email
            mobile = @shopper.mobile
            send_email(email) 
            send_sms(mobile)
            redirect_to root_path
        else
            # Re-render the template that led here. Errors will be displayed
            # because there is a @shopper instance variable now.
            render "welcome/index"
        end
	end

	def shopper_params
		params.require(:shopper).permit( 
			:password,
			:password_confirmation,
			:email,
			:mobile
			)
	end


end
