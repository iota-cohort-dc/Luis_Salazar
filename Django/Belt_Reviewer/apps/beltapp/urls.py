from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add$', views.add, name='add'),
	url(r'^makereview$', views.makereview, name='makereview'), 
	# url(r'^creation$', views.creation, name='creation'), 
    url(r'^bookreview/(?P<id>\d+)$', views.bookreview, name='bookreview'),
    url(r'^users/(?P<id>\d+)$', views.userpage, name='userpage'),
    # url(r'^delete/(?P<id>\d+)$', views.delete, name='delete'),    

]