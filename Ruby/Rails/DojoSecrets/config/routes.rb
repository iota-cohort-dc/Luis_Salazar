Rails.application.routes.draw do
  post 'likes/:id' => 'likes#create'
  delete 'likes/:id' => 'likes#destroy'

# SECRETS ROUTES
  get 'secrets' => 'secrets#index'
  get 'secrets/show'
  post 'secrets' => 'secrets#create'
  delete 'secrets/:id' => 'secrets#destroy'
  get '/sessions/new' => 'sessions#new'

# USER ROUTES
	get 'users/new' => 'users#new'
	get 'users/edit' => 'users#edit'
	get 'users/:id' => 'users#show'
	patch 'users' => 'users#update'
	delete 'users' => 'users#destroy'
 

# SESSION ROUTES
  post '/sessions_login' => 'sessions#login'
  post '/sessions_create' => 'sessions#create'
  get '/logout' => 'sessions#logout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
