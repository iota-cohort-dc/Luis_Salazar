class CreateNinjas < ActiveRecord::Migration[5.0]
  def change
    create_table :ninjas do |t|
      t.string :f_name
      t.string :l_name
      t.references :dojo, foreign_key: true

      t.timestamps
    end
  end
end
