Rails.application.routes.draw do
  get '/searches' => 'searches#search'
  get '/search' => 'searches#index'
  get '/about' => 'welcome#about'
 
  root 'welcome#index'
  post 'sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'  #This should be delete, but changed to get so use in navbar. 
  resources :shoppers
  resources :products
end
