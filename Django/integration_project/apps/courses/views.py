from django.shortcuts import render,redirect
from .models import Courses,Users,LoginReg
from django.core.urlresolvers import reverse
from django.db.models import Count


# Create your views here.
def index(request):
	context = {
	'courses': Courses.objects.all(),
	}
	return render(request, 'courses/index.html', context)

def poop(request):

		Courses.objects.create(name = request.POST['name'], description = request.POST['description'])
	
		return redirect(reverse('courses:index'))

def delete(request,id):
	context = {
	'courses': Courses.objects.get(id=id)
	}
	
	return render(request,'courses/delete.html',context)

def destroy(request,id):
	Courses.objects.get(id=id).delete()
	return redirect(reverse('courses:index'))

def choose(request):
	context = {
	'number': LoginReg.objects.all(), 
	'courses': Courses.objects.all(),
	'user': Users.objects.all().annotate(num_users=Count('all_users')),
	}
	return render(request, 'courses/users_course.html',context)

def addreal(request):
	user = Users.objects.get(id=request.POST['Users'])
	print user
	course = Courses.objects.get(id=request.POST['Courses'])
	print course
	loginreg = LoginReg.objects.create(users = user, course = course)
	print loginreg

	return redirect(reverse('courses:choose'))


