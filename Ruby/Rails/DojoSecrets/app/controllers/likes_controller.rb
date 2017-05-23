class LikesController < ApplicationController
	def create
		user = User.find(session[:user_id])
		secret = Secret.find(params[:id])
		Like.create(user: user, secret:secret)
		redirect_to :back
	end

	def destroy
		Like.find_by(user_id: session[:user_id]).destroy
		redirect_to :back
	end
end
