Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, except: [:update, :edit] do
      resources :channels, only: [:create, :index]
    end
    resources :messages, only: [:create, :destroy] 
    resources :channels, except: [:create, :edit, :update, :index]

  end

end
