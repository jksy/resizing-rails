Rails.application.routes.draw do
  mount Resizing::Rails::Engine => "/resizing-rails"
end
