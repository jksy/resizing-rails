require_dependency "resizing/rails/application_controller"

module Resizing::Rails
  class VideosController < ApplicationController
    def index
      render text: 'index'
    end

    def prepare
      response = client.prepare
      movie = Resizing::Rails::Movie.create(response: response)
      render json: movie.response
    end

    def client
      @client ||= Resizing::Video::Client.new
    end
  end
end
