class ConvertSelfUrlFromDataOnVideo < ActiveRecord::Migration[5.2]
  def up
    Resizing::Rails::Video.find_each do |video|
      video.self_url = video.data_self_url
      video.save!
    end
    change_column_null :resizing_rails_videos, :self_url, true
  end

  def down
    change_column_null :resizing_rails_videos, :self_url, false
  end
end
