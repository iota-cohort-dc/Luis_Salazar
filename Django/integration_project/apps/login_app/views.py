from django.shortcuts import render,redirect
from .models import Users
from django.core.urlresolvers import reverse

import bcrypt


# Create your views here.
def index(request):
	# print Users.objects.create()
	return render(request, 'login_app/index.html')

def success(request):
	if request.method == 'POST':
		fname = Users.objects.First(request.POST['fname'])
		lname = Users.objects.Last(request.POST['lname'])
		mail = Users.objects.Mail(request.POST['email'])
		password = Users.objects.Password(request.POST['pass'])
		passwordcon = Users.objects.Passwordconfirm(request.POST['conpass'],request.POST['pass'])
		
		if fname and lname and mail and password and passwordcon:
			passverify = request.POST['pass']
			hashed = bcrypt.hashpw(str(passverify), bcrypt.gensalt())
			user = Users.objects.create (first_name = request.POST['fname'], last_name= request.POST['lname'], email = request.POST['email'], password = hashed )
			print user
			return render(request, 'login_app/success.html')
		else:
			context = {
				'fail': 'Sorry, please enter vaild information.'
			}
			return render(request,'login_app/index.html',context)

def login(request):
	if request.method == 'POST':
		mail = request.POST['email']
		password = request.POST['password']
		user = Users.objects.filter(email = mail)
	if bcrypt.hashpw(str(password),str(user[0].password)) == user[0].password:
		context = {
			'name':str(user[0].first_name),
			'success':'Successfully registerd(or logged in)!'
		}
		return redirect(reverse('courses:index'))
	else:
		context = {
			'notmatch':'Sorry, your email or password did not match our records'
		}
		return render(request,'login_app/index.html',context)


