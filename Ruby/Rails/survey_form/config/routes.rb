Rails.application.routes.draw do
  get 'survey/index'
  get '/success' => 'survey#success'
  post '/success' => 'survey#create'
  root "survey#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
