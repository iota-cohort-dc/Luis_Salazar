from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request,'NinjaApp/index.html')

def ninjas(request):

	context = {
	'displayAll': True
	}

	return render(request,'NinjaApp/ninjas.html',context)

def show(request,color):


	context = {
		'displayAll': False,
		'color': color
	}
	return render(request,'NinjaApp/ninjas.html', context)