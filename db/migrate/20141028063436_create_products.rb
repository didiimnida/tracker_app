class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :semantics_id
      t.string :photo_url
      t.decimal :price
      t.decimal :desired_price
      t.integer :user_id

      t.timestamps
    end
  end
end
