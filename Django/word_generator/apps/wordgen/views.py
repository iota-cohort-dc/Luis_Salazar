from django.shortcuts import render,redirect
from django.utils.crypto import get_random_string

# Create your views here.

def index(request):
	if "count" in request.session:
		pass
	else:
		request.session['count'] = 0

	return render(request,'wordgen/index.html' )

def create(request):
	
	if request.method == 'POST':
		request.session['word'] = get_random_string(length=14)
		request.session['count'] += 1
		return redirect('/')
	else:
		return redirect('/')