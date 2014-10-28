class ProductsController < ApplicationController
  def index
  	#@products = Product.all
    @products = current_shopper.products 	
  end

  def create
    @product = current_shopper.products.new(product_params)
    #@product = Product.create(product_params) 
    # redirect_to products_path
    #Send something back to AJAX request?
    respond_to do |format|
      if @product.save
        format.html{redirect_to products_path}
        format.json{render json: @product}
      else
        format.html{render :new}
        format.json{render json: @product.errors, status: :unprocessable_entity}
      end
    end
    
  end

  private
  def product_params
  	params.require(:product).permit(:name, :category, :semantics_id, :photo_url, :price, :desired_price)
  end
end
