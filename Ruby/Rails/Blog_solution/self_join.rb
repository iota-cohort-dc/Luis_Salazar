
# creating the models
rails g model User first_name:string last_name:string
rails g model Friendship user:references friend:references

# model structure
class User < ActiveRecord::Base
  has_many :friendships
  has_many :friends, through: :friendships  
end

class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, class_name: "User"
end

# creating users
User.create(first_name: "John", last_name: "Doe")
User.create(first_name: "Jane", last_name: "Doe")
User.create(first_name: "Michael", last_name: "Smith")
User.create(first_name: "Mary", last_name: "Smith")
User.create(first_name: "May", last_name: "Johnson")

# creating friendships
Friendship.create(user: User.first, friend: User.last)
Friendship.create(user: User.first, friend: User.fourth)
Friendship.create(user: User.second, friend: User.third)

# retrieving the friends of the first user
User.first.friends