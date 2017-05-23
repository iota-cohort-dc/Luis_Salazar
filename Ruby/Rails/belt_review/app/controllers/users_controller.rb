class UsersController < ApplicationController
	before_action :require_login, except: [:index,:login, :create]
  def index
  end

  def edit
  	@user = User.find(session[:user_id])
  end

  def update
	user = User.find(session[:user_id])
	user.update_attributes(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], city: params[:city], state: params[:state])
	if user.valid?
		redirect_to '/events'
	else
		flash[:errors] = user.errors.full_messages 
		redirect_to :back	
	end
  end

  def login
	@user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
  	if (@user)
  		session[:user_id] = @user.id
  		redirect_to "/events"

  	else
		flash[:error] = "User information not found." 
		redirect_to :back	
	end
  end

  def register
	@user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], city: params[:city], state: params[:state], password: params[:password], password_confirmation: params[:password_confirmation])
	  	if @user.valid?
	  		session[:user_id] = @user.id
	  		puts 'User created'
	  		redirect_to "/events"		  	
		else
			flash[:errors] = @user.errors.full_messages 
			redirect_to :back
		end
  end

  def logout
  		session.clear
		redirect_to '/'
  end
end
