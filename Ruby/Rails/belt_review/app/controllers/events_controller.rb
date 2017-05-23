class EventsController < ApplicationController
	before_action :require_login
  def index
  	@user = User.find(session[:user_id])
  	@events = Event.all
  end

  def create
  	@user = User.find(session[:user_id])
  	@event = Event.create(name: params[:name], date: params[:date], city: params[:city], state: params[:state], user: @user)
	  	if @event.valid?
	  		redirect_to :back		  	
		else
			flash[:errors] = @event.errors.full_messages 
			redirect_to :back
		end
  end
  def show
  	@event = Event.find(params[:id])
  	@comments = Comment.where(event: params[:id])
  	@attending = Attending.where(event: params[:id])
  end
  def edit
  	@event = Event.find(params[:id])
  end
  def update
  	user = User.find(session[:user_id])
  	event = Event.find(params[:id])
  	event.update_attributes(name: params[:name], date: params[:date], city: params[:city], state: params[:state], user: user)
	if event.valid?
		redirect_to '/events'
	else
		flash[:errors] = event.errors.full_messages 
		redirect_to :back	
	end
  end
  def destroy
  	Event.find(params[:id]).destroy
  	redirect_to :back
  end
end
