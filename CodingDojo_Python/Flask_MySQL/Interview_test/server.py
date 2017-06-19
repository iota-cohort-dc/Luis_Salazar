from flask import Flask, request, redirect, render_template,session, flash, jsonify
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'interview_test')
app.secret_key = 'thisaSecret'

@app.route('/', methods=['GET'])
def index():

	players_query = 'SELECT * FROM players'
	query = mysql.query_db(players_query)
	return render_template('index.html', query = query)

@app.route('/players/show/<id>', methods=['GET'])
def show(id):

	query = 'SELECT * FROM players WHERE ilkid = :id LIMIT 1'
	data = {'id' : id }
	player = mysql.query_db(query, data)

	return render_template('show.html', player = player[0])


@app.route('/players/edit/<id>', methods=['GET'])
def player_edit(id):

	query = 'SELECT * FROM players WHERE ilkid = :id LIMIT 1'
	data = {'id' : id }
	player = mysql.query_db(query, data)
	# print player

	return render_template('edit.html', player = player[0])

@app.route('/players/update/<id>', methods=['POST'])
def player_update(id):

	query = 'UPDATE players SET firstname = :firstname, lastname = :lastname, firstseason = :firstseason, lastseason = :lastseason, h_feet = :h_feet, h_inches = :h_inches, college = :college  WHERE ilkid = :id'
	data = { 'firstname': request.form['firstname'],
			'lastname': request.form['lastname'], 
			'firstseason': request.form['firstseason'], 
			'lastseason': request.form['lastseason'], 
			'h_feet': request.form['h_feet'], 
			'h_inches': request.form['h_inches'], 
			'college': request.form['college'], 
			'id': id,
			}
	mysql.query_db(query,data)
	
	return redirect('/')


@app.route('/players/search', methods=['POST'])
def search():

	search_query = 'SELECT * FROM players WHERE firstname = :firstname'
	search_data = {'firstname': request.form['firstname']}
	query = mysql.query_db(search_query,search_data)
	print query;
	return jsonify(query = query)

@app.route('/players/delete/<id>', methods=['POST'])
def delete(id):

	query = "DELETE FROM players WHERE ilkid = :id"
	data = {'id': id}
	mysql.query_db(query, data)
    
	return redirect('/')

app.run(debug=True)