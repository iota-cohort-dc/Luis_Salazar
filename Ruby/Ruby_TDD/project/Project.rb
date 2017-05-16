class Project
  attr_accessor :name, :description, :owner 
  def initialize(name,description,owner)
    @name = name
    @description = description
    @owner = owner
    @tasks = []
  end
  def description
    @description
    self
  end
  
  def elevator_pitch
    "#{@name}, #{@description}"
  end

  def tasks
    @tasks
  end
  def add_tasks(task)
    @tasks.push(task)
    self
  end
  def print_tasks
    puts @tasks
  end
end
# project1 = Project.new("Project 1", "Description 1","John Doe")
# puts project1.name # => "Project 1"
# project1.elevator_pitch  # => "Project 1, Description 1"