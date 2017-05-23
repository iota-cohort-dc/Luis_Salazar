Rails.application.routes.draw do
# MESSAGES ROUTES
	get '/messages' => 'messages#index'


	post '/messages' => 'messages#create'
	post '/comments/:id' => 'messages#create_comment'

# USERS ROUTES
	get 'users/new'

	get 'users/index'

	get 'users/show'

	get 'logout' => 'users#log_out'

	post '/users' => "users#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
