from flask import Flask,render_template,request,redirect,session,flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask (__name__)
app.secret_key = 'thisisSecret'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/submitted', methods=['POST'])
def create_user():
   



    if len(request.form['email']) < 1:
        flash('Need an email!')
        return redirect('/')

    elif not EMAIL_REGEX.match(request.form['email']):
        flash('invalid email')
        return redirect('/')
    
    if len(request.form['fname']) < 1 or request.form['fname'].isalpha()==False:
        flash('What is your first name?')
        return redirect('/')

    if len(request.form['lname']) < 1 or request.form['lname'].isalpha()==False:
        flash('I need a last name, duh.')
        return redirect('/')
    
    if len(request.form['pass']) < 8:
        flash('Password needs to be longer')
        return redirect('/')

    if len(request.form['confirm']) < 8:
        flash('Confirm that ish...')
        return redirect('/')

    if request.form['pass'] != request.form['confirm']:
        flash('Paswords do not match bruh...')
        return redirect('/')
    else:
        flash('word, you did it')
        
        return redirect('/')

app.run(debug=True)