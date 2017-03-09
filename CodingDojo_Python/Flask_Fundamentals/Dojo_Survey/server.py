from flask import Flask,render_template,request,redirect,session,flash
app = Flask (__name__)
app.secret_key = 'thisisSecret'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/submitted', methods=['POST'])
def create_user():
   



    if len(request.form['name']) < 1:
        flash('The name can not be empty fool!')
        return redirect('/')
    
    if len(request.form['comments']) < 1:
        flash('needs a message')
        return redirect('/')
    else:
        print "I'm here"
        name = request.form['name']
        place = request.form['place']
        language = request.form['language']
        comment = request.form['comments']
        
        return render_template('submitted.html',  name=name, place=place,language=language,comment=comment)

app.run(debug=True)

