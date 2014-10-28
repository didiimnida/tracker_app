Rails.application.routes.draw do
  get 'products/index'

  root 'welcome#index'
  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'
  resources :shoppers
  resources :products
end
