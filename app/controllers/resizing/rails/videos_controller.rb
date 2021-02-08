require_dependency "resizing/rails/application_controller"

module Resizing::Rails
  class VideosController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:prepare]

    def index
      @videos = Resizing::Rails::Video.all
      render text: 'index'
    end

    def prepare
      response = client.prepare
      video = Resizing::Rails::Video.create!(response: response)
      render json: response
    end

    def client
      @client ||= Resizing::Video::Client.new
    end

    def show
      @video = Resizing::Rails::Video.find(params[:id])
    end
  end
end
