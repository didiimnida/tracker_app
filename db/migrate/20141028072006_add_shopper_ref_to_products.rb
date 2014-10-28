class AddShopperRefToProducts < ActiveRecord::Migration
  def change
    add_reference :products, :shopper, index: true
  end
end
