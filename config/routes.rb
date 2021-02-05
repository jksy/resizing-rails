Resizing::Rails::Engine.routes.draw do
  resources :videos do
    collection do
      post :prepare
    end
  end
end
