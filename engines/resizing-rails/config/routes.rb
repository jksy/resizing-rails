Resizing::Rails::Engine.routes.draw do
  resources :videos do
    collection do
      get :prepare
    end
  end
end
