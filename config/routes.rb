Rails.application.routes.draw do
  root to: 'rooms#show'

  resources :messages, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
