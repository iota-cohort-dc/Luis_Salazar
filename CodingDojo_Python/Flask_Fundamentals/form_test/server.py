from flask import Flask, render_template, request, redirect,session
app = Flask (__name__)
app.secret_key = 'ThisisSecret'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    print "Got Post Info"
    # recall the name attributes we added to our form inputs
    # to access the data that the user input into the fields we use request.form['name_of_input']
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect('/show') # redirects back to the '/' route

@app.route('/show')
def show_users():
	return render_template('users.html')
app.run(debug=True)