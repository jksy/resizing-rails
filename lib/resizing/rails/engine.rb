Gem.loaded_specs['resizing-rails'].dependencies.each do |d|
  require d.name
rescue LoadError
  require d.name.gsub('-', '/')
end

module Resizing
  module Rails
    class Engine < ::Rails::Engine
      isolate_namespace Resizing::Rails

      # initializer 'ResizingRails precompile hook', group: :all do |app|
      #   puts app.config.assets.precompile
      #   app.config.assets.precompile += %w(
      #     resizing/rails/videos.js
      #   )
      # end

      # rake_tasks do
      #   Dir[File.join(File.dirname(__FILE__), '../tasks/*.rake')].each { |f| load f }
      # end
    end
  end
end

