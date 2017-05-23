class DojosController < ApplicationController
  def index
  	@dojos = Dojo.all
  	@count = Dojo.count
  end
  def create
  	Dojo.create(branch: params[:branch], street: params[:street], city: params[:city], state: params[:state])
  	redirect_to '/dojos'
  end

  def show
  	@dojo = Dojo.find(params[:id])
  	@students = Student.where(dojo: @dojo)
  end

  def edit
  	@dojo = Dojo.find(params[:id])
  end

  def update
  	Dojo.find(params[:id]).update(branch: params[:branch], street: params[:street], city: params[:city], state: params[:state])
  	redirect_to '/dojos'
  end
  def destroy
  	Dojo.find(params[:id]).destroy
  	redirect_to '/dojos'
  end

end
