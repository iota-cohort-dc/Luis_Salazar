from django.shortcuts import render
from models import Users,Messages,Comments

# Create your views here.
def index(request):
	Users.objects.create(first_name='Luis', last_name='Saladbar', email = 'luis@gmail.com', password = 'poop')
	# users = Users.objects.all()
	# u = Users.objects.get(id=1)
	# print (u.first_name)

	# u.first_name = 'Jeff'
	# u.save()

	# j = Users.objects.get(id=1)
	# print (j.first_name)

	# print (Users.objects.get(first_name='Jeff'))

	users = Users.objects.raw('SELECT * FROM wallerd_users') #= "appname_table" *must be lowercase*

	for user in users:
		print user.first_name
	
	return render(request, 'wallerd/index.html')
	