module Resizing::Rails
  class Video < ApplicationRecord
    serialize :data, JSON

    %w(
      id
      project_id
      state
      source_uri
      deleted_at
      s3_presigned_url
      converted_uri
      created_at
      updated_at
      upload_completed_url
      self_url
      m3u8_url
      hevc_url
      avc_url
      thumbnail_url
      job_state
    ).each do |name|
      define_method "data_#{name}" do
        if self.data
          self.data[name]
        end
      end
    end

    def self_path
      Resizing::Rails.railtie_routes_url_helpers.video_path(self)
    end

    def as_json *args
      hash = super(*args)
      hash.merge(self_path: self_path)
    end
  end
end
