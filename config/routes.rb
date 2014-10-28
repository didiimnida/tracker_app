Rails.application.routes.draw do
  root 'welcome#index'
  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'
  resources :shoppers
  resources :products
end
