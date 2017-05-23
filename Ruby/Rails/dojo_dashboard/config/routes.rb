Rails.application.routes.draw do
# *********** DOJO ROUTES **************
	get '/dojos' => 'dojos#index'

	get 'dojos/new' => 'dojos#new'

	post 'dojos' => 'dojos#create'

	get 'dojos/:id' => 'dojos#show'

	get 'dojos/:id/edit' => 'dojos#edit'

	patch 'dojos/:id' => 'dojos#update'

	delete 'dojos/:id' => 'dojos#destroy'

# ************ STUDENT ROUTES *************
	get 'students/index'

	get 'dojos/:id/students/new' => 'students#new'

	post '/students' => 'students#create'

	get 'dojos/:id/students/:student_id' => 'students#show'

	get 'dojos/:id/students/:student_id/edit' => 'students#edit'

	patch 'students/:id' => 'students#update'

	delete 'students/:student_id/:id' => 'students#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
