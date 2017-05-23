class AttendingsController < ApplicationController
	before_action :require_login, except: [:new]
  def create
  	user = User.find(session[:user_id])
  	event = Event.find(params[:id])
  	Attending.create(user: user, event: event)
  	redirect_to '/events'
  end

  def destroy
  	Attending.find_by(event: params[:id]).destroy
  	redirect_to :back
  end
end
