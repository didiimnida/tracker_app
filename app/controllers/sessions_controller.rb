class SessionsController < ApplicationController
	def create
        @shopper = Shopper.find_by :email => params[:email]

        if @shopper.nil?
            flash[:error] = "No such user."

        elsif @shopper.authenticate params[:password]
            session[:current_shopper_id] = @shopper.id
            flash[:notice] = "Thank you for logging in, #{@shopper.email}."

        else
            flash[:error] = "Incorrect password."
        end

        redirect_to root_path
    end

    def destroy
        session[:current_shopper_id] = nil
        flash[:notice] = "You have been logged out."

        redirect_to root_path
    end
end
