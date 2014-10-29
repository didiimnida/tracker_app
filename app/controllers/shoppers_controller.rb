class ShoppersController < ApplicationController
	include ShoppersHelper

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

	def update
		@shopper = Shopper.find(params[:id])
	
		if @shopper.update shopper_params
			redirect_to edit_shopper_path(@shopper)
			flash[:notice] = "Your account has been updated!"
		else
			render :edit
		end
		#Put info into database.
	end

	def edit
		@shopper = current_shopper
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
