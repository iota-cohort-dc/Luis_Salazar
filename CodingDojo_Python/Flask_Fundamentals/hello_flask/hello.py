# from flask import Flask # Import Flask to allow us to create our app.
# app = Flask(__name__) 	# Global variable __name__ tells Flask whether or not we are running the file
# 						# directly, or importing it as a module.

# @app.route('/')			# The "@" symbol designates a "decorator" which attaches the following
# 						# function to the '/' route. This means that whenever we send a request to
# 						# localhost:5000/ we will run the following "hello_world" function.
# def hello_world():
# 	return 'Hello World!'	# Return 'Hello World!' to the response.
# app.run(debug=True)			# Run the app in debug mode.
#*****************************
# from flask import Flask 
# app = Flask(__name__) 	
						

# @app.route('/')			
						
# def hello_world():
# 	return 'Hello World!	
# app.run(debug=True)	
#*****************************
# from flask import Flask, render_template #added render_template
# app = Flask(__name__) 	
						

# @app.route('/')			
						
# def hello_world():
# 	return render_template('index.html')	#return render_templates(destination file), renders the template then returns it.
# app.run(debug=True)	 
#*****************************
from flask import Flask, render_template #added render_template
app = Flask(__name__) 	
						

@app.route('/')			
						
def hello_world():
	return render_template('index.html', name='Luis')	#return render_templates(destination file), renders the template then returns it.


@app.route('/success')
def success():
	return render_template('success.html')
app.run(debug=True)
#*****************************

# @app.route('/your_route')
# def function_name():
# 	return render_template('your_route.html')

