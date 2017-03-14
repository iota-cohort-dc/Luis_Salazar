from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
	
	query = 'select * from friends'
	friends = mysql.query_db(query)
	return render_template('index.html', all_friends = friends)

@app.route('/friends', methods=['POST'])
def create():

	print request.form['fname']
	print request.form['lname']
	query = 'Insert Into friends(first_name, last_name, created_at, updated_at) Values (:first_name, :last_name,now(), now())'

	data = {
			'first_name': request.form['fname'],
			'last_name': request.form['lname'],
			}
	mysql.query_db(query,data)

	return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit(id):

	query = 'SELECT * FROM friends WHERE id = :specific_id'
	data = {
			'specific_id': id
			}
	homies = mysql.query_db(query,data)

	return render_template('friends.html', one_friend=homies)

@app.route('/friends/<id>', methods=['POST'])
def update(id):

	query = 'UPDATE friends SET first_name = :first_name, last_name = :last_name WHERE id = :id'
	data = { 'first_name': request.form['first_name'],
			'last_name': request.form['last_name'], 
			'id': id
			}
	mysql.query_db(query,data)
	
	return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def delete(id):

	query = "DELETE FROM friends WHERE id = :id"
	data = {'id': id}
	mysql.query_db(query, data)
    
	return redirect('/')






app.run(debug=True)