class CreateResizingRailsVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :resizing_rails_videos do |t|
      t.text :data

      t.timestamps
    end
  end
end
