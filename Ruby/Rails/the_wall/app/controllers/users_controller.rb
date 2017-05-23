class UsersController < ApplicationController
  def index
  	@user = User.all

  end

  def new
  	
  end

  def create
  	@user = User.find_by(name: params[:name])
  	if (@user)
  		session[:user_id] = @user.id
  		puts 'User logged in #{session[:user_id]}'
  		redirect_to '/messages'

  	else
	  	@user = User.create(name: params[:name])
	  	if @user.valid?
	  		session[:user_id] = @user.id
	  		puts 'User created'
	  		redirect_to '/messages'		  	
		else
			flash[:errors] = @user.errors.full_messages 
			redirect_to '/users/new'
		end
	end

  end

  def log_out
  	session.clear
  	redirect_to '/users/new'
  end





end
