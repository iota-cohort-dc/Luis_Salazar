class RpgController < ApplicationController
  def index
	session[:gold] ||= 0
	session[:activities] ||= []

	@gold = session[:gold]
	@activities = session[:activities]
  end

  def new
	if params[:build] == 'Farm'
		gold = rand(10..20)
	elsif params[:build] == 'Cave'
		gold = rand(5..10)
	elsif params[:build] == 'House'
		gold = rand(2..5)
	elsif params[:build] == 'Casino'
		gold = rand(-50..50)
	end

	time = Time.now

	if gold > 0 
		session[:activities] << "Earned #{gold} gold from the #{params[:build]}! (#{time.strftime('%Y/%m/%d %l:%M %P')})"
	else
		session[:activities] << "Lost #{gold} gold at the Casino... Ouch bro. (#{time.strftime('%Y/%m/%d %l:%M %P')})"
	end

	session[:gold] += gold
	redirect_to :root
  end
end
