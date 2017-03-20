from django.shortcuts import render, redirect

# Create your views here.


def index(request):
	return render(request, 'vinMVC/index.html')

def show(request):
	print (request.method)
	return render(request, 'vinMVC/show_users.html')

def create(request):
	print (request.method)
	if request.method == 'POST':
		print (request.POST)
		request.session['name'] = request.POST['first_name']
		return redirect('/')
	else:
		return redirect('/')