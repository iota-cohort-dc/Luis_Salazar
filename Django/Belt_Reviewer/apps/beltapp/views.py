from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.db.models import Count
from .models import Users, Books, Authors, Reviews

# Create your views here.
def index(request):
	user = request.session['log_user_id']
	revs = Reviews.objects.all().order_by('-created_at')[:3]
	context = {
		'user':Users.objects.get(id = user),
		'book':Reviews.objects.all().order_by('-created_at')[:3],
		'other':Reviews.objects.exclude(pk__in=revs)	
		}

	return render(request, 'beltapp/index.html',context)

def add(request):
	context = {
		'authors': Authors.objects.all()
	}
	return render(request, 'beltapp/add.html',context)

def makereview(request):
	if request.method == 'POST':
		user = request.session['log_user_id']
		title = request.POST['title']
		author_name = request.POST['addauthor']
		
		if author_name == '':
			author_name = request.POST['selauthor']
		
		book = Books.objects.create(title = title)
		print author_name
		
		if not Authors.objects.filter(name = author_name).exists():
			author = Authors.objects.create(name = author_name)

		this_book = Books.objects.get(title = title)
		this_author = Authors.objects.get(name = author_name)
		this_author.books.add(this_book)

		Reviews.objects.create(content = request.POST['review'], rating = int(request.POST['rating']), user = Users.objects.get(id = user), book = this_book)

	return redirect(reverse('books:index'))

# def creation(request):
# 	context = {
# 		'book':Books.objects.get(id=id)
# 	}
# 	return render(request'beltapp/bookreview', context)

def bookreview(request, id):
	if request.method == 'POST':
		user = request.session['log_user_id']

		Reviews.objects.create(content=request.POST['rev'], rating = int(request.POST['rating']), user = Users.objects.get(id = user), 	book = Books.objects.get(id = id)
			)	
	context = {
		'review':Reviews.objects.filter(book = id),
		'book': Books.objects.get(id=id),
		'author':Authors.objects.get(books = id)
	}
	return render(request, 'beltapp/bookreview.html', context)
	

def userpage(request, id):
	context = {
		'user': Users.objects.filter(id=id).annotate(all_revs=Count('posted_reviews')),
		'review': Reviews.objects.filter(user = id)
	}
	return render(request, 'beltapp/userpage.html',context)

# def delete(request,id):
		
# 	Reviews.objects.get(id = id).delete()

# 	return redirect(reverse('books:bookreview'))





