from flask import Flask, render_template, request, redirect,session
app = Flask (__name__)
app.secret_key = 'ThisisSecret'

# count += 1 on refresh - DONE
#count += 2 on button
#count reset on reset button


@app.route('/')
def index():
	print session
	if 'counter' in session:
		session['counter'] +=1
	else:
		session['counter'] = 1
	return render_template('index.html')

@app.route('/count', methods=['POST'])
def count():
	print request.form['hv']
	session['counter'] +=1
	return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
	session['counter'] = 0
	# session.clear()
	# session.pop('counter')
	return redirect('/')


app.run(debug=True)