from django.shortcuts import render,redirect
from .models import Email

# Create your views here.
def index(request):
	return render(request, 'emailval_app/index.html')

def success(request):
	if request.method == 'POST':
		result = Email.objects.validate(request.POST['email'])
		if result:
			context = {
				'flash': result[1],
				'emails': Email.objects.all()
			}
			return render(request, 'emailval_app/success.html',context)
		else:
			context = {
				'false': 'This is not a vaild Email'
			}
			return render(request,'emailval_app/index.html',context)

	
