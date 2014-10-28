class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_shopper, :logged_in?

    def current_shopper
        if session[:current_shopper_id]
            Shopper.find session[:current_shopper_id]
        else
            nil
        end
    end

    def logged_in?
        current_shopper != nil
    end

end
