from flask import Flask, render_template, request, redirect,session,flash
app = Flask (__name__)
app.secret_key = 'thisisSecret'
import random

@app.route('/')
def index():
	if 'sentence' in session:
		pass
	else: 
		session['sentence'] = []

	if 'gold' in session:
		pass
	else:
		session['gold'] = 0

	return render_template('index.html')

@app.route('/process',methods=['POST'])
def building():

	

	if request.form['build'] == 'farm':
		session['farm'] = random.randrange(10,20)
		farmsent = "Earned " + str(session['farm']) + " golds from the farm"
		session['sentence'].append(farmsent)
		session['gold'] += session['farm']
		print session['sentence']

	if request.form['build'] == 'cave':
		session['cave'] = random.randrange(5,10)
		cavesent = "Earned " + str(session['cave']) + " golds from the cave"
		session['sentence'].append(cavesent)
		session['gold'] += session['cave']
		print session['sentence']

	if request.form['build'] == 'house':
		session['house'] = random.randrange(2,5)
		housesent = "Earned " + str(session['house']) + " golds from the house"
		session['sentence'].append(housesent)
		session['gold'] += session['house']
		print session['sentence']

	if request.form['build'] == 'casino':
		coin = random.randrange(0,2)
		print coin
		if coin == 0:
			session['casino'] = random.randrange(0,50)
			cassent = "Earned " + str(session['casino']) + " golds from the casino"
			session['sentence'].append(cassent)
			session['gold'] += session['casino']
		if coin == 1:
			session['casino'] = random.randrange(0,50)
			cassent = "Lost " + str(session['casino']) + " Ouch you suck!"
			session['sentence'].append(cassent)
			session['gold'] -= session['casino']
			

	return redirect('/')

app.run(debug=True)

#generate random numbers in index.html
#created app.route(/process,methods=post)
#created if statements to generate random numbers for each build
#printed each build
#created variable for each build, entered into a str(), and printed.
#created if statement in index route withe session['sentence']=[arr]
#applied 

