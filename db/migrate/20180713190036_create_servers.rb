class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :servers, :server_name
    add_index :servers, :creator_id
  end
end
