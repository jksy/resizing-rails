class CreateResizingRailsMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :resizing_rails_movies do |t|
      t.text :response

      t.timestamps
    end
  end
end
