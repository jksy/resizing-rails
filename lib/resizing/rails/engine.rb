module Resizing
  module Rails
    class Engine < ::Rails::Engine
      isolate_namespace Resizing::Rails
    end
  end
end
