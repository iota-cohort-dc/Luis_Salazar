class UsersController < ApplicationController
	before_action :require_login, except: [:new]
	def new
		
	end
  def show
  	@user = User.find(session[:user_id])
  	@secrets = Secret.where(user: @user)
  	@liked = Secret.all
  end
  def edit
  	@user = User.find(session[:user_id]) 
  end
  def update
  	user = User.find(session[:user_id])
  	user.update_attributes(name: params[:name], email: params[:email])
  	if user.valid?
  		redirect_to "/users/#{user.id}"

  	else
		flash[:errors] = user.errors.full_messages 
		redirect_to :back	
	end

  end
  def destroy
  	User.find(session[:user_id]).destroy
  	session.clear
  	redirect_to "/users/new"
  end

end
