class RemoveShopperIdFromProducts < ActiveRecord::Migration
  def change
    remove_column :products, :shopper_id, :integer
  end
end
