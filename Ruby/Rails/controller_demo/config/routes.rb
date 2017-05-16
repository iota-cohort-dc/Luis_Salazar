Rails.application.routes.draw do
  get 'users/index'

  get 'products/index'

  get 'products/new'

  post "products" => 'products#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
