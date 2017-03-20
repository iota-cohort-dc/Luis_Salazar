from flask import Flask, request, redirect, render_template,session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'loginDb')
app.secret_key = 'thisaSecret'

@app.route('/', methods=['GET'])
def index():

	return render_template('index.html')

@app.route('/success', methods=['POST'])
def success():
	if not EMAIL_REGEX.match(request.form['email']):
		flash('INVALID EMAIL')
		return redirect('/')
	if len(request.form['password'])<1:
		flash('Must enter a password')
		return redirect('/')
	else:
		email = request.form['email']
		password = request.form['password']
		user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
		query_data = { 'email': email }
	
		session['user'] = mysql.query_db(user_query, query_data) # user will be returned in a list
	
	if bcrypt.check_password_hash(session['user'][0]['pw_hash'], password):
		return redirect('/wall')
	else:
		flash('Sorry could not verify Email or Password. Please try again')
		return redirect('/')


		

@app.route('/create', methods=['POST'])
def create():
	if len(request.form['fname']) < 2:
		flash('First name needs to be greater that 2 characters')
		return redirect('/')
	if len(request.form['lname']) <2:
		flash('Last name needs to be greater that 2 characters')
		return redirect('/')
	if not EMAIL_REGEX.match(request.form['email']):
		flash('INVALID EMAIL')
		return redirect('/')
	if len(request.form['pass']) <= 7:
		flash('Password must be atleast 8 characters')
		return redirect('/')
	if request.form['pass'] != request.form['conpass']:
		flash ('Passwords do NOT match. please try again.')
		return redirect('/')

	else:
		first_name = request.form['fname']
		last_name = request.form['lname']
		email = request.form['email']
		password = request.form['pass']

		pw_hash = bcrypt.generate_password_hash(password)
		insert_query = "INSERT INTO users (first_name, last_name, pw_hash, email) VALUES (:first_name, :last_name, :pw_hash, :email)"
		query_data = { 'first_name': first_name, 'last_name': last_name, 'pw_hash': pw_hash, 'email': email }
		mysql.query_db(insert_query, query_data)
		flash('Success! Thank you for registering')
		return redirect ('/')

@app.route('/message', methods=['POST'])
def message():

	message = request.form['message']	
	insert_query = "INSERT INTO messages (message, created_at,updated_at, users_id) VALUES (:message, NOW(),NOW(), :users_id)"
	query_data = { 'message': message, 'users_id': session['user'][0]['id'] }
	message = mysql.query_db(insert_query, query_data)
	
	return redirect('/wall')

@app.route('/wall')
def wall():

	message_query = 'SELECT users.first_name, users.last_name, messages.message, messages.created_at, messages.id FROM users JOIN messages ON users.id = messages.users_id ORDER BY messages.id DESC'
	sentences = mysql.query_db(message_query)
	
	comments_query = 'SELECT users.first_name, users.last_name,comments.messages_id, comments.comment, comments.created_at FROM users JOIN comments ON users.id = comments.users_id ORDER BY comments.id ASC'
	comms = mysql.query_db(comments_query)

	return render_template('success.html', sentences = sentences, comms = comms)

@app.route('/comments/<id>', methods=['POST'])
def comments(id):
	
	comment = request.form['comments']
	insert_query = "INSERT INTO comments (comment, created_at, updated_at, users_id, messages_id) VALUES (:comment,NOW(),NOW(),:users_id,:messages_id)"
	query_data = {'comment':comment, 'users_id': session['user'][0]['id'], 'messages_id':id}
	mysql.query_db(insert_query,query_data)
	return redirect('/wall')

@app.route('/logoff')
def logoff():
	session.clear()
	return redirect('/')











app.run(debug=True)