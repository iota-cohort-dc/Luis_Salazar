class SurveyController < ApplicationController
  def index
  	session[:count] ||= 0
  end
  def create
  	session[:count] += 1
  	session[:result] = params[:form]

  	flash[:success] = "Thanks for submitting a survey. You have submitted this form #{session[:count]} time(s)"

  	redirect_to '/success'
  end
  def success
  	@result = session[:result] 
  end
end
