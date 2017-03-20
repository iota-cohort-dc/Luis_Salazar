from django.shortcuts import render,redirect
import random
import datetime

# Create your views here.
def index(request):
	if 'sentence' in request.session:
		pass
	else:
		request.session['sentence'] = []

	if 'gold' in request.session:
		pass
	else:
		request.session['gold'] = 0

	return render(request, 'ninjagold/index.html')

def process(request):
	if request.method == 'POST':	
		if request.POST['build'] == 'farm':
			gold = random.randrange(10,20)
			farmsent = "Earned " + str(gold) + " golds from the farm" +" "+ str(datetime.datetime.now().strftime('(%Y/%m/%d %H:%M)'))
			request.session['sentence'].append(farmsent)
			request.session['gold'] += gold

		elif request.POST['build'] == 'cave':
			request.session['cave'] = random.randrange(5,10)
			cavesent = "Earned " + str(request.session['cave']) + " golds from the farm" +" "+ str(datetime.datetime.now().strftime('(%Y/%m/%d %H:%M)'))
			request.session['sentence'].append(cavesent)
			request.session['gold'] += request.session['cave']

		elif request.POST['build'] == 'house':
			request.session['house'] = random.randrange(2,5)
			housesent = "Earned " + str(request.session['house']) + " golds from the farm" +" "+ str(datetime.datetime.now().strftime('(%Y/%m/%d %H:%M)'))
			request.session['sentence'].append(housesent)
			request.session['gold'] += request.session['house']

		elif request.POST['build'] == 'casino':
			request.session['casino'] = random.randrange(-50,50)
			cassent = "Earned " + str(request.session['casino']) + " golds from the farm" +" "+ str(datetime.datetime.now().strftime('(%Y/%m/%d %H:%M)'))
			request.session['sentence'].append(cassent)
			request.session['gold'] += request.session['casino']
		
	return redirect('/')