from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'thisiSecret'
mysql = MySQLConnector(app,'emaildb')

@app.route('/')
def index():

	return render_template('index.html')

@app.route('/success', methods=['POST'])
def success():

	if not EMAIL_REGEX.match(request.form['email']):
		flash('INVALID EMAIL')
		return redirect('/')
	else:
	
		session['email'] = request.form['email'] 
		emailData = str(session['email'])
		session['sentence'].append(emailData)


		query = 'INSERT INTO email(email, created_at, updated_at) VALUES (:email, now(), now())'
		data = {
			'email': request.form['email']
			}
		mysql.query_db(query,data)

		table = 'SELECT * FROM email'
		info = mysql.query_db(table)
		
		flash('The email address you entered ' + emailData + ' is a Valid email. Thank you!')
	
		return render_template('success.html', all_Info=info)




app.run(debug=True)