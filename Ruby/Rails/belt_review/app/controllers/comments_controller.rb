class CommentsController < ApplicationController
	before_action :require_login
  def create
  	user = User.find(session[:user_id])
  	event = Event.find(params[:id])
  	comment = Comment.create(comment: params[:comment], user: user, event:event )
	if comment.valid?
		redirect_to :back		  	
	else
		flash[:errors] = comment.errors.full_messages 
		redirect_to :back
	end
  end
end
