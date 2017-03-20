from django.shortcuts import render,redirect
from .models import Courses

# Create your views here.
def index(request):
	context = {
	'courses': Courses.objects.all(),
	}
	return render(request, 'courses/index.html', context)

def poop(request):

		Courses.objects.create(name = request.POST['name'], description = request.POST['description'])
	
		return redirect('/')

def delete(request,id):
	context = {
	'courses': Courses.objects.get(id=id)
	}
	
	return render(request,'courses/delete.html',context)

def destroy(request,id):
	Courses.objects.get(id=id).delete()
	return redirect('/')

