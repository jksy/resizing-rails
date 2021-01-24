require_dependency "resizing/rails/application_controller"

module Resizing::Rails
  class VideosController < ApplicationController
    def index
      render text: 'index'
    end
  end
end
