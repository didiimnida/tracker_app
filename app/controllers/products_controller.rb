class ProductsController < ApplicationController
  include ProductsHelper

  def index
  	#@products = Product.all
    @products = current_shopper.products
    respond_to do |format|
      format.html
      format.json { render json: @products }
    end
  end

  def create
    @product = current_shopper.products.new(product_params)
    @product.desired_price = 0.99
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

  def show
    @product = Product.find params[:id]
    more_product_info()
    #historical_pricing()
    
  end

  def update
    @product = Product.find(params[:id])
    @product.desired_price = params[:product][:desired_price]
    @product.category = params[:product][:category]
    if @product.save
      render json: @product
    end
  end

  def destroy
    @product = Product.find(params[:id])
    if @product.destroy
      render json: {}
    else 
      render status: 400, nothing: true
    end
  end

  private
  def product_params
  	params.require(:product).permit(:name, :category, :semantics_id, :photo_url, :price, :desired_price)
  end
end
