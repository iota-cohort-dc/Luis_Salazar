from flask import Flask,render_template,request,redirect,session,flash

app = Flask (__name__)
app.secret_key = 'thisisSecret'

@app.route('/')
def index():

	return render_template('index.html')

@app.route('/ninja')
def all():

	displayAll =True

	return render_template('ninja.html', displayAll=displayAll)

@app.route('/ninja/<color>')
def ninjas(color):

	displayAll = False

		
	return render_template('ninja.html', displayAll=displayAll, color=color )






app.run(debug=True)