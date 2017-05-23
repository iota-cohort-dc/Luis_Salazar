Rails.application.routes.draw do
# *************** ATTENDING ROUTES
  get '/attendings/:id' => 'attendings#create'

  delete '/attendings/:id' => 'attendings#destroy'

# ************* COMMENT ROUTES
  post '/comments/:id' => 'comments#create'

# *********** EVENTS ROUTES
  get '/events' => 'events#index'

  get '/events/:id/edit' => 'events#edit'

  get '/events/:id' => 'events#show'

  patch '/events/:id' => 'events#update'

  post '/events' => 'events#create'

  delete '/events/:id' => 'events#destroy'

# ********** USERS ROUTES
  root 'users#index'

  get 'users/:id' => 'users#edit'

  patch '/users' => 'users#update'

# ************ LOGIN/REG ROUTES
  post '/login' =>'users#login'

  post '/register' => 'users#register'

  get '/logout' => 'users#logout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
