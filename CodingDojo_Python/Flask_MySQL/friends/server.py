from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
	query = 'select * from friends'
	friends = mysql.query_db(query)
	return render_template('index.html', all_friends = friends)

########## INSERTING ##############
@app.route('/friends',methods=['POST'])
def create():
	print request.form['first_name']
	print request.form['last_name']
	# query = 'Insert Into friends(first_name, last_name, occupation, created_at, updated_at) Values (:first_name, :last_name, :occupation, now(), now())'

	# data = {
	# 		'first_name': request.form['first_name'],
	# 		'last_name': request.form['last_name'],
	# 		'occupation': request.form['occupation']
	# 		}
	# mysql.query_db(query,data)

	return redirect ('/')

########## FETCHING ##############
# @app.route('/friends/<friend_id>')
# def show(friend_id):
#     # Write query to select specific user by id. At every point where
#     # we want to insert data, we write ":" and variable name.
#     query = "SELECT * FROM friends WHERE id = :specific_id"
#     # Then define a dictionary with key that matches :variable_name in query.
#     data = {'specific_id': friend_id}
#     # Run query with inserted data.
#     friends = mysql.query_db(query, data)
#     # Friends should be a list with a single object,
#     # so we pass the value at [0] to our template under alias one_friend.
#     return render_template('index.html', one_friend=friends[0])

########## UPDATING ##############
# @app.route('/update_friend/<friend_id>', methods=['POST'])
# def update():
	
# 	query = ('Update friends Set first_name = :first_name, last_name = :last_name, occupation = :occupation Where id = :id')
# 	data = {
# 			'first_name': request.form['first_name'],
# 			'last_name': request.form['last_name'],
# 			'occupation': request.form['occupation'],
# 			'id': friend_id
# 			}
# 	mysql.query_db(query,data)

# 	return redirect ('/')

########## DELETING ##############
# @app.route('/remove_friend/<friend_id',methods=['POST'])
# def delete(friend_id)
	
# 	query = 'Delete From friends Where id = :id'

# 	data = {'id': friends_id}

# 	mysql.query_db(query,data)

# 	return redirect('/')









app.run(debug=True)