module Resizing::Rails
  class Video < ApplicationRecord
    serialize :response, JSON

    def id
      response['id']
    end

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
      define_method name do
        self.response[name]
      end
    end
  end
end
