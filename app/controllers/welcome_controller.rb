class WelcomeController < ApplicationController
  def index
  	if logged_in?
  	   redirect_to shoppers_path
  	else
	   render :index
	end 
  end
end
