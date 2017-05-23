class SecretsController < ApplicationController
	before_action :require_login
	def index
		@secrets = Secret.all
		@user = User.find(session[:user_id])
		@likes = Like.all
	end
	def create
		user = User.find(session[:user_id])
		@secret = Secret.create(secret: params[:secret], user: user)
	  	if @secret.valid?
	  		redirect_to "/users/#{user.id}"		  	
		else
			flash[:errors] = @secret.errors.full_messages 
			redirect_to "/users/#{user.id}"	
		end
	end
	def destroy
		Secret.find(params[:id]).destroy
		redirect_to :back
	end
end
