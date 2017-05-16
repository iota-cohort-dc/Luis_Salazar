class UsersController < ApplicationController
  def index
  	@users = User.all
  end

  def create
  	@users = User.create(name: params[:name])
  	redirect_to '/users'
  end

  def show
  	@user = User.find( params[:id])

  end

  def edit
  	@user = User.find(params[:id])
  end

  def update
  	user = User.find( params[:id])
  	user.update(name: params[:name])
  	redirect_to '/users'
  end

  def total
  	@user = User.count
  end

end
