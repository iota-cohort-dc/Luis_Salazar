from django.shortcuts import render, redirect

# Create your views here.
def index(request):
	if 'count' in request.session:
		pass
	else:
		request.session['count'] = 0

	return render(request,'surveyapp/index.html')

def success(request):
	if request.method == 'POST':
		request.session['name'] = request.POST['name']
		request.session['place'] = request.POST['place']
		request.session['language'] = request.POST['language']
		request.session['comm'] = request.POST['comm']
		request.session['count'] += 1

	return redirect('/display')

def display(request):

	return render(request,'surveyapp/success.html')
