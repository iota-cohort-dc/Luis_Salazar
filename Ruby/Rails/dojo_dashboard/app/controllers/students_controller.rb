class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def new
    @dojo = Dojo.find(params[:id])
    @dojos = Dojo.all
  end

  def create
    puts params[:dojo]
    dojo = Dojo.find(params[:dojo])
    puts dojo
    Student.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], dojo: dojo)
    redirect_to '/dojos/'+ params[:dojo]
  end

  def show
    @student = Student.find(params[:student_id])
  end

  def edit
    @student = Student.find(params[:student_id])
    @dojos = Dojo.all
  end

  def update
    dojo = Dojo.find(params[:dojo])
    Student.find(params[:id]).update(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], dojo: dojo)
    redirect_to '/dojos/'+ params[:dojo]
  end

  def destroy
    dojo = Dojo.find(params[:id])
    Student.find(params[:student_id]).destroy
    redirect_to '/dojos/'+ params[:id]
  end
end
