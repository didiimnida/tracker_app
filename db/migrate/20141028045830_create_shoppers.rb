class CreateShoppers < ActiveRecord::Migration
  def change
    create_table :shoppers do |t|
      t.string :mobile
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
