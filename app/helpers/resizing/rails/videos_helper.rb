module Resizing::Rails
  module VideosHelper
    def video_file_field_tag name, options = {}
      raise ArgumentError, "video_file_field_tag requires Hash as option arguments" unless options.is_a? Hash

      options = options.merge(only_path: true)
      args['data-video-prepare-url'] = prepare_video_url(options)
      file_field_tag name
    end

    def resizing_prepare_video_url(*args)
      Resizing::Rails::Engine.routes.url_helpers.prepare_videos_url(*args)
    end

    def resizing_video_tag resizing_rails_video
      raw "<div class='video' data-video-url=#{resizing_rails_video.data_self_url}></div>"
    end
  end
end
