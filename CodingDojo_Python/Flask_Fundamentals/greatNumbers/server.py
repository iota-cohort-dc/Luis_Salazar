from flask import Flask, render_template, request, redirect,session,flash
app = Flask (__name__)
app.secret_key = 'ThisisSecret'
import random

@app.route('/')
def index():
	
	if 'num' in session:
		pass
	else: session['num'] = random.randrange(0,101)
	print session['num']

	return render_template('index.html')

@app.route('/game', methods=['POST'])
def right():

	print request.form['guess']
	
	if session['num'] == int(request.form['guess']):
		print 'win'
		return render_template('win.html', win = 'You Win!')
		# return redirect('/')

	elif session['num'] > int(request.form['guess']):
		print 'too low'
		return render_template('index.html', low='too low')
	
	elif session['num'] < int(request.form['guess']):
		print 'too high'
		return render_template('index.html', high='too high')

@app.route('/win',methods=['POST'])
def win():

	session.pop('num')
	return redirect('/')


app.run(debug=True)