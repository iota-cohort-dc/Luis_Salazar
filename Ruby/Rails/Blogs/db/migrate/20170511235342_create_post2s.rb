class CreatePost2s < ActiveRecord::Migration[5.0]
  def change
    create_table :post2s do |t|
      t.string, :title
      t.string, :content
      t.references, :user
      t.references :blog, foreign_key: true

      t.timestamps
    end
  end
end
