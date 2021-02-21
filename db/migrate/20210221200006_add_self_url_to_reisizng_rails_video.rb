class AddSelfUrlToReisizngRailsVideo < ActiveRecord::Migration[5.2]
  def up
    add_column :resizing_rails_videos, :self_url, :text, null: true
  end

  def down
    remove_column :resizing_rails_videos, :self_url
  end
end
