from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'secretapp/index.html')

def secret(request):
	return render(request, 'secretapp/secrets.html')